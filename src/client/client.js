const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
/**
 * @param {Discord.Client} client 
 */
module.exports = (client) => {
    if (!client) throw new Error("Client not defined");
    if (!(client instanceof Discord.Client)) throw new Error("Client is not valid");
    console.log();
    fs.readdirSync(path.join(__dirname, "./events/")).forEach((fileName) => {
        let eventData = require(`./events/${fileName}`);
        client[eventData.once ? "once" : "on"](eventData.name, (...args) => eventData.excute(client, ...args));
    });
}