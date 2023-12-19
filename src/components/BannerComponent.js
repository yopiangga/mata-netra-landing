import mainscreen from "src/assets/img/banner/main-screen.png";
import homeBanner from "src/assets/img/banner/baner-blue.jpg";
import { useEffect, useState } from "react";
import { getRatingCount } from "src/service/rating/getRating";
import { FaStar } from "react-icons/fa";

export function BannerComponent({ pathDownload, action }) {
  const [ratingCount, setRatingCount] = useState(5);
  const [countRating, setCountRating] = useState(0);

  useEffect(() => {
    getRatingCount()
      .then((res) => {
        setRatingCount(res.rate);
        setCountRating(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function ShowRating() {
    return (
      <div className="flex gap-3 mt-5">
        <FaStar size={28} color={ratingCount > 0 ? "orange" : "white"} />
        <FaStar size={28} color={ratingCount > 1 ? "orange" : "white"} />
        <FaStar size={28} color={ratingCount > 2 ? "orange" : "white"} />
        <FaStar size={28} color={ratingCount > 3 ? "orange" : "white"} />
        <FaStar size={28} color={ratingCount > 4 ? "orange" : "white"} />
      </div>
    );
  }

  return (
    <div
      className="w-full flex justify-center items-center text-white"
      id="beranda"
      style={{ backgroundImage: `url(${homeBanner})`, backgroundSize: "cover" }}
    >
      <div className="w-10/12 h-full top-0 bottom-0 my-32 ">
        <div className="flex banner_content flex-col lg:flex-row">
          <div className="lg:w-3/4 w-full flex flex-col justify-center">
            <h2 className="text-6xl font-semibold">
              MATA Netra{" "}
            </h2>
            <p className="mt-5 lg:w-96 font-light text-sm">
              APLIKASI PENUNJUK ARAH BERBASIS AI UNTUK MEMBANTU PENYANDANG TUNANETRA
              DALAM MENENTUKAN ARAH
            </p>
            <ShowRating />
            <h5 className="mt-2 text-sm">{countRating} penilaian pengguna</h5>
            <a
              href={pathDownload}
              onClick={action}
              download
              className="mt-10 bg-white rounded-md py-4 px-12 w-fit text-slate-900 text-xs font-medium"
            >
              Unduh Sekarang
            </a>
          </div>
          <div className="lg:w-1/4 w-full flex items-center justify-center h-full lg:mt-0 mt-16">
            <div className="">
              <img className="w-64" src={mainscreen} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
