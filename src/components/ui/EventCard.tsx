import { Calendar, Pin } from "lucide-react";

export default function EventCard() {
  return (
    <>
      <div className="p-2 flex flex-wrap sm:flex-row gap-5">
        <div className="card bg-amber-50 w-60 shadow-sm cursor-pointer hover:scale-101 hover:shadow-xl duration-300">
          <div className="card-body">
            <h2 className="text-cyan-500 font-bold text-xl">Event title</h2>
            <p className="line-clamp-1 text-sm opacity-80">content</p>
            <div className="flex items-center gap-1">
              <Calendar className="w-4" />
              <span>date</span>
            </div>
            <div className="flex items-center gap-1">
              <Pin className="w-4" />
              <span>location</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
