/*
  A bot to clear/delete messages of a channel

  Usage: !clearMessages  ==> clears all messages of
  that channel on which the command was run

*/

const CLEAR_MESSAGES = '!clearMessages';

const Discord = require('discord.js');
const bot = new Discord.Client();

// Token of my bot
const token = 'NTUwNDAyNTY0MTM1MzIxNjAw.D1h9_Q.3hwy_aNp2fEE3sc0vi6qeY9-92A';

bot.on('ready', () => {
  console.log('PelicanClearBot is Ready!');
  bot.on('message', message => {
    if (message.content == CLEAR_MESSAGES) {


      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
      }
    }
  });
});


bot.login(token);
