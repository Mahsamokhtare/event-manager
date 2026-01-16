export default function Navbar() {
  return (
    <>
      <div className="border-b p-4 flex gap-2 justify-between">
        <span>EventHub</span>
        <a href="/login" className="text-blue-500 font-semibold hover:underline">
          Sign In
        </a>
      </div>
    </>
  );
}
