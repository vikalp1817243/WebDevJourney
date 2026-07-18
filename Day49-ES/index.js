import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { numberOfLetters: null });
});

app.post("/submit", (req, res) => {
  const firstName = req.body.fName || "";
  const lastName = req.body.lName || "";
  const letters = firstName.length + lastName.length;
  res.render("index", { numberOfLetters: letters });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
