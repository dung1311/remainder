import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config(); 

let app = express();

// config viewEngine
viewEngine(app);
initWebRouter(app);
// 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server is running on: " + port);
})

