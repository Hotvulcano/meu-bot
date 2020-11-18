const Discord  = require('discord.js');
const client   = new Discord.Client();

const config   = require("./config.json");
const commands = require("./scripts/commandsReader")(config.prefix);

let red = config.red;

const unknowCommand = require("./scripts/unknowCommand");

const permissions = config.permissions;

client.on('ready', () => {
    console.log(`Logando com o bot ${client.user.tag}`);
    let activities = [
        `Chackra no server`,
        `🌀 𝗦𝗵𝗶𝗻𝗼𝗯𝗶・𝗪𝗼𝗿𝗹𝗱 𝟮.𝟬 🌀`,
        `Netflix`
    ],
    i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
    }), 5000);
});



client.on("message",(msg)=>{
    if(!msg.author.bot && msg.guild){
        if(config.debug) console.log(`${msg.author.username}: ${msg.content}`);
        const args = msg.content.split(" ");
        if(commands[args[0]]){
            if(verificarPermissao(msg.member,args[0]))
             commands[args[0]](client,msg);
             else msg.reply("Seu Chakra não é forte o bastante para fazer isso!");
        }else if(args[0].startsWith(config.prefix)) unknowCommand(client,msg);
    }
});

client.on("guildMemberAdd", async (member) => { 

    let guild = await client.guilds.cache.get("686263798805692539");
    let channel = await client.channels.cache.get("778336521324593253");
    let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "tigre");
    if (guild != member.guild) {
      return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
     } else {
        let embed = await new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(` Boas-vindas`)
        .setImage("https://i.pinimg.com/originals/5c/74/a1/5c74a1a8bc0f8606ce8d784df61fb2f5.gif")
        .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros!**`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setFooter('ID do usuário' + member.user.id)
        .setTimestamp();
  
      channel.send(embed);
    };


  });//https://data.whicdn.com/images/68866052/original.gif

function verificarPermissao(member,command){
    let verification = !permissions[command];
    if(!verification){
        const perms = permissions[command];
        perms.forEach(p =>{
            switch(p.type){
                case "role":
                    if(member.roles.cache.has(p.value)) verification = true;
                break;
                case "permission":
                    if(member.permissions.has(p.value)) verification = true;
                break;
            }
        })
    }
    return verification
}

client.login(config.token)