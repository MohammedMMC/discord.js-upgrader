<div>
    <h1>Discord.JS UPGRADER v1.0.1</h1>
    <div>
        <img src="https://img.shields.io/npm/v/discord.js-upgrader?maxAge=3600" />
        <img src="https://img.shields.io/npm/dt/discord.js-upgrader?maxAge=3600" />
    </div>
    <img src="https://nodei.co/npm/discord.js-upgrader.png?downloads=true&stars=true">
</div>

## 📂 | Installation

```sh
npm i discord-buttons
```

## 📜 | Setup

```js
const discord = require("discord.js"); // Define the discord.js module
const client = new discord.Client(); // Creating discord.js client

require("discord.js-upgrader")(client); // Setup the discord.js-upgrader module
```

## **✍ | Examples**

#### 🔨 New Events

<ul>
    <li>boostCreate</li>
    <li>boostDelete</li>
</ul>

```js
const discord = require("discord.js"); // Define the discord.js module
const client = new discord.Client(); // Creating discord.js client

require("discord.js-upgrader")(client); // Setup the discord.js-upgrader module

client.on("boostCreate", (member) => { // boostCreate event returns GuildMember
  console.log(`${member.user.tag} boosted the server ✨`);
});

client.on("boostDelete", (member) => { // boostDelete event returns GuildMember
  console.log(`${member.user.tag} unboosted the server 😔`);
});
```

#### ✨ New Discord User Methods

<ul>
    <li>hasNitro: Boolean</li>
    <li>premium_since: String</li>
    <li>premium_guild_since: String</li>
    <li>connected_accounts: Array</li>
    <li>bio: String</li>
</ul>

```js
  await client.users.fetch("152222004609548288")
```
<em>returns:</em>
```json
{
  "id": "152222004609548288",
  "hasNitro": true,
  "premium_since": "2021-11-25T16:57:07.021847+00:00",
  "premium_guild_since": "2021-11-25T16:57:42.237000+00:00",
  "connected_accounts": [
    {
      "type": "github",
      "id": "103428364",
      "name": "MohammedMMC",
      "verified": true
    },
    {
      "type": "twitch",
      "id": "661597493",
      "name": "mohammedmmc",
      "verified": true
    }
  ],
  "bio": "👋 **Hi there**, I'm **Mohammed**\n<:VerifiedBotDeveloper:745306444534120453> I'm **Full-Stack** Developer\n**<:devlist:876121148990062642> DevList: https://dlist.me/mmc\n**\nhttps://i8.ae/necDO",
  "bot": false,
  "system": false,
  "flags": { "bitfield": 64 },
  "username": "MohammedMMc",
  "discriminator": "1234",
  "avatar": "a_a49dd149a87fd725bc7c539d586b3d3f",
  "banner": "ed40a0a6016c1d69fc96b356eb42b6d3",
  "accentColor": 1991925
}
```

## 👥 | Creators

<a href="https://github.com/MohammedMMC"><img src="https://discord.c99.nl/widget/theme-1/152222004609548288.png" alt="Discord Creator Account"></a>
