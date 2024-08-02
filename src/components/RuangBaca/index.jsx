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
      src: "https://cdnagesdb.com/images/booksimages/39150A76C47752ED3B39788AA04B2D4D.webp",
      link: "https://z-lib.id/book/sql-in-7-days",
      alt: "SQL in 7 Days",
      title: "SQL",
    },
    {
      src: "https://cdnagesdb.com/images/booksimages/B732B9F58CA83C21099287BF213B041F.webp",
      link: "https://z-lib.id/book/data-science-in-applications",
      alt: "Data Science in Applications",
      title: "Data Science",
    },
    {
      src: "https://isbncoverdb.com/images/book-cover-survey-methodology-wiley-series-in-survey-methodology.webp",
      link: "https://z-lib.id/book/survey-methodology-wiley-series-in-survey-methodology",
      alt: "Survey Methodology",
      title: "Survey Methodology",
    },
    {
      src: "https://cdnagesdb.com/images/booksimages/E58343194F2FC58BFE4456543ADFACA9.webp",
      link: "https://z-lib.id/book/32686599-regression-analysis-2",
      alt: "Regression Analysis",
      title: "Regression Analysis",
    },
    {
      src: "https://ia800408.us.archive.org/view_archive.php?archive=/9/items/olcovers111/olcovers111-L.zip&file=1110441-L.jpg",
      link: "hhttps://openlibrary.org/books/OL7338366M/Applied_Multivariate_Statistical_Analysis_(6th_Edition)",
      alt: "Applied Multivariate Statistical Analysis (6th Edition)",
      title: "Multivariate Statistical Analysis",
    },
    {
      src: "https://isbncoverdb.com/images/book-cover-research-methodology-for-postgraduate-students.webp",
      link: "https://z-lib.id/book/research-methodology-for-postgraduate-students",
      alt: "Research Methodology for Postgraduate Students",
      title: "Research Methodology",
    },
    {
      src: "https://cdnagesdb.com/images/booksimages/BE49142FF4A73B36E236F9D84043D720.webp",
      link: "https://z-lib.id/book/data-mining-and-predictive-analytics-for-business",
      alt: "Data Mining and Predictive Analytics for Business Decisions",
      title: "Data Mining",
    },
    {
      src: "https://cdnagesdb.com/images/booksimages/A2721A941A735E0628D0B5ED731D91D0.webp",
      link: "https://z-lib.id/book/javascript-for-modern-web-development-1",
      alt: "JavaScript for Modern Web Development: Building a Web Application Using HTML, CSS, and Javascript",
      title: "JavaScript",
    },
    {
      src: "https://m.media-amazon.com/images/I/A1uf0Ehs-yL._AC_UF1000,1000_QL80_.jpg",
      link: "https://unstats.un.org/unsd/nationalaccount/docs/sna2008.pdf",
      alt: "System of National Accounts 2008",
      title: "SNA 2008",
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
