require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const ManagerCron = require("./cron");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(routes);

app.listen(process.env.PORT || 1338, () => {
  ManagerCron.run();
  console.log(`COB Video Webhook Running on port ${process.env.PORT || 1338}`);
});
