import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("About Page");
})
// app.get("/contact", (req, res) => {
//     res.send("Contact Me: john@example.com");
// })
// app.get("/about", (req, res) => {
//     res.send("About Me");
// })


app.listen(port, () => { //port 3000
    console.log(`Server is running on port ${port}`);  //callback function
});