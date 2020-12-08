var MessageHandler = require("./util/message-handler.js");
require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

var messageHandler = new MessageHandler();

client.on("messageDelete", (msg) => {
  msg.reply("Stop deleting messages!");
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  messageHandler.handleMessage(client, msg);
});

client.login(process.env.BOT_TOKEN);
