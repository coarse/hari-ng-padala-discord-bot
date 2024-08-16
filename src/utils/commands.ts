import type {
  CreateSlashApplicationCommand,
  DiscordApplicationCommand,
  RestManager,
} from "template/deps.ts";
import { routes } from "template/deps.ts";

const CLIENT_ID = Deno.env.get("DISCORD_CLIENT_ID")!;

const upsertSlashCommands = async (
  rest: RestManager,
  commands: CreateSlashApplicationCommand[]
) => {
  const results = await rest.runMethod<DiscordApplicationCommand[]>(
    rest,
    "POST",
    routes.COMMANDS(CLIENT_ID),
    commands.map((command) => )
  );
};
