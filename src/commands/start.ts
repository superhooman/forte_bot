import { Telegraf } from "telegraf";
import { BaseBotContext } from "..";
import { mainMenu } from "./menu";

export const start = (bot: Telegraf<BaseBotContext>) => {
    bot.start(async ctx => {
        const { id: chatId } = ctx.from;

        await ctx.telegram.sendChatAction(chatId, "typing");

        await ctx.reply("Welcome to the Forte bot for Aslan!\nUse keyboard of /check command", mainMenu);
    });
};
