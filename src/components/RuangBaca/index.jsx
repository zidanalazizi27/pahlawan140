import React from "react";
import CardCustom from "../CardCustom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Link } from "react-router-dom";

const RuangBaca = () => {
  // Definisikan array data untuk setiap card
  const cardsData = [
    {
      src: "/image/Rbc/m1.png",
      link: "https://drive.google.com/file/d/1znq7qQSLPd4RYFDMkdTxi-7CDoZKXQfb/view?usp=drive_link",
      alt: "Dasar-Dasar Statistik 1",
      title: "Modul 1",
    },
    {
      src: "/image/Rbc/m2.png",
      link: "https://drive.google.com/file/d/1DcUk97KKIj-t6H-d5VNhBJxd8HzhQJog/view?usp=drive_link",
      alt: "Dasar-Dasar Statistik 2",
      title: "Modul 2",
    },
    {
      src: "/image/Rbc/m3.png",
      link: "https://drive.google.com/file/d/1h9wFhxLsLc_xKp_JJ-RQjgx3x4kLra5L/view?usp=drive_link",
      alt: "Dasar-Dasar Statistik 3",
      title: "Modul 3",
    },
    {
      src: "/image/Rbc/m4.png",
      link: "https://drive.google.com/file/d/13xDM-bzLDEqOcjxnWRJokBgp95BmVXqJ/view?usp=drive_link",
      alt: "Dasar-Dasar Statistik 4",
      title: "Modul 4",
    },
    {
      src: "/image/Rbc/inf.png",
      link: "https://drive.google.com/file/d/1W01twx43GCfbx4maV-9Memav0IfdV7G0/view?usp=drive_link",
      alt: "Materi Infografis",
      title: "Materi Infografis",
    },
    {
      src: "/image/Rbc/leader.png",
      link: "https://drive.google.com/file/d/1yjkuiN7wAkWKQno4HZTV_0bI6M7e90w7/view?usp=drive_link",
      alt: "Survey Methodology",
      title: "Mind Setting",
    },
    {
      src: "/image/Rbc/pkl1.png",
      link: "https://drive.google.com/file/d/1KX3kH-UdZIWogbuwLCXTrXE-of5g_Cvu/view?usp=drive_link",
      alt: "Makalah PKL 1",
      title: "Makalah PKL 1",
    },
    {
      src: "/image/Rbc/pkl2.png",
      link: "https://drive.google.com/file/d/1_TOhyT0RCTTKK4J_HqyEH8siwQBCHTqG/view?usp=drive_link",
      alt: "Makalah PKL 2",
      title: "Makalah PKL 2",
    },
  ];

  return (
    <div className="flex flex-col mt-[8%]">
      <h1 className="mb-2 text-center header">
        Selamat Datang di Ruang Baca Digital BPS Sidoarjo!
      </h1>
      <p className="text-center sub-header">
        Berikut merupakan koleksi pustaka bacaan yang telah kami sediakan untuk
        memenuhi kebutuhan informasi dan literasi Anda. Dengan akses yang mudah
        dan cepat, Anda dapat menjelajahi berbagai jenis bacaan yang tersedia
        dimanapun dan kapanpun.
      </p>
      <div className="swiperWrapper">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="px-[50px] py-[30px]"
        >
          {cardsData.map((card, index) => (
            <SwiperSlide
              key={index}
              className="lg:h-[270px] xl:h-[300px] 2xl:h-[270px] px-4 my-10"
            >
              <Link to={card.link}>
                <Image
                  isBlurred
                  // isZoomed
                  width={180}
                  height={240}
                  src={card.src}
                  alt={card.alt}
                  className="m-5"
                />
                <p className="text-center mt-2 font-bold text-[#0B588F]">
                  {card.title}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RuangBaca;
