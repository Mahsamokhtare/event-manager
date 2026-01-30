import { z } from "zod";

export const AuthCredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const LoginResponseSchema = z.object({
  token: z.string(),
  user: z.object({
    id: z.number(),
    email: z.string().email(),
  }),
});
