const express = require("express");
const app = express();
const path = require('path');
const port = 4030;

app.use(express.static(path.join(__dirname, "gung-ye-web/build")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/gung-ye-web/build/index.html"));
});

app.listen(port, () => {
    console.log(`gung.ye listening on port ${port}`);
});