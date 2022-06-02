import { Client, WebhookClient, Intents } from "discord.js";

const { Client, WebhookClient, Intents } = require("discord.js")
require("dotenv").config()

let channelId = process.env.channelId
let token = process.env.token
let webhookURL = process.env.webhookURL

let bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})
let hook = new WebhookClient({url: webhookURL})

bot.on("messageCreate", function (ctx) {
    try {
        if (ctx.channel.id === channelId) {
            hook.send({content: ctx.content || null, embeds: ctx.embeds || null})
        }
    } catch (e) {
        console.log("Something went wrong! " + new Date)
        console.log(e)
    }
})

bot.login(token).then(() => console.log("The bot started\n" + new Date))


