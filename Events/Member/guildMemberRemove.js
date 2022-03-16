const { MessageEmbed, WebhookClient, GuildMember } = require('discord.js');

module.exports = {
    name: 'guildMemberRemove',
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        const { user, guild } = member;

        const Loger = new WebhookClient({
            id: '953150759933980672',
            token: 'Tvs7HTqKP1Oir4AY5MRdrVuke_c9PVYrlNRp4wJEOBmWsHKP9qpkOVtz2bYCcIwHLK4n'
        });

        const Welcome = new MessageEmbed()
        .setColor("YELLOW")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        ${member} has left\n
        Joined: <t:${parseInt(member.joinedTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Loger.send({embeds: [Welcome]})
    }
}