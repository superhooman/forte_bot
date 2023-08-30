import { config } from 'dotenv';
import { z, ZodFormattedError } from "zod";

config();

export const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).optional(),
  BOT_TOKEN: z.string(),
  CARD_ID: z.string().min(1),
});

export const formatErrors = (
    errors: ZodFormattedError<Map<string,string>,string>,
  ) =>
    Object.entries(errors)
      .map(([name, value]) => {
        if (value && "_errors" in value)
          return `${name}: ${value._errors.join(", ")}\n`;
      })
      .filter(Boolean);

const _serverEnv = serverSchema.safeParse(process.env);

if (!_serverEnv.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(_serverEnv.error.format()),
  );
  throw new Error("Invalid environment variables");
}

export const env = { ..._serverEnv.data };
