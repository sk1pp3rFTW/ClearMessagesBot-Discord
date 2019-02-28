const CLEAR_MESSAGES = '!clearmessages';

const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTUwNDAyNTY0MTM1MzIxNjAw.D1h9_Q.3hwy_aNp2fEE3sc0vi6qeY9-92A';

bot.on('ready', () => {
  console.log('!clearmessages to run...');
  bot.on('message', message => {
    if (message.content == CLEAR_MESSAGES) {

      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length;

            message.channel.sendMessage("Number of deleted messages: "+messagesDeleted);
            console.log('Number of deleted messages: '+messagesDeleted)
          })
          .catch(err => {
            console.log('error.');
            console.log(err);
          });
      }
    }
  });
});

bot.login(token);
