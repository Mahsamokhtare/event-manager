import EventCard from "../components/ui/EventCard";
import { useEffect, useState } from "react";
import { fetchEvents } from "../api/event.api";
import type { EventResponse } from "../features/types/event.types";
import { Link } from "react-router";

export default function Home() {
  const [events, setEvents] = useState<EventResponse[]>([]);

  useEffect(() => {
    fetchEvents(1, 10).then(setEvents).catch(console.error);
  }, []);

  return (
    <>
      <div className="p-10">
        <h2 className="text-3xl p-2 font-bold">Upcoming Events</h2>
        <p className="text-base p-2">Discover and join amazing events in your area</p>
        <div className="p-2 flex flex-wrap sm:flex-row gap-4 justify-center">
          {events.map((event) => (
            <Link to={`/${event.id}`}>
              <EventCard key={event.id} event={event} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
