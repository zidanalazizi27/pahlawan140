import React from "react";
import { BsDatabase } from "react-icons/bs";
import CardCustom from "../CardCustom";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineQueryStats } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
import { LuBookUp2 } from "react-icons/lu";
import { TbHomeStats } from "react-icons/tb";

const LayananSection = () => {
  // Definisikan array data untuk setiap card
  const cardsData = [
    {
      bgColor: "#F44336",
      iconColor: "white",
      icon: <BsDatabase className="text-[25px] text-white" />,
      title: "Satu Data Indonesia",
      description:
        "BPS Terus membina OPD Daerah dan Vertikal untuk mewujudkan data yang akurat, mutakhir, terpadu, terintegrasi, dan dapat diakses oleh pengguna data sebagai dasar rencana pelaksanaan evaluasi dan pengendalian melalui perbaikan tata kelola data pemerintah.",
      link: "https://sketsa3515.my.canva.site",
    },
    {
      bgColor: "#00CC83",
      iconColor: "white",
      icon: <LuBookUp2 className="text-[25px] text-white" />,
      title: "Pojok Statistik",
      description:
        "Nikmati layanan potik Tempat Asyik Belajar Statistik Nikmati berbagai macam layanan menarik seperti videografis, infografis, kelas statistik dan masih banyak lagi untuk kamu nikmati hanya di Pojok Statistik BPS.",
      link: "https://pojokstatistik.bps.go.id",
    },
    {
      bgColor: "#26AAE1",
      iconColor: "white",
      icon: <TbHomeStats className="text-[25px] text-white" />,
      title: "Desa Cantik",
      description:
        "Program percepatan dari Badan Pusat Statistik dalam lingkup wilayah Desa/Kelurahan/Nagari/Wilayah setingkatnya untuk meningkatkan kompetensi aparatur Desa dalam mengelola dan memanfaatkan data Desa sehingga Perencanaan Pembangunan Desa menjadi lebih tepat sasaran.",
      link: "#",
    },
    {
      bgColor: "#EB891B",
      iconColor: "white",
      icon: <IoSchoolOutline className="text-[25px] text-white" />,
      title: "Ayo Magang",
      description:
        "Nikmati layanan kemudahan untuk mendapatkan kesempatan magang di BPS Kabupaten Sidoarjo untuk mendapatkan banyak pengalaman dan ilmu.",
      link: "#",
    },
    {
      bgColor: "#468585",
      iconColor: "white",
      icon: <MdOutlineQueryStats className="text-[25px] text-white" />,
      title: "Cari Data",
      description:
        " Layanan BPS yang memungkinkan pengguna untuk mengajukan permintaan data statistik melalui formulir online, memfasilitasi akses cepat dan tepat terhadap informasi terbaru.",
      link: "https://sidoarjokab.bps.go.id/pencarian.html?",
    },
  ];

  return (
    <div className="flex flex-col my-10">
      <h1 className="mb-2 text-center header">Layanan Kami</h1>
      <p className="mb-5 text-center sub-header">
        Layanan BPS Kabupaten Sidoarjo dalam Sketsa Ragam Pelayanan Kami kepada
        anda dalam melaksanakan kegiatan statistik.
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
              spaceBetween: 0,
            },
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className=""
        >
          {cardsData.map((card, index) => (
            <SwiperSlide
              key={index}
              className="lg:h-[270px] xl:h-[300px] 2xl:h-[270px] px-4 my-10"
            >
              <CardCustom
                bgColor={card.bgColor}
                iconColor={card.iconColor}
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LayananSection;
