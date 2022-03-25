const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

const prefix = "!";

client.on("ready", () => {
    console.log("bot connecté !");
});

client.on("ready", async () =>{
    client.user.setStatus("online");
    client.user.setActivity(".Mon Premier Bot !", {type: 'WATCHING', url: 'https://twitch.tv/luckyyylook'});
});


client.on("messageCreate", message => {
    if (message.author.bot) return;

    if(message.content === prefix + "ping"){
        const embed = new MessageEmbed()
            .setColor("#2433eb")
            .setDescription(`Pong !`)
        message.channel.send({ embeds: [embed]});
    }
});


client.login("TON TOKEN");
