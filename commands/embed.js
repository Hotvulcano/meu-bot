const MessageEmbed = require('discord.js').MessageEmbed;

const execute = (client,msg,args) => {
    const embed = new MessageEmbed().setColor("#ff0000").setTitle("minha primeira embed")
};

module.exports= {
    name: "embed",
    help: "Retorna uma MessageEmbed"
}