import express from 'express';
const app = express();



app.get("/", (req, res) => {
    res.send("hello world");
});



const PORT = 5000
app.listen(PORT, (err) => err ? console.log(err) : console.log(`server is runnig ${PORT}`));