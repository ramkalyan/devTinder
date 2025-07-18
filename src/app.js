const express = require("express");
const app = express();

app.use("/hello", (req, res) => {
    res.send("Im hello node. Hello");
})
app.get("/user", (req,res) => {
    res.send({firstName: "Ram", lastName: "Kalyan"});
});
app.post("/user", (req,res) => {
    res.send("Data saved to Database");
});
// app.use("/", (req, res) => {
//     res.send("Im learning node. Bless me");
// })
app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777..")
});

console.log("Hey this is node js");