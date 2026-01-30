import { z } from "zod/v4";

import { EventSchema } from "./event.schema";

export type EventData = z.infer<typeof EventSchema>;
export const EventResponseSchema = EventSchema.extend({
  id: z.string(),
});

export type EventResponse = z.infer<typeof EventResponseSchema>;
