import { createRestManager } from "template/deps.ts";

const BOT_TOKEN = Deno.env.get("DISCORD_BOT_TOKEN")!;

export const REST = createRestManager({
  token: BOT_TOKEN,
  debug: console.log,
});
