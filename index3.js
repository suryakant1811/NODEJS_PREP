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