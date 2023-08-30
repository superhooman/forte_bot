import { Telegraf } from "telegraf";
import { BaseBotContext } from "..";
import { CHECK_BALANCE, mainMenu } from "./menu";
import { env } from "../env";
import fetch from "node-fetch";
import { CardsEntity, CardsRequest } from "../types";
import { getToken, refreshToken } from "../tokens";

const getData = async (token: string, i: number): Promise<CardsEntity | undefined> => {
    if (i > 3) {
      return undefined;
    }
    return await fetch("https://anthill-api.fortebank.com/v1/cards", {
      headers: {
        "X-Jwt-Access-Token": token,
        "Referer": "https://my.forte.kz/",
        "Origin": "https://my.forte.kz",
        "Host": "anthill-api.fortebank.com",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        const error = (data as { system: 'ANTHILL', status: number });
        if (error.system === 'ANTHILL') {
            console.error('getData error', error);
            const newToken = (await refreshToken()).access_token;

            return await getData(newToken, i + 1);
        }
        const card = (data as CardsRequest).cards?.find(
          (card) => card.cardExternalId === env.CARD_ID
        );

        return card;
      });
}

const formatCurrency = (amount: number) => {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export const check = (bot: Telegraf<BaseBotContext>) => {
  bot.hears(CHECK_BALANCE, async (ctx) => {
    const { id: chatId } = ctx.from;

    await ctx.telegram.sendChatAction(chatId, "typing");

    const token = getToken('access_token');
    const card = await getData(token, 0);

    const message = card?.availableBalances?.map((balance) => {
        const { currency, amount } = balance;
    
        return `<b>${currency}</b>: ${formatCurrency(amount)}`;
    }).join('\n') ?? 'No data :(\nContact agashka';

    await ctx.reply(message, { parse_mode: "HTML" });
  });
};
