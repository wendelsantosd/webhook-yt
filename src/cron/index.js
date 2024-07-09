const subscribe = require("./subscribe");

class ManagerCron {
  constructor() {
    this.jobs = [subscribe];
  }

  run() {
    this.jobs.forEach((job) => job.start());
  }
}

module.exports = new ManagerCron();
