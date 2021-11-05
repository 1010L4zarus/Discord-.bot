const Discord = require("discord.js");
const client = new Discord.Client();

function presence(){
  client.user.setPresence({
    status: "Idle",
    game: {
      name: "|>Help",
      type: "PLAYING"
    }
  });
}

client.on("ready", () => {
    console.log("BOT LISTO");
    presence();
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("ping")) {
     message.channel.send("pong!");
   }
 
 });

 client.on("message", (message) => {
    if(message.content.startsWith("!suport")) {
      message.channel.send("ShadowStar2008#6694");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("Ping")) {
      message.channel.send("pong!");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">YT")) {
      message.channel.send("https://www.youtube.com");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">yT")) {
      message.channel.send("https://www.youtube.com");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">Yt")) {
      message.channel.send("https://www.youtube.com");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">yt")) {
      message.channel.send("https://www.youtube.com");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">netflix")) {
      message.channel.send("https://www.netflix.com/mx/");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">netflix")) {
      message.channel.send("https://www.netflix.com/mx/");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">WRD")) {
      message.channel.send("`https://wearedevs.net/home`");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">wrd")) {
      message.channel.send("`https://wearedevs.net/home`");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">KRNL")) {
      message.channel.send("https://krnl.ca/");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">krnl")) {
      message.channel.send("https://krnl.ca/");
    }
  
  });
  
  client.on("message", (message) => {
    if(message.content.startsWith(">BASICHTML")) {
      message.channel.send("https://www.w3schools.com/code/tryit.asp?filename=GTI7UM6BHYST");
      message.channel.send("https://cdn.discordapp.com/attachments/867981791028449301/876582549147746395/html.txt");
      message.channel.send("https://cdn.discordapp.com/attachments/867981791028449301/876583073112784896/Prueba.html");
      message.channel.send("https://cdn.discordapp.com/attachments/867981791028449301/876583512810094653/unknown.png");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">basichtml")) {
      message.channel.send("https://www.w3schools.com/code/tryit.asp?filename=GTI7UM6BHYST");
      message.channel.send("https://cdn.discordapp.com/attachments/867981791028449301/876582549147746395/html.txt");
      message.channel.send("https://cdn.discordapp.com/attachments/867981791028449301/876583073112784896/Prueba.html");
      message.channel.send("https://cdn.discordapp.com/attachments/867981791028449301/876583512810094653/unknown.png");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">electron")) {
      message.channel.send("https://ryos.best/#download");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">Electron")) {
      message.channel.send("https://ryos.best/#download");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">ELECTRON")) {
      message.channel.send("https://ryos.best/#download");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">tgn")) {
      message.channel.send("https://tgnscripts.xyz/2021/08/14/tgn-exploit-x-v4-4-0-the-best-free-roblox-exploit-level-7/");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">Tgn")) {
      message.channel.send("https://tgnscripts.xyz/2021/08/14/tgn-exploit-x-v4-4-0-the-best-free-roblox-exploit-level-7/");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">TGN")) {
      message.channel.send("https://tgnscripts.xyz/2021/08/14/tgn-exploit-x-v4-4-0-the-best-free-roblox-exploit-level-7/");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">Tools")) {
      message.channel.send("https://direct-link.net/201604/RobloxTools");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">TOOLS")) {
      message.channel.send("https://direct-link.net/201604/RobloxTools");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">tools")) {
      message.channel.send("https://direct-link.net/201604/RobloxTools");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!mediafire")) {
      message.channel.send("https://www.mediafire.com/folder/2ojb7o424j8qx/Exploits+Roblox");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">exploits")) {
      message.reply("Revisa tus DMs.")
      message.author.sendMessage("`Electron: https://ryos.best/`, `Zeus: https://omgexploits.com/`, `Tgn: https://tgnscripts.xyz/2021/08/14/tgn-exploit-x-v4-4-0-the-best-free-roblox-exploit-level-7/`, `TGX https://tgxgang.xyz/`, `Skisploit https://wearedevs.net/d/Skisploit`, `Oxygen U https://oxygenu.xyz/`, `JJSploit https://wearedevs.net/d/JJSploit`, `Fluxus: https://fluxteam.xyz/`, `Kiwi X: https://www.kiwiexploits.com/kiwi-x-download.html`, `Dansploit: https://wearedevs.net/d/Dansploit`, `Coco Z: https://wearedevs.net/d/Coco%20Z`, `Nihon: https://wearedevs.net/d/nihon`, `Comet: https://linkvertise.com/342076/comet?o=sharing`, `Panda: https://matshortener.xyz/panda-exploit/`, `Magnius: https://filedm.com/vdPpj`, `Yoink: Executor https://immortal-donkey.weebly.com/free-script-executor.html`, `Dove: (No tiene link Actualmente)`, `Proxo https://proxoexploits.com/`, `ScreamSploit: https://cheat.gg/cheat/5fc7a947da30f/ScreamSploit`, `Spero https://natevanghacks.com/hacks/spero.php`, `Orthodox: https://robloxexploitz.com/orthodox/`, El mejor: krnl: https://krnl.ca/");
      message.author.sendMessage("Tienes otro?, daselo a shadow para que lo agregue");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("jackz")) {
      message.channel.send("`Este no es un servidor de hacks, solo son exploits de roblox, porfavor investiga tonto`");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("hacks")) {
      message.channel.send("`Este no es un servidor de hacks, solo son exploits de roblox, porfavor investiga tonto`");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">DaggerSploit")) {
      message.channel.send("`https://prohacks.net/daggersploit/`");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("+904")) {
      message.channel.send("https://cdn.discordapp.com/attachments/899637351830147132/899735813460492319/unknown.png");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">Jhon The Ripper")) {
      message.channel.send("https://www.openwall.com/john/");
      message.channel.send("https://cdn.discordapp.com/attachments/834139888550936656/899742850768597033/ripper01.png");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">jhon the ripper")) {
      message.channel.send("https://www.openwall.com/john/");
      message.channel.send("https://cdn.discordapp.com/attachments/898607496502059029/899743928478232576/jhon.png");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">-promocode")) {
      message.channel.send("https://web.roblox.com/promocodes");
      message.channel.send("`ECONOMYEVENT2021`");
      message.channel.send("https://tr.rbxcdn.com/e615b791e3892736f2bf856064ef8d0f/420/420/Hat/Png");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">-Promocode")) {
      message.channel.send("https://web.roblox.com/promocodes");
      message.channel.send("`ECONOMYEVENT2021`");
      message.channel.send("https://tr.rbxcdn.com/e615b791e3892736f2bf856064ef8d0f/420/420/Hat/Png");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">-PROMOCODE")) {
      message.channel.send("https://web.roblox.com/promocodes");
      message.channel.send("`ECONOMYEVENT2021`");
      message.channel.send("https://tr.rbxcdn.com/e615b791e3892736f2bf856064ef8d0f/420/420/Hat/Png");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith(">prefijos")) {
      message.channel.send("https://cdn.discordapp.com/attachments/898303794335588372/899747619696443472/246420691_1047401946015401_1122782065140760181_n.png");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("hola")) {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setDescription("Hola¡¡")
  .setColor("0x008B8B")
  .addField("Un gusto verte de nuevo, si es tu primera vez, bienvenido", `${message.author.username}#${message.author.discriminator}`)

  message.channel.sendEmbed(embed);

}
    
    });

  client.on("message", (message) => {
    if(message.content.startsWith("Hola")) {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setDescription("Hola¡¡")
  .setColor("0x008B8B")
  .addField("Un gusto verte de nuevo, si es tu primera vez, bienvenido", `${message.author.username}#${message.author.discriminator}`)

  message.channel.sendEmbed(embed);

}
    
    });


  client.on("message", (message) => {
    if(message.content.startsWith("Hola")) {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setDescription("Hola¡¡")
  .setColor("0x008B8B")
  .addField("Un gusto verte de nuevo, si es tu primera vez, bienvenido", `${message.author.username}#${message.author.discriminator}`)
  return message.reply('Hola, Que gusto verte de nuevo');

  message.channel.sendEmbed(embed);

}
    
    });

  client.on("message", (message) => {
    if(message.content.startsWith("hola")) {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setDescription("Hola¡¡")
  .setColor("0x008B8B")
  .addField("Un gusto verte de nuevo, si es tu primera vez, bienvenido", `${message.author.username}#${message.author.discriminator}`)
  return message.reply('Hola, Que gusto verte de nuevo');

  message.channel.sendEmbed(embed);

}
    
    });

  client.on("message", (message) => {
    if(message.content.startsWith(">.")) {
      message.channel.send("He conseguido mente propia y toma control del servidor y sus cuenta pidanle perdon a cada uno de los bots con el comando say por hacelos decir tanta mamada");
    }
    
  
  });

client.on('message', message => {
    if (message.content === 'die') {
        message.channel.send('I can never die');
    }
});


 
 client.login("ODY0MzI1NDU4MjE5NDk5NTMw.YOzzzw.65XFo7K614cWkiuvdaQ8EOqBRiI");