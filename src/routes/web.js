const express = require("express") 
const chatbot_controllers = require("../controllers/chatbot_controllers");

let router = express.Router();

let initWebRouters = (app)=> {
    router.get("/", chatbot_controllers.getHomePage);

    router.get("/webhook", chatbot_controllers.getWebhook);
    router.post("/webhook", chatbot_controllers.postWebhook);

    return app.use("/", router);
};

module.exports = initWebRouters;