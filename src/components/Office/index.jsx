import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Office() {
  const list = [
    {
      title: "Sipecut",
      img: "/image/sipecut.png",
      desc: "Sistem Informasi Pengajuan Cuti. Suatu sistem layanan yang membantu dan mempermudah pegawai dalam proses pengajuan cuti.",
      link: "https://sipecut.bps.go.id//",
    },
    {
      title: "Simpel Saja",
      img: "/image/simpeg.png",
      desc: "Sistem Informasi Manajemen Kepegawaian. Database untuk memenuhi kebutuhan pengelolaan kepegawaian BPS Sidoarjo secara efektif dan efesien.",
      link: "https://s.bps.go.id/Simpelsaja3515",
    },
    {
      title: "KipApp",
      img: "/image/kip app.png",
      desc: "Merupakan aplikasi berbasis web untuk mendukung penyelenggaraan Pengelolaan Kinerja Aparatur Sipil Negara di lingkungan BPS Sidoarjo",
      link: "https://webapps.bps.go.id/kipapp/#/auth/login",
    },
    {
      title: "Majapahit",
      img: "/image/majapahit.png",
      desc: "Manajemen Kepegawaian & Administrasi Terintegrasi. Inovasi terbaru BPS Provinsi Jawa Timur yang akan merekam kinerja seluruh pegawai.",
      link: "https://www.majapah.it/",
    },
  ];

  return (
    <div className="mt-[10%]">
      <h1 className="mb-2 text-center header">Kepegawaian</h1>
      <p className="mb-2 text-center sub-header">
        Solusi digital yang dirancang untuk mengoptimalkan berbagai aspek
        pengelolaan sumber daya manusia dalam organisasi BPS Sidoarjo.
      </p>
      <br />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <Card
              shadow="md"
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="p-4 overflow-visible">
                <Image
                  width="100%"
                  alt={item.title}
                  className="object-cover w-full h-full"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="block text-small">
                <b className="text-center title-card-lg">{item.title}</b>
                <p
                  className="ml-2 text-content-card"
                  style={{ textAlign: "justify", padding: "2%" }}
                >
                  {item.desc}
                </p>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
