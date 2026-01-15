import EventCard from "../components/ui/EventCard";

export default function Home() {
  return (
    <>
      <div className="p-10">
        <h2 className="text-3xl p-2 font-bold">Upcoming Events</h2>
        <p className="text-base p-2">Discover and join amazing events in your area</p>
        <EventCard />
      </div>
    </>
  );
}
