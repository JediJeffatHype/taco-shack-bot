const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "pings",
    description: "Pong",
    permission: "ADMINISTRATOR",
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        interaction.reply({content: "Pong"})
    }
}