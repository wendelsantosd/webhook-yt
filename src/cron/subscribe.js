const cron = require("node-cron");

async function subscribe() {
  const hubCallbackUrl = `${process.env.CALLBACK_HOST}/api/youtube-webhook`;
  const hubTopicUrl = `https://www.youtube.com/xml/feeds/videos.xml?channel_id=${process.env.CHANNEL_ID}`;

  const endpoint = `http://pubsubhubbub.appspot.com/subscribe?hub.callback=${hubCallbackUrl}&hub.mode=subscribe&hub.topic=${hubTopicUrl}&hub.lease_seconds=432000`;

  const result = await fetch(endpoint, {
    method: "POST",
    body: {},
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  });

  console.log(result.status, await result.text());
}

const task = cron.schedule(process.env.CRON_SCHEDULE_SUBSCRIBE, subscribe, {
  scheduled: false,
  timezone: "America/Sao_Paulo",
});

subscribe().then(() => {
  task.start();
});

module.exports = task;
