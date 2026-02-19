import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("server is runnig")
})

app.get("/:id", (req, res)=> {
    console.log(req.params)
    console.log(req.params.id)
    console.log(req.url)
    res.send(req.params.id)
})

app.get("/:id/:email", (req, res)=> {
    console.log(req.params.id)
    console.log(req.params.email)
    console.log(req.url)
    res.send(req.params.id + "    " + req.params.email)
})

app.get("/home", (req, res)=> {
    res.send("hello world")
})

