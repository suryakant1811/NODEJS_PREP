import express from 'express'
const app = express()

app.get("/", (req, res) => {
    const user = {
        name:"John",
        email:"jogn@email.com",
        role:"student"
    }
    res.send(user)
})

app.listen(8888, () => {console.log("server running")})