import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("server is runnig")
})

app.get("/x", (req, res)=> {
    res.send(req.headers)
    res.send(req.headers.authorization)    
})


app.get("/:name", (req, res)=> {
    res.send("Hello  " +req.params.name)  
})

app.get( "/", (req, res) => {
    res.send("hello "+req.query.name + "  age " + req.query.age)
} )
