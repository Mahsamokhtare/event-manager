import { Calendar, MapPin } from "lucide-react";
import type { EventResponse } from "../../features/types/event.types";

export default function EventCard({ event }: { event: EventResponse }) {
  const date = new Date(event.date).toLocaleString("en", {
    dateStyle: "full",
    timeStyle: "short",
  });
  return (
    <>
      <div className="card bg-orange-50 w-100 shadow-sm cursor-pointer hover:scale-101 hover:shadow-xl duration-300">
        <div className="card-body">
          <h2 className="font-bold text-xl">{event.title}</h2>
          <p className="line-clamp-1 text-sm text-gray-500 hover:line-clamp-3">{event.description}</p>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 text-blue-700" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 text-blue-700" />
            <span
              onClick={() => {
                window.open(`https://www.google.com/maps?q=${event.latitude},${event.longitude}`, "_blank");
              }}
              className="cursor-pointer hover:text-blue-700"
            >
              {event.location}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
