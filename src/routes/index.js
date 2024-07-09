const { Router } = require("express");
const bodyParser = require("body-parser");
require("body-parser-xml")(bodyParser);
const controllers = require("../controllers");

const routes = Router();

routes.get("/api/youtube-webhook", controllers.challenge);
routes.post("/api/youtube-webhook", bodyParser.xml(), controllers.post);

module.exports = routes;
