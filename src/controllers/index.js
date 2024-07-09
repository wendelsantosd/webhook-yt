const saveVideo = require("../api");

const controllers = {
  challenge: ({ query: { "hub.challenge": challenge } }, res) => {
    console.log(challenge);
    res.status(200).end(challenge);
  },
  post: async (req, res) => {
    const data = {
      videoId: req.body.feed.entry[0]["yt:videoId"][0],
      title: req.body.feed.entry[0].title[0],
      link: req.body.feed.entry[0].link[0].$.href,
    };

    await saveVideo(data);

    console.log("Completed");
    res.status(204).end();
  },
};

module.exports = controllers;
