import { Scenes, Telegraf } from "telegraf";
import { env } from "./env";
import { commands } from "./commands";

export type BaseBotContext = Scenes.SceneContext;

console.log('Bot has started');

export const bot = new Telegraf<BaseBotContext>(env.BOT_TOKEN);

commands.forEach((handler) => handler(bot));

bot.launch({
    allowedUpdates: ['message', 'callback_query']
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
