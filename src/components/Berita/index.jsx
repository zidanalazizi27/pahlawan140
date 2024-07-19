import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tailwindcss/tailwind.css";

const data = {
  berita: [
    {
      id: 1,
      title:
        "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl:
        "https://umsida.ac.id/wp-content/uploads/2024/07/Umsida-dan-BPS-Sidoarjo-3-scaled.jpg",
    },
    {
      id: 2,
      title:
        "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 3,
      title:
        "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 4,
      title:
        "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 5,
      title:
        "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 6,
      title:
        "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
      date: "13 Jul 2024",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 7,
      title:
        "Tindak Lanjut Pajak Statistik, BPS Sidoarjo dan Umsida Perpanjang Kerja Sama",
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

const Berita = () => {
  const [selectedCategory, setSelectedCategory] = useState("berita");

  const renderItems = () => {
    return data[selectedCategory].map((item) => (
      <div key={item.id} className="relative w-full px-2 md:w-1/4">
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pdarkblue to-transparent"></div>
        </div>
        <div className="absolute text-left text-white bottom-5 left-5 right-5">
          <p
            className="mb-2 text-sm font-semibold"
            style={{ margin: "0 2.5%" }}
          >
            {item.title}
          </p>
          <p className="text-xs" style={{ margin: "0 2.5%" }}>
            {item.date}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-1">
        <h1 className="header">Kabar BPS 3515</h1>
        <button className="px-4 py-2 text-white border rounded-full bg-pdarkblue border-pdarkblue text-[14px]">
          Selengkapnya
        </button>
      </div>
      <p className="mb-7 sub-header">
        Baca informasi terbaru seputar kegiatan dan layanan dari BPS Kabupaten
        Sidoarjo
      </p>
      <div className="flex justify-start gap-4 mb-5 text-sm font-semibold">
        <button
          onClick={() => setSelectedCategory("berita")}
          className={`text-[14px] px-4 py-2 rounded-full border ${
            selectedCategory === "berita"
              ? "bg-pdarkblue text-white"
              : "bg-white text-pdarkblue border-pdarkblue"
          }`}
        >
          Berita
        </button>
        <button
          onClick={() => setSelectedCategory("pengumuman")}
          className={`text-[14px] px-4 py-2 rounded-full border ${
            selectedCategory === "pengumuman"
              ? "bg-pdarkblue text-white"
              : "bg-white text-pdarkblue border-pdarkblue"
          }`}
        >
          Pengumuman
        </button>
        <button
          onClick={() => setSelectedCategory("youtube")}
          className={`text-[14px] px-4 py-2 rounded-full border ${
            selectedCategory === "youtube"
              ? "bg-pdarkblue text-white"
              : "bg-white text-pdarkblue border-pdarkblue"
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
        {data[selectedCategory]
          .slice(0, Math.ceil(data[selectedCategory].length / 4))
          .map((_, index) => (
            <div className="flex" key={index}>
              {data[selectedCategory]
                .slice(index * 4, (index + 1) * 4)
                .map((item) => (
                  <div key={item.id} className="relative w-full px-2 md:w-1/4">
                    <div className="relative w-full h-64 overflow-hidden rounded-lg">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pdarkblue to-transparent"></div>
                    </div>
                    <div className="absolute text-left text-white bottom-5 left-5 right-5">
                      <p
                        className="mb-2 text-[12px] font-semibold"
                        style={{ margin: "0 2.5%" }}
                      >
                        {item.title}
                      </p>
                      <p className="text-[10px]" style={{ margin: "0 2.5%" }}>
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Berita;
