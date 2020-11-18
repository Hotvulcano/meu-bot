module.exports = (client,msg) => {
    if (msg.content.startsWith("!esquiva")){
        randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
        if(randomNumber == 2){
            msg.reply("**Esquivou!** \n \n https://media.tenor.com/images/963c6b0eb7b65d49417792b827d5bc55/tenor.gif")
        }
        else{
            msg.reply("**Não conseguiu se esquivar** \n \n https://media.tenor.com/images/8aa467cdf29c79456a7237f0cb0b47c7/tenor.gif");
        }
    }
}