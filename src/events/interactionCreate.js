module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {

		if (interaction.isCommand()) {
			const command = client.commands.get(interaction.commandName);
			try {
				await command.execute(interaction, client);
			} catch (error) {
				console.error(error);
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}

		}
		else if (interaction.isSelectMenu()) {
			if (interaction.customId == "color-select") {
				let colors = "";
				await interaction.values.forEach(async element => {
					colors += `${element} `;
				});
				await interaction.reply({ content: `Wow your favorite colors are: ${colors}`, ephemeral: true });
			}
		}
	},
};