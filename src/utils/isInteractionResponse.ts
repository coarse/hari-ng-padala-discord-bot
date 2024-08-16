import {
  InteractionCallbackData,
  InteractionResponse,
} from "discordeno/mod.ts";

export function isInteractionResponse(
  response: InteractionResponse | InteractionCallbackData
): response is InteractionResponse {
  return Reflect.has(response, "type");
}
