const express = require("express");
const app = express();
const fs = require("fs");

app.use("/scripts", express.static("./scripts"));
app.use("/styles", express.static("./styles"));
app.use("/images", express.static("./images"));

app.get("/", (req, res) => {
    sendHtml("index", res);
})

app.get("/login", (req, res) => {
    sendHtml("login", res)
})

app.get("/main" , (req, res) => {
    sendHtml("main", res);
})

let sendHtml = (url, res) => {
    let doc = fs.readFileSync("html/" + url + ".html", "utf-8");
    res.send(doc);
}

let port = 8000;
app.listen(port, () => {
    console.log("server running on http://localhost:" + port)
})

