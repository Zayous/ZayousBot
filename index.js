const Discord = require('discord.js')
const token = '';

const client = new Discord.Client();
global.servers - {};







client.on('ready', () => {
    console.log('Bot is now connected');
    client.user.setActivity('on delaformc.serv.nu')
    client.on('message', async (message) => { 
        
        const args = message.content.split(' ');

      if (message.content == '<@302185714764873730>') {
          message.channel.send(':poop:')
      }

      if (message.content == '<@602644009965584404>') {
          message.channel.send('<@'+`${message.author.id}`+'> :grinning: ')
      }

      if (message.content == 'hi <@602644009965584404>') {
        message.channel.send('hi '+'<@'+`${message.author.id}`+'> :grinning: ')
      }
      if (message.content == 'hey <@602644009965584404>') {
        message.channel.send('hi '+'<@'+`${message.author.id}`+'> :grinning: ')
      }

      if (message.content == 'Hi <@602644009965584404>') {
        message.channel.send('hi '+'<@'+`${message.author.id}`+'> :grinning: ')
      }
      if (message.content == 'Hey <@602644009965584404>') {
        message.channel.send('hi '+'<@'+`${message.author.id}`+'> :grinning: ')
      }

      if (message.content === '?ip') {
          message.channel.send('IP: *Server IP: delaformc.serv.nu (1.7-1.13*) :D')
      }

      if (message.content === '?info') {
        message.channel.send('This bot is in early access and will soon have more commands! \n For any questions or suggestions DM Zayous#3255')
    }


      if (message.content === '?invite') {
        message.channel.send('Discord Invite Link: https://discord.gg/EERAkNW :grinning:')
    }

      if (message.content === '?help') {
          const embed = new Discord.RichEmbed()
          .setTitle('Commands')
          .setDescription('?ip (shows server IP) \n ?play (plays a song) \n ?stop (stops songs) \n ?skip (skips current song) \n ?info (displays bot info)')
          .setColor('#8F0202')
          message.channel.send(embed);
      }

      if (message.content === '?announce') {
        const embed = new Discord.RichEmbed()
        .setTitle('Announcement')
        .setDescription('')
        .setColor('#8F0202')
        message.channel.send(embed);  
      }    

    });
});


client.login(process.env.token);
