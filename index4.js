import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("server is runnig")
})

app.get("/", (req, res)=> {
    return  res.send("get api")
})

app.get("/home", (req, res)=> {
    return res.send("Done")
})

app.get("/home/page1", (req, res)=> {
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    console.log(req.headers.authorization)
    res.send("Done from home/page1")
})

