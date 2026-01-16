import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createEvents } from "../../api/event.api";
import type { EventData } from "../../features/types/event.types";
import { useNavigate } from "react-router";
type Coordinates = {
  lat: number;
  lng: number;
};

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [location, setLocation] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function geocodeLocation(address: string): Promise<Coordinates> {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );

    const data = await res.json();

    if (!data || data.length === 0) {
      throw new Error("Location not found");
    }

    return {
      lat: Number(data[0].lat),
      lng: Number(data[0].lon),
    };
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const coordinates = await geocodeLocation(location);
      setCoords(coordinates);

      const eventData: EventData = {
        title,
        description,
        date: date?.toISOString(),
        location,
        latitude: coordinates.lat,
        longitude: coordinates.lng,
      };

      console.log("Submitting event:", eventData);
      await createEvents(eventData);
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="pb-6">
          <label className="block pb-2 pl-1 text-gray-700">
            Event Title<span className="text-gray-500">*</span>
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            required
            placeholder="e.g,Tech Conference"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-xl"
          />
        </div>
        <div className="pb-6">
          <label className="block pb-2 pl-1 text-gray-700">
            Description<span className="text-gray-500">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            required
            placeholder="Tell attendees what to expect"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-xl"
          />
        </div>
        <div className="pb-6">
          <label className="block pb-2 pl-1 text-gray-700">
            Date & time<span className="text-gray-500">*</span>
          </label>
          <DatePicker
            selected={date}
            placeholderText="01/01/2026, 12:10 PM"
            onChange={(d: Date | null) => d && setDate(d)}
            showTimeSelect
            dateFormat="Pp"
            wrapperClassName="w-full"
            className="w-full p-3 border border-gray-300 rounded-xl"
          />
        </div>
        <div className="pb-6">
          <label className="block pb-2 pl-1 text-gray-700">
            Location<span className="text-gray-500">*</span>
          </label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            name="location"
            required
            placeholder="Tell attendees what to expect"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-xl"
          />
        </div>
        {error && (
          <div className="flex items-center border border-red-800 px-2 py-2 rounded-lg bg-red-100">
            <i className="fa-solid fa-circle-exclamation text-red-800 pr-2"></i>
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <div className="flex justify-between items-center gap-x-4 mt-8">
          <button
            type="button"
            className="w-full cursor-pointer  p-3 py-4 border border-gray-300 rounded-xl"
          >
            Cancel
          </button>
          <button
            disabled={loading}
            type="submit"
            className="w-full cursor-pointer bg-[#b87f05] p-3 py-4 rounded-xl text-white"
          >
            {loading ? "Creating..." : "Create Event"}
          </button>
        </div>
      </form>
    </>
  );
}
