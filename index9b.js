import express from "express";
const app = express();
app.use(express.json());

const auth = (req, res, next) => {
    const val = req.body.token
    if(val === '1234') next()
    else res.send("unauthrized")
};

app.use(auth);

app.post("/", (req, res) => {
    res.send("wlc");
});

app.listen(8888, () => {
  console.log("server is live");
});
