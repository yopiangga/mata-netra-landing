import { BiScan, BiHistory, BiMicrophone, BiVolumeFull, BiLocationPlus, BiCurrentLocation } from "react-icons/bi";
import { RiArticleLine, RiImage2Fill } from "react-icons/ri";
import { HiDocumentText, HiVolumeUp } from "react-icons/hi";

export function FiturComponent() {
  return (
    <div className="flex justify-center w-full bg-white" id="fitur">
      <div className="w-10/12 pt-32 pb-16">
        <div className="header-title text-center">
          <h2 className="text-4xl font-medium">Fitur Aplikasi</h2>
          <p className="text-sm mt-5 text-gray-600">
            Anda dapat mempresentasikan aplikasi Anda. Semuanya sangat mudah!
          </p>
        </div>
        <div className="fitur-content mt-16 grid lg:grid-cols-4 grid-cols-1 gap-8">
          <CardFitur
            icon={<BiMicrophone size={28} color="white" />}
            title="Voice"
            description="Anda dapat menyebutkan tujuan dan mendapatkan teks juga hasil audio."
          />
          <CardFitur
            icon={<BiCurrentLocation size={28} color="white" />}
            title="Lokasi"
            description="Mendapatkan informasi tentang lokasi mana yang ingin di tuju"
          />
          <CardFitur
            icon={<RiImage2Fill size={28} color="white" />}
            title="Image Informatif"
            description="Dapat menampilkan informasi mengenai jarak ruangan"
          />
          <CardFitur
            icon={<HiVolumeUp size={28} color="white" />}
            title="Sound"
            description="Menunjukan pengguna bahwa telah sampai pada tujuan"
          />
        </div>
      </div>
    </div>
  );
}

export function CardFitur({ icon, title, description }) {
  return (
    <div className="bg-white pt-8 pb-12 px-8 drop-shadow-2xl rounded-xl h-fit">
      <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-600 rounded-md flex justify-center items-center">
        {icon}
      </div>
      <h3 className="text-xl font-medium mt-6 text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500 mt-2">{description}</p>
    </div>
  );
}
