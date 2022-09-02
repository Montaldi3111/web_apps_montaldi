const express = require('express');
const app = express();
const path = require("path")

app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"), () =>{
    console.log("Running server on https://localhost:" + app.get("port"))
})

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "./index.html"))
})