const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Returns info based on input')
        .addSubcommand(subcommand =>
            subcommand
            .setName("user")
            .setDescription("Gets information of the user mentioned")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned")))
        .addSubcommand(subcommand=>
            subcommand
            .setName('server')
            .setDescription("Info about the server")),
	async execute(interaction) {
		if(interaction.options.getSubcommand() === "user"){
            const user = interaction.options.getUser("target");
            if(user){
                imageURL = user.avatarURL();
                await interaction.reply(`Username: ${user.username}\nID: ${user.id} \n${imageURL}`);
            }else{
                imageURL = interaction.user.avatarURL();
                await interaction.reply(`Username: ${interaction.user.username}\nID: ${interaction.user.id} \n${imageURL}`);
            }
        }else if (interaction.options.getSubcommand() == "server"){
            interaction.reply(`Server name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`);
        }else{
            await interaction.reply("No subcommand selected");
        }
	},
};