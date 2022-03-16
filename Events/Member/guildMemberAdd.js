const { MessageEmbed, WebhookClient, GuildMember } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        const { user, guild } = member;

        const Welcomer = new WebhookClient({
            id: '953145410120220712',
            token: 'Zb1l0_8UA0tx1Ggdefra8REuCwLBuhgqbJNl24ttvapvjpBGDBuR6YBGm5Q3WS3bie-U'
        });

        const Welcome = new MessageEmbed()
        .setColor("YELLOW")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Welcomer.send({embeds: [Welcome]})
    }
}