const express=require("express")
const path=require("path")
const hbs=require("hbs")


const app=express()

//Define paths
const publicDirectorPath=path.join(__dirname,"../public")
const viewsPath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")

//Setup handlebars engine
app.set("view engine","hbs")
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory
app.use(express.static(path.join(__dirname,"../public")))

app.get("",(req,res)=>{
    res.render("index",{
        title:"Weather App",
        name:  "degs"
    })
})


app.get("/help",(req,res)=>{
    res.render("help",{
        title: "help",
        message:"annenn",
        name:"degs"
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{
        title: "About me",
        name: "degs"
    })
})

app.get("/weather",(req,res)=>{
    res.send({
        location:"Philly",
        temprature:"31"    
    })
})

app.get("/product",(req,res)=>{
    res.send({
       product:[]   
    })
})


app.get("/help/*",(req,res)=>{
    res.render("404",{
        title:"404",
        name:"degs",
        errorMessage:"Help article not found"
    })
})

app.get("*",(req,res)=>{
    res.render("404",{
        title:"404",
        name:"degs",
        errorMessage:"Page not found"
    })
})


app.listen(3000,()=>{
    console.log("Server is up on port 3000")
})