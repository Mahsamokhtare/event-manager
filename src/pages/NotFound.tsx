import { Link } from "react-router";
import notFoundImg from "../../src/assets/images/undraw_page-not-found_6wni.png";
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl h-auto">
        <img
          src={notFoundImg}
          alt="Page not found"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="text-center mt-6">
        <p className="text-lg font-medium text-gray-500 sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={"/"}
            className="rounded-md bg-[#e4bf6f] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
