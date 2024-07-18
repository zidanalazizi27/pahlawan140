import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tailwindcss/tailwind.css";

const data = {
  berita: [
    {
      id: 1,
      title: "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://umsida.ac.id/wp-content/uploads/2024/07/Umsida-dan-BPS-Sidoarjo-3-scaled.jpg",
    },
    {
      id: 2,
      title: "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 3,
      title: "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 4,
      title: "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 5,
      title: "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 6,
      title: "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 7,
      title: "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
  ],
  pengumuman: [
    {
      id: 1,
      title: "Pengumuman 1",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
  ],
  youtube: [
    {
      id: 1,
      title: "YouTube Video 1",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
  ],
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("berita");

  const renderItems = () => {
    return data[selectedCategory].map((item) => (
      <div key={item.id} className="relative w-full md:w-1/4 px-2">
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-pdarkblue to-transparent"></div>
        </div>
        <div className="absolute bottom-5 left-5 right-5 text-left text-white">
          <p className="text-sm mb-2 font-semibold" style={{ margin: "0 2.5%" }}>{item.title}</p>
          <p className="text-xs" style={{ margin: "0 2.5%" }}>{item.date}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold text-pdarkblue">Kabar BPS 3515</h1>
        <button className="px-4 py-2 bg-pdarkblue text-white rounded-full border border-pdarkblue">
          Selengkapnya
        </button>
      </div>
      <p className="text-sm mb-5 from-neutral-600">Baca informasi terbaru seputar kegiatan dan layanan dari BPS Kabupaten Sidoarjo</p>
      <div className="text-sm font-semibold flex justify-start gap-4 mb-5">
        <button
          onClick={() => setSelectedCategory("berita")}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === "berita" ? "bg-pdarkblue text-white" : "bg-white text-pdarkblue border-pdarkblue"
          }`}
        >
          Berita
        </button>
        <button
          onClick={() => setSelectedCategory("pengumuman")}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === "pengumuman" ? "bg-pdarkblue text-white" : "bg-white text-pdarkblue border-pdarkblue"
          }`}
        >
          Pengumuman
        </button>
        <button
          onClick={() => setSelectedCategory("youtube")}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === "youtube" ? "bg-pdarkblue text-white" : "bg-white text-pdarkblue border-pdarkblue"
          }`}
        >
          YouTube
        </button>
      </div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop
        selectedItem={0}
        className="carousel"
      >
        {data[selectedCategory].slice(0, Math.ceil(data[selectedCategory].length / 4)).map((_, index) => (
          <div className="flex">
          {data[selectedCategory].slice(index * 4, (index + 1) * 4).map((item) => (
            <div key={item.id} className="relative w-full md:w-1/4 px-2">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-pdarkblue to-transparent"></div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                <p className="text-sm mb-2 font-semibold" style={{ margin: "0 2.5%" }}>{item.title}</p>
                <p className="text-xs" style={{ margin: "0 2.5%" }}>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
                
        ))}
      </Carousel>
    </div>
  );
};

export default App;
