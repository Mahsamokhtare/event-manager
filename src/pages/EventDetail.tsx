import { Calendar, MapPin } from "lucide-react";
import type { EventResponse } from "../features/types/event.types";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect, useMemo } from "react";
import { fetchEvents } from "../api/event.api";

export default function EventDetail() {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  useEffect(() => {
    setLoading(true);
    fetchEvents(1, 10)
      .then(setEvents)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const event = useMemo(() => {
    if (!id) return undefined;
    return events.find((e) => String(e.id) === String(id));
  }, [events, id]);

  if (loading) return <p>Loading...</p>;
  if (!event) return <p>Event not found.</p>;

  const date = new Date(event.date).toLocaleString("en", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return (
    <>
      <div className="p-5">
        <div onClick={() => navigate(-1)} className="py-5 cursor-pointer hover:scale-101 hover:font-bold duration-300">
          ← Go Back
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="card bg-orange-50 shadow-sm w-140 ">
            <div className="card-body">
              <h2 className="font-bold text-2xl">{event.title}</h2>
              <h3 className="font-semibold text-lg ">About this event</h3>
              <p className="text-base text-gray-500 border-b pb-5 border-b-gray-200">{event.description}</p>
              <div className="flex items-center gap-2 pt-5 ">
                <Calendar className="w-4 text-blue-700" />
                <p>Date & Time</p>
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 border-b pb-5 border-b-gray-200">
                <MapPin className="w-4 text-blue-700" />
                <p>Location</p>
                <span>{event.location}</span>
              </div>
              <button
                onClick={() => {
                  window.open(`https://www.google.com/maps?q=${event.latitude},${event.longitude}`, "_blank");
                }}
                className="flex items-center text-white bg-[#b87f05] rounded-lg px-4 py-2 cursor-pointer"
              >
                <MapPin className="w-4" />
                <p>View on Map</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
