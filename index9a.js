import express from 'express'
const app = express()

const auth = (req, res, next) => {
    const pass = "/1234";
    if(req.url == pass) next();
    else res.send("unauthorized")
}
app.use(auth)
app.get( "/:x",  (req,  res) => {
    console.log(req.params.x)
    
    res.send("wlc")
} )

app.listen(8888, () => {console.log("server is live")})