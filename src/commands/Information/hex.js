const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('hex')
		.setDescription('Displays discords hex colour codes'),
	async execute(interaction) {
		const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`test1-button`)
                    .setLabel("TEST")
                    .setStyle("TEST"),
                new MessageButton()
                    .setCustomId(`test2-button`)
                    .setLabel("test2")
                    .setStyle("test2"),
                new MessageButton()
                    .setCustomId(`test3-button`)
                    .setLabel("TEST3")
                    .setStyle("test2"),
            );

        await interaction.reply({ephemeral:true,content:`click buttons to get colours`,components:[row]});
        
        
	},
};