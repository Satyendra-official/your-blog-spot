import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
var someText = "";

app.use(bodyParser.urlencoded({extended:true}));


var blogList = ["Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,  .., comes from a line in section 1.10.32.","looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33","of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet", "humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there"]


app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.render("index.ejs", {blog:blogList})
})

app.get("/blogs", (req, res)=>{
    res.render("index.ejs", {blog:blogList})
})
app.get("/about", (req, res)=>{
    res.render("about.ejs")
})
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
  });

app.post("/submit", (req, res)=>{
    someText = req.body["blogText"];
    blogList.push(someText);
    res.render("index.ejs",{blog:blogList})
})

app.post("/delete", (req, res)=>{
    var dlt = false;
    someText = req.body["del"]
    if(!req.body["del"]){
        dlt=true;
    blogList.pop(someText);

    } 

    res.render("index.ejs",{blog:blogList})
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}.`);
})














// {
//     1: ["title1", "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,  .., comes from a line in section 1.10.32."],
//     2: ["title2", "looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33"],
//     3: ["title3", "of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet"],
//     4: ["title4", "humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there"],
//     5: ["title5", "repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"],
// }