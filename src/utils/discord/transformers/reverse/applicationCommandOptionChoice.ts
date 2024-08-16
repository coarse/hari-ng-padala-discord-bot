import type { DiscordApplicationCommandOptionChoice } from "discordeno/types/discord.ts";
import type { ApplicationCommandOptionChoice } from "discordeno/transformers/applicationCommandOptionChoice.ts";

interface Args {
  payload: ApplicationCommandOptionChoice;
}

export const transformApplicationCommandOptionChoiceToDiscordApplicationCommandOptionChoice =
  ({ payload }: Args): DiscordApplicationCommandOptionChoice => ({
    name: payload.name,
    name_localizations: payload.nameLocalizations,
    value: payload.value,
  });
