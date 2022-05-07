const { Client, Intents } = require('discord.js');
const arr = ["./config.json", "ready", "message", "!hello", "!help", "reconnecting","!bye"];
const { token } = require(arr[0]);
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.on(arr[1], () => {
console.log(`Logged in as ${client.user.tag}!`);
}); 

client.on(arr[5], () => {
console.log(`This bot is trying to reconnect: ${client.user.tag}!`);
});

client.on(arr[2], msg => {

const msgContent = msg.content.toLowerCase();

if (msgContent === arr[3]){
msg.reply("Hello World!");
}

else if (msgContent === arr[4]){
msg.reply("There are 2 commands: !hello !help");
}

else if(msgContent === arr[6]){
msg.reply("Goodbye World!");
}
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});



client.login(token);