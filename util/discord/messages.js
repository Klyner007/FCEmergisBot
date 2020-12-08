module.exports = class Messages {
  getHelpMenu(client) {
    return {
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL(),
        },
        title: "Help menu",
        description:
          "Start FC Emergis Bot commands with a `!` to distinguish them from other messages.",
        fields: [
          {
            name: "avatar_url",
            value: "Let me retrieve your avatar url.",
          },
          {
            name: "pickup_line",
            value:
              "For those who don't know how to speak to girls nearby the FC Emergis Stadium.",
          },
          {
            name: "joke",
            value: "Let me tell you a funny joke. 😂",
          },
          {
            name: "fact",
            value: "Just a fun fact. 🤓",
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: "© FC Emergis",
        },
      },
    };
  }
};
