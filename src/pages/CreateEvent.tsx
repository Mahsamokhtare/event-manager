import { Link } from "react-router";
import EventForm from "../components/layout/EventForm";

export default function CreateEvent() {
  return (
    <>
      <div className="bg-[#f3e3c0] h-screen flex items-center justify-center">
        <div className="relative">
          {/* Back link – top left of the card */}
          <Link to="/">
            <button className="absolute -top-10 left-0 flex items-center gap-2 text-sm font-medium hover:underline cursor-pointer">
              <i className="fa-solid fa-arrow-left"></i>
              Back to Events
            </button>
          </Link>

          {/* Card */}
          <div className="bg-white w-2xl p-8 rounded-lg shadow-md">
            <header className="mb-6 flex items-center">
              <i className="fa-solid fa-square-plus text-4xl pr-3 text-[#e4bf6f]"></i>
              <p className="text-xl">Create New Event</p>
            </header>

            <EventForm />
          </div>
        </div>
      </div>
    </>
  );
}
