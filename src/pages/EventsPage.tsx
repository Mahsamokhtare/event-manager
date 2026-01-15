import { useEffect, useState } from "react";
import { fetchEvents } from "../api/auth.api";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents(1, 10).then(setEvents).catch(console.error);
  }, []);
  console.log(events);
  return (
    <ul>
      {events.map((e: any) => (
        <li key={e.id || e._id}>{e.title}</li>
      ))}
    </ul>
  );
}
