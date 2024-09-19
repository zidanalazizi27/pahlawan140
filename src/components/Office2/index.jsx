import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Office2() {
  const list = [
    {
      title: "BOS",
      img: "/image/bos.png",
      desc: "Aplikasi Back Office Selindo (BOS) adalah Sistem Informasi Manajemen yang terintegrasi dalam menyertai siklus APBN di lingkungan BPS.",
      link: "https://backoffice.bps.go.id/",
    },
    {
      title: "Monalisa",
      img: "/image/monalisa.png",
      desc: "Monitoring Anggaran dan Realisasi. Pemanfaatan TI dalam perencanaan anggaran, target dan penarikan dana serta identifikasi pemaketan RUP.",
      link: "https://sites.google.com/view/temanlukisidoarjo/monalisa?authuser=0",
    },
    {
      title: "Simonik",
      img: "/image/simonik.png",
      desc: "Sistem monitoring kinerja. Inovasi layanan dalam mempermudah proses penilaian capaian kinerja pegawai di lingkungan BPS Sidoarjo.",
      link: "https://s.bps.go.id/SIMONIK3515",
    },
    {
      title: "FRA",
      img: "/image/fra.png",
      desc: "Form Rencana Aksi merupakan sebuah dokumen yang menjadi inti pelaksanaan praktik keterbukaan di lingkungan BPS Kabupaten Sidoarjo.",
      link: "https://forms.gle/4XZ1j1JL8m4tHJNHA",
    },
  ];

  return (
    <div className="mt-[5%]">
      <h1 className="mb-2 text-center header">Keuangan</h1>
      <p className="mb-2 text-center sub-header">
        Membantu organisasi dalam mengelola keuangan secara efektif dan efisien.
        Mencakup berbagai fitur yang memungkinkan pengguna untuk melakukan
        berbagai laporan keuangan.
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
