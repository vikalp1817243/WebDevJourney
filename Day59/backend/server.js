import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [
  {
    email: "vikalp@test.com",
    password: "123456"
  }
];

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if(user){
    return res.json({
      success: true,
      message: "Login successful"
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});