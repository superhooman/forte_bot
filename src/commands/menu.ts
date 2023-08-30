import { Markup } from "telegraf";

export const CHECK_BALANCE = "Check balance";

export const GO_BACK = "Go back";

export const mainMenu = Markup.keyboard([
    [CHECK_BALANCE],
]).oneTime().resize();
