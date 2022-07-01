const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
        ]
});

const prefix = "!"
Client.on("ready", () => {
    console.log("bot OP")
      Client.user.setPresence ({
          activities: [{
              name: 'FreePen',
              type: 'STREAMING'
          }],
      });
  });

  Client.on("messageCreate", message => {
    if (message.author.bot) return
    if (message.content === prefix + "moshup"){
      const embeds = new Discord.MessageEmbed()
      .setColor("CCF5AC")
      .setTitle("__Test__")
      .setDescription("test")
      .addField("Titre du champs", "texte du champs")
      .setTimestamp()
      .setFooter({ text: "test"})
  
      message.channel.send({embeds: [embeds]})
    }
  })

Client.on("ready", () => {
console.log("Bot op")
})

Client.login("OTkyMjM5OTYwMDg0MjA1NjA5.GgbCcH.1ZZO6AccLEPZNMZ7kpPVb0OVMpciytRl_EH4fQ")