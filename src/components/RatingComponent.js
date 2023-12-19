import { useState } from "react";
import { FaStar } from "react-icons/fa";
import sendRating from "src/service/rating/sendRating";

export function ButtonRating({ action }) {
  return (
    <button
      onClick={action}
      className="fixed z-40 bottom-12 right-16 bg-yellow-500 rounded-md py-2 px-8 text-white flex gap-4 font-medium items-center"
    >
      Beri Penilaian
      <FaStar size={20} color="white" />
    </button>
  );
}

export function RatingComponent({ show, cancel }) {
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await sendRating(rating, message);
    cancel();
  }

  return (
    <div
      className={`${
        show ? "fixed" : "hidden"
      } min-h-screen w-full z-50 flex justify-center items-center`}
    >
      <div
        onClick={cancel}
        className="absloute bg-black bg-opacity-50 w-full min-h-screen"
      ></div>
      <div className="bg-white py-8 px-8 rounded-xl absolute">
        <h1 className="text-center text-2xl font-medium text-slate-900">
          Penilaian Aplikasi
        </h1>
        <div className="grid grid-cols-5 gap-5 mt-5">
          <FaStar
            className="hover:cursor-pointer"
            size={36}
            color={rating >= 1 ? "orange" : "gray"}
            onClick={() => {
              setRating(1);
            }}
          />
          <FaStar
            className="hover:cursor-pointer"
            size={36}
            color={rating >= 2 ? "orange" : "gray"}
            onClick={() => {
              setRating(2);
            }}
          />
          <FaStar
            className="hover:cursor-pointer"
            size={36}
            color={rating >= 3 ? "orange" : "gray"}
            onClick={() => {
              setRating(3);
            }}
          />
          <FaStar
            className="hover:cursor-pointer"
            size={36}
            color={rating >= 4 ? "orange" : "gray"}
            onClick={() => {
              setRating(4);
            }}
          />
          <FaStar
            className="hover:cursor-pointer"
            size={36}
            color={rating >= 5 ? "orange" : "gray"}
            onClick={() => {
              setRating(5);
            }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            rows={5}
            required
            className="border w-full mt-5 outline-none focus:border-purple-600 py-2 px-2 rounded-lg"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          >
            {message}
          </textarea>
          <div className="action grid grid-cols-2 gap-4 mt-5">
            <button
              onClick={cancel}
              type="button"
              className="py-2 px-5 rounded-md bg-gray-100 w-full"
            >
              Batal
            </button>
            <button
              type="submit"
              className="py-2 px-5 rounded-md  bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 text-white w-full"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
