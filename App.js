const express = require('express');
const  app = express();
const path =require('path');
const  hbs = require('hbs');
const port =process.env.port||8002;
//public static path
const static_path = (path.join(__dirname, "../public"));
const hbss = path.join(__dirname , "../templates2/views");
const partials_path= path.join(__dirname, "../templates2/partails");


app.set('view engine', 'hbs');
hbs.registerPartials(partials_path);

app.use(express.static(static_path));
app.set("views",hbss );
//hbs.registerPartials(partialspath);


app.get("", (req, res)=>
{
res.render('index'); 
})
app.get("/about",(req, res)=>
{
    res.render('about');
})
app.get("/weather", (req, res)=>
{
    res.render('weather');
})

app.get("*", (req, res)=>
{
    res.render('404error',
    {
        errormsg: "oops this page is not available"

    });
})
app.listen(port, ()=>
{
    console.log(`listening to the port at ${port}`);
})


