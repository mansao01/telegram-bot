import dotEnv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

dotEnv.config()

const token = process.env.TELEGRAM_TOKEN

const options = {
    polling: true
}

const bot = new TelegramBot(token, options);

// bot.on("message", (callback) => {
//     const id = callback.from.id
//     bot.sendMessage(id, "Hello, welcome to triangle sneaker care bot")
// })

const slashPrefix = "/"
const prefix = "!"
const sayStart = new RegExp(`^${slashPrefix}start`)
const sayHelp = new RegExp(`^${prefix}help`)

bot.onText(sayStart, (callback) => {
    const id = callback.from.id
    bot.sendMessage(id, "Hello, welcome to triangle sneaker care bot. You can use !help to show all command")
})

bot.onText(sayHelp, (callback) => {
    const id = callback.from.id
    bot.sendMessage(id, "!help - show all command\n!start - start the bot\n!about - about the bot\n!contact - contact the bot")
})


