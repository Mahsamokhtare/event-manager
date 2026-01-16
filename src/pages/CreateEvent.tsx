import EventForm from "../components/layout/EventForm";

export default function CreateEvent() {
  return (
    <>
      <div className="flex items-center justify-center bg-[#f3e3c0] h-screen">
        <div className="bg-white w-2xl p-8">
          <header className="mb-6 flex items-center ">
            <i className="fa-solid fa-square-plus text-4xl pr-3 text-[#e4bf6f]"></i>
            <p className="text-xl">Create New Event</p>
          </header>
          <div>
            <EventForm></EventForm>
          </div>
        </div>
      </div>
    </>
  );
}
