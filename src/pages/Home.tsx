import EventCard from "../components/ui/EventCard";
import { useEffect, useState } from "react";
import { fetchEvents } from "../api/event.api";
import type { EventResponse } from "../features/types/event.types";
import { Link } from "react-router";

export default function Home() {
  const [events, setEvents] = useState<EventResponse[]>([]);
  useEffect(() => {
    fetchEvents(1, 20).then(setEvents).catch(console.error);
  }, []);

  console.log(events);

  return (
    <>
      <div className="px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl p-2 font-bold">Upcoming Events</h2>
            <p className="text-base p-2">
              Discover and join amazing events in your area
            </p>
          </div>
          <div>
            <Link to={"/events/new"}>
              <button className="bg-[#b87f05] text-white px-5 py-3 rounded-lg cursor-pointer hover:shadow-lg">
                Add new Event
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
