const Discord = require("discord.js");

module.exports = {
    name: "guildMemberUpdate",
    once: false,
    /**
     * @param {Discord.Client} client
     * @param {Discord.GuildMember | Discord.PartialGuildMember} oldMember 
     * @param {Discord.GuildMember | Discord.PartialGuildMember} newMember 
     */
    excute: (client, oldMember, newMember) => {
        if (!oldMember.premiumSince && newMember.premiumSince) {
            client.emit("boostCreate", newMember);
        } else if (oldMember.premiumSince && !newMember.premiumSince) {
            client.emit("boostDelete", newMember);
        }
    }
}