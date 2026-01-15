import { Calendar } from "lucide-react";

export default function EventCard() {
  return (
    <>
      <div className="p-2 flex flex-wrap sm:flex-row gap-5">
        <div className="card bg-base-100 w-60 shadow-sm cursor-pointer hover:scale-105 hover:shadow-2xl duration-300">
          <div className="flex items-center gap-1 justify-end text-sm text-blue-950 bg-amber-300 rounded-t-lg px-3 py-1 text-right">
            <Calendar className="w-4" />
            <span>date</span>
          </div>
          <figure>
            <img src="" alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="text-cyan-500 font-bold text-2xl">title</h2>
            <p className="line-clamp-1 text-sm opacity-80">content</p>
          </div>
        </div>
      </div>
    </>
  );
}
