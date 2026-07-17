import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

let today = new Date();
let day = today.getDay();

app.get("/", (req, res) => {
  let dayType = "the weekday";
  let advice = "it's time to work hard";

  if(day === 6 || day === 0) {
    dayType = "the weekend";
    advice = "it's time to relax";
  }
  res.render("index.ejs", { dayType, advice });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});