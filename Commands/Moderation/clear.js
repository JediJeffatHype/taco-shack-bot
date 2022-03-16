const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: "clear",
    description: "deletes a certain amount of messages",
    permission: "MANAGE_MESSAGES",
    options: [
        {
            name: "amount",
            description: "select the amount of messages to delete from channel or target",
            type: "NUMBER",
            required: true
        },
        {
            name: "target",
            description: "A target to clear messages from",
            type: "USER",
            required: false
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const { channel, options } = interaction;

        const Amount = options.getNumber("amount");
        const Target = options.getMember("target");

        const Messages = await channel.messages.fetch();

        const Response = new MessageEmbed()
        .setColor("LUMINOUS_VIVID_PINK");

        if(Target) {
            let i = 0;
            const filtered = [];
            (await Messages).filter((m) => {
                if(m.author.id === Target.id && Amount > i) {
                    filtered.push(m);
                    i++;
                }
            })

            await channel.bulkDelete(filtered, true).then(messages => {
                Response.setDescription(`💥 Cleared ${messages.size} from ${Target}.`);
                interaction.reply({embeds: [Response]});
            })
        } else {
            await channel.bulkDelete(Amount, true).then(messages => {
                Response.setDescription(`💥 Cleared ${messages.size} from this channel.`);
                interaction.reply({embeds: [Response]});
            })
        }
    }
}