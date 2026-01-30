import { z } from "zod";
import type { AuthCredentialsSchema, LoginResponseSchema } from "./auth.schema";

export type SignupDataRequest = z.infer<typeof AuthCredentialsSchema>;
export type LoginDataRequest = z.infer<typeof AuthCredentialsSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
