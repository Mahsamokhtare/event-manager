import { z } from "zod";

export const EventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  date: z.string(), // or see date section below
  location: z.string().min(1, "Location is required"),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});
