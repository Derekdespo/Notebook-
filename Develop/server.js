// Dependencies
var express = require("express");
var apiRoutes = require("./routes/apiRoutes")
var htmlRoutes = require("./routes/htmlRoutes")
var app = express();
var PORT = 3000;

// Creates an ability for Express to take care of data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));