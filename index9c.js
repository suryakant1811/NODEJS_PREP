import express from "express";
const app = express();
app.use(express.json());

const auth = (req, res, next) => {
    const val = req.headers.authorization
    const token = val.split(" ")
    console.log(token)
    if(token[1] === '1234') next()
    else res.send("unauthrized")
};

app.use(auth);

app.get("/", (req, res) => {
    res.send("wlc");
});

app.listen(8888, () => {
  console.log("server is live");
});
