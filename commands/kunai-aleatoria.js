const Discord = require("discord.js")

module.exports = (client,msg) => {
    if (msg.content.startsWith("!kunai-aleatoria")){
        randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
        if(randomNumber == 2){
            msg.reply("**Lança e erra a kunai!** \n \n https://c.tenor.com/PDj8-Ha37nAAAAAM/itachi-uchiha.gif");
            msg.member.roles.remove("759235344041771099");
        
        }
        else{
            msg.reply("**Lança e acerta uma kunai** \n \n ╔═══❖•ೋ°°ೋ•❖═══╗ \n \n 【:hearts:】 **Dano:600** \n \n ╚═══❖•ೋ°°ೋ•❖═══╝ \n \n https://c.tenor.com/PDj8-Ha37nAAAAAM/itachi-uchiha.gif");
            msg.member.roles.remove("759235344041771099");
        }
    }
}