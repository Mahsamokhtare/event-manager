import type { EventData } from "../features/types/event.types";
import { api } from "./axios";

export const createEvents = async (data: EventData) => {
  const res = (await api.post)<Event>("/events", data);
  return res;
};

export const fetchEvents = async (page = 1, limit = 20) => {
  const res = await api.get("/events", {
    params: { page, limit },
  });
  return res.data.results;
};
