const Discord  = require('discord.js');

module.exports = (client,msg) =>{
    var message = msg.content.split(" ");
    message = message[0];

    const embed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Erro')
    .setDescription(`:diamond_shape_with_a_dot_inside: **Comando **'${message}' **não existe ; \n \n  :diamond_shape_with_a_dot_inside: Digite ** '!ajuda'** para obter a lista de comandos .**`)
    .setFooter('Log de Erros do bot')
    .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_OmIgIJgHUDFZv9VL62wKKESoPcXcUMQZg&usqp=CAU.jpg')
    return msg.channel.send(embed);
}