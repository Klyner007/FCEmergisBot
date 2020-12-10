var Actions = require("./discord/actions.js");
var Messages = require("./discord/messages.js");

module.exports = class MessageHandler {
  constructor() {
    this.Actions = new Actions();
    this.Messages = new Messages();
  }

  handleMessage(client, msg) {
    const content = msg.content;
    if (content === "Merry") {
      msg.reply("Christmas!");
    } else if (content.indexOf("love") > -1 || content.indexOf("Love") > -1) {
      msg.react("❤️");
    }

    if (content.indexOf("!") !== 0) {
      return;
    }

    msg.delete();

    const remainingMessage = content.substr(1, content.length);
    const args = remainingMessage.split(" ");
    switch (args.shift()) {
      case "help":
        msg.reply(this.Messages.getHelpMenu(client));
        break;
      case "avatar_url":
        const avatarUrl = msg.author.avatarURL();
        if (avatarUrl) {
          msg.reply(`You can find your own avatar at ${avatarUrl}.`);
        } else {
          msg.reply("You don't have an avatar...");
        }
        break;
      case "activity":
        console.log(msg);
        break;
      case "pickup_line":
        this.pickupLine(msg, args);
        break;
      case "joke":
        this.joke(msg, args);
        break;
      case "fact":
        this.fact(msg, args);
        break;
      case "random":
        this.random(msg, args);
        break;
    }
  }

  joke(msg, args) {
    this.withAddAction(
      args,
      () => {
        this.Actions.joke(function (result) {
          msg.reply(result);
        });
      },
      () => {
        this.Actions.addJoke(args.toString(), (result) => {
          msg.reply(result);
        });
      }
    );
  }

  random(msg, args) {
    this.withAddAction(
      args,
      () => {
        this.Actions.random(function (result) {
          msg.reply(result);
        });
      },
      () => {
        this.Actions.addRandom(args.toString(), (result) => {
          msg.reply(result);
        });
      }
    );
  }

  pickupLine(msg, args) {
    this.withAddAction(
      args,
      () => {
        this.Actions.pickupLine(function (result) {
          msg.reply(result);
        });
      },
      () => {
        this.Actions.addPickupLine(args.toString(), (result) => {
          msg.reply(result);
        });
      }
    );
  }

  fact(msg, args) {
    this.withAddAction(
      args,
      () => {
        this.Actions.funFact(function (result) {
          msg.reply(result);
        });
      },
      () => {
        this.Actions.addFunFact(args.toString(), (result) => {
          msg.reply(result);
        });
      }
    );
  }

  withAddAction(args, defaultAction, addAction) {
    const arg = args.shift();
    if (args.length === 0) {
      defaultAction();
    } else if (args.length > 0 && arg === "--add") {
      addAction();
    }
  }
};
