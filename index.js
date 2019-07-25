const Discord = require('discord.js')
const token = 'NjAyNjQ0MDA5OTY1NTg0NDA0.XTUCVg.2sju8zl_ZZ9D0S-2j1uzG7ld_T8';
const ytdl = require('ytdl-core');
const Youtube = require('simple-youtube-api');
const GOOGLE_API_KEY = 'AIzaSyAub38saSdDOGAdUuN0eTyYtn2cNeI5MOU'
const calculator = require ('happycalculator');
var formula = '20 * (10 + 20) / 20'

const client = new Discord.Client();
global.servers - {};
const queue = new Map();
const youtube = new Youtube(GOOGLE_API_KEY);





client.on('ready', () => {
    console.log('Bot is now connected');
    client.user.setActivity('on delaformc.serv.nu')
    client.on('message', async (message) => { 
        
        const args = message.content.split(' ');
        const serverQueue = queue.get(message.guild.id);

        
        if (message.content.startsWith(`?play`)) {
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) return message.channel.send('You must be in a voice channel');
            const permissions = voiceChannel.permissionsFor(message.client.user);
            if (!permissions.has('CONNECT')) {
                return message.channel.send('I cannot connect, make sure I have permissions');
            }
            if (!permissions.has('SPEAK')) {
                return message.channel.send('I cannot speak, make sure I have permissions');
            }

            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(url, 1);
                    var video = await youtube.getVideoByID(videos[0].id);
                } catch (err) {
                    console.error(err);
                    return message.channel.send('I could not find any search results');
                }
            };
            console.log(video);
            const song = {
                id: video.id,
                title: video.title,
                url: `https://www.youtube.com/watch?v=${video.id}`
            };


            if (!serverQueue) {
                const queueConstruct = {
                    textChannel: message.channel,
                    voiceChannel: voiceChannel,
                    connection: null,
                    songs: [],
                    volume: 5,
                    playing: true
                };
                queue.set(message.guild.id, queueConstruct);

                queueConstruct.songs.push(song);

                try {
                    var connection = await voiceChannel.join();
                    queueConstruct.connection = connection;
                    play(message.guild, queueConstruct.songs[0]);
                } catch (error) {

                }
            } else {
                 serverQueue.songs.push(song);
                 console.log(serverQueue.songs)
                 message.channel.send('Song added to queue');
            }    

            return undefined;
        } else if (message.content.startsWith('?skip')) {
             if (serverQueue) return message.channel.send('There is nothing playing that I could skip');
            serverQueue.connection.dispather.end();
            return undefined;
        } else if (message.content.startsWith('?stop')) {
            if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel');
            serverQueue.songs = [];
            serverQueue.connection.dispather.end();
            message.member.voiceChannel.leave();
            return undefined;
        }

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

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);

    const dispather = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', reason => {
        if (reason === 'Stream is not gnerating quickly enough');
        console.log('song ended');
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0])
    })
    .on('error', error => console.error(error));
dispather.setVolumeLogarithmitic(5 / 5);
}

client.login(process.env.token);
