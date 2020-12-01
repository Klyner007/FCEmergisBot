const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

client.on("messageDelete", (msg) => {
  msg.reply("Stop deleting messages!");
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "Merry") {
    msg.reply("Christmas!");
  }
});

client.login(process.env.BOT_TOKEN);
