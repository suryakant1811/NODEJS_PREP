import express from 'express'
const app = express()

const logger = (req, res, next) => {
        req.name = "Surkant dwivedi"
        next()
}

// app.use(logger)


// app.get( "/", (req, logger, res) => {
//     res.json(req.name)
// } )

app.get( "/", (req,  res) => {
    app.use(logger)
    res.json(req.name)
} )

// app.get("/", (req, res) => {
//     // res.end()   --> end teh cycle of req res
//     // res.send("hi")  --> end req res cycle by sending obj recieve in json as respapi  is json way
//     // res.json( {name: "anuj", age: "21"} )  --> sended object recieve json as we wrote .json
// })

// two method to call middleware by giving the function name in between the req, res or call it inside the body of function


app.listen(8888, () => {console.log("server is live")})