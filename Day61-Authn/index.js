import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "myapp_user",
  host: "localhost",
  database: "login_app",
  port: 5432,
  password: "Postgres@987",
});
db.connect();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {

  res.render("register.ejs");
});

app.get("/secrets", (req, res) => {
  res.render("secrets.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  const query = "INSERT INTO users (email, password) VALUES ($1, $2)";
  const resultCheck = await db.query('Select * from users where email = $1', [email]);
  try {
    
    if(resultCheck.rowCount > 0) {
      console.log("User Already exists.");
      res.redirect("/register");
    } 
    else {
      const result = await db.query(query, [email, password]);
      console.log("User registered successfully: $(result)");
      res.redirect("/secrets");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user");
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  const query = "SELECT * FROM users WHERE email = $1 AND password = $2";
  try {
    const result = await db.query(query, [email, password]);
    if(result.rowCount > 0) {
      console.log("User logged in successfully");
      res.redirect("/secrets");
    } else {
      console.log("Invalid credentials");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error logging in user");
  }
  console.log(`Username: ${email}, Password: ${password}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
