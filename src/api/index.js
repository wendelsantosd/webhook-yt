const axios = require("axios");

const saveVideo = async ({ videoId, title, link }) => {
  try {
    await axios.post(
      `${process.env.STRAPI_HOST}/api/video-webhook`,
      {
        videoId,
        title,
        link,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      }
    );
  } catch (error) {
    console.log(err);
  }
};

module.exports = saveVideo;
