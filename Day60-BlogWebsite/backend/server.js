import express from "express";

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));


app.use(express.static("./frontend"));
app.set("view engine", "ejs");
app.set("views", "./frontend/pages");

app.get("/", (req, res)=>{
  res.render("index")
})
app.get("/about", (req, res)=>{
  res.render("about");
})


app.get('/clubreq', function(req, res, next){
        res.render('clubreq', {
            title: 'Club Requests',
            "clubreq" : docs
        });       
});
app.post('/clubreq', function(req, res, next){
    //I want to access clubname and type datavariables here and store it in my mongodb database
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});