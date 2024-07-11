const express = require('express');
const viewEngine = require('./config/viewEngine');
const initWebRouter = require('./routes/web');
const bodyParser = require('body-parser');
require('dotenv').config();

let app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config viewEngine
viewEngine(app);
initWebRouter(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('server is running on: ' + port);
});
