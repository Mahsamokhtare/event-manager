import type { EventData } from "../features/event.types";
import { api } from "./axios";

export const createEvents = async (data: EventData) => {
  const res = (await api.post)<Event>("/events", data);
  return res;
};
