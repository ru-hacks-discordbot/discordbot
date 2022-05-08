module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;
    if (interaction.isCommand()) {
      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    }else if(interaction.isButton()){
      if(interaction.customId.includes('-button')){
        if(interaction.customId.includes('test1')){
            await interaction.reply({content:`Test1 was clicked`})
        }else if(interaction.customId.includes('test2')) {
          await interaction.reply({content:`Test2 was clicked`})
        }else if(interaction.customId.includes('test3')){
          await interaction.reply({content:`Test3 was clicked`})
        }

      }
    }
  },
};
