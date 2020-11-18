const config   = require("../config.json");
const commands = require("../scripts/commandsReader")(config.prefix);

const descriptions = {
    "!ajuda": "Use este comando para ver os commandos disponiveis!",
    "!chute": "Um chute muito forte!",
    "!clear": "Limpe o chat",
    "!combo-desajeitado": "Faça um combo maluco!",
    "!combo": "Faça um combo maneiro!",
    "!esquiva": "Tente se esquivar!",
    "!katon-1": "Solte uma bola de fogo!",
    "!ping": "Pong!",
    "!soco": "Dê um soco forte!",
    "!susanoo-1": "Faça um susanoo não perfeito",
    "!susanoo-2": "Faça um susanoo Perfeito!",
    "!taijutsu-1": "Use sua força corporal!"
};

const permissions = config.permissions;

module.exports = async (client,msg) =>{
    var texto = "**Comandos:**\n";
    Object.keys(commands).forEach(command =>{
        if(verificarPermissao(msg.member,command))
        texto += `\n **${command}**: ${descriptions[command] ? descriptions[command] : 'Não tem descrição'}\n`
    })
    msg.reply(texto);
};

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
        });
    }
    return verification;
}
