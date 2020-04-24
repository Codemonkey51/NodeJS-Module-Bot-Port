class Server {
  constructor(guildID, prefix = '**') {
    this.guildID = guildID;
    this.prefix = prefix;
  }
}
const test = new Server(0,'&*');
servers = [test];
console.log(servers);










const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;
//const fs = require('fs')
require('./keep_alive.js')();
client.on('ready', () => {
  client.user.setActivity("!help", {
    type: "LISTENING"
  });
  console.log("I'm in");
  console.log(client.user.username);
});

client.on('message', async msg => {
  if (msg.author.id != client.user.id) {
    server = 0
    for(i in servers){
      if(i.guildID===message.guild.id){
        server = i
      }
    }
    if(server===0){
      retrun('')
    }
    prefix = server.prefix
    try {
      let command = msg.content;
      if (command === prefix + 'ego') {
        msg.react('😁')
      }
      if (command === prefix + "kill"){
        console.log('bot !kill\'ed by ' + msg.member.user.tag)
        msg.reply('Thanks for killing me!');
        client.destroy();
        process.exit();
        }
      if (command.indexOf(prefix + "playrps") > -1) {
        let option = command.replace(new RegExp(prefix,"g"), "").replace(/playrps /g, "").toLowerCase();
        // code
        let rps = ["r", "p", "s"];
        let random = Math.floor(Math.random() * 3);
        let computerchoice = rps[random]
      

        if (option == 'rock') {
          if (computerchoice == 'r') {
            // Tie
            msg.reply('I choose rock we tie.')
          } else if (computerchoice == 'p') {
            //lose
            msg.reply('I choose paper you lose.')
          } else {
            // win
            msg.reply('I choose scissors you win.')
          }
        } else if (option == 'paper') {
          if (computerchoice == 'r') {
            // win
             msg.reply('I choose rock you win.')
          } else if (computerchoice == 'p') {
            // Tie
            msg.reply('I choose paper we tie.')
          } else {
            // lose
            msg.reply('I choose scissors you lose.')
          }
        } else if(option == 'scissors') {
          if (computerchoice == 'r') {
            // win
            msg.reply('I choose rock you win.')
          } else if (computerchoice == 'p') {
            // lose
            msg.reply('I choose paper you lose.')
          } else {
            // tie
            msg.reply('I choose Scissors we tie.')
          }
        } else {
          msg.reply('Thats not a choice!')
        }
      }

      if(command === prefix + 'help') {
        msg.reply('Heres what i can do:');
        msg.channel.send('!ego: Reacts with a smilie face');
        msg.channel.send('!playrps: play rock, paper, scissors. makes sure to add space then rock paper or scissors after !platrps.');
      }
      if (!msg.guild) {
        client.channels.get("695027267948249221").send(msg.content)
      }


    }
    catch (e) {
      console.log(e)
      msg.reply(`ERROR! \`\`\`yaml
    ${e}
    \`\`\``);
    }
  }


});

client.login(token);
