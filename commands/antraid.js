exports.run = async (client, message, args) => {
    const roleA = await message.guild.roles.cache.find(role => role.id === "758154567548010518"); 
  
    if (
      !message.member.roles.cache.some(r =>
        [
          "758126203168489543"
        ].includes(r.id) )) {
      return message.channel.send(`${message.author.username} esse comando é restrito.`);
    } else if (message.content.includes("on")) {
      await roleA.setPermissions(0).catch(console.error);
  //Assista ao vídeo para entender como setar as permissões https://youtu.be/P7jDV0JnMRc
      await message.channel.send(`O sistema de Antiraid foi ligado por ${message.author.username}`);
    } else if (message.content.includes("off")) {
      await roleA.setPermissions(0).catch(console.error);
  //Assista ao vídeo para entender como setar as permissões https://youtu.be/P7jDV0JnMRc
      await message.channel.send(
        `O sistema de Antiraid foi desligado por ${message.author.username}`);
    } else {
      return message.channel.send(`${message.author.username} a sintaxe correta é antiraid on | off`);
    }
  };