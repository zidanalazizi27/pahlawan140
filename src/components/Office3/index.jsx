import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Office2() {
  const list = [
    {
      title: "Do Smart",
      img: "/image/smart.png",
      desc: "Digitalisasi dalam kegiatan pengarsipan di untuk menciptakan tata kelola pemerintah yang lebih efektif dan transparan.",
      link: "https://sites.google.com/view/srikandi3515",
    },
    {
      title: "BAST",
      img: "/image/bast.png",
      desc: "Berita Acara Serah Terima. Dokumen dasar hukum proses serah terima barang atau jasa di lingkungan BPS.",
      link: "https://internal.bps.go.id/",
    },
    {
      title: "Surat Tugas",
      img: "/image/st.png",
      desc: "naskah dinas yang dibuat oleh atasan atau pejabat yang berwenang kepada bawahan atau pejabat lain yang diberi tugas.",
      link: "https://webapps.bps.go.id/kipapp/#/auth/login",
    },
    {
      title: "Surat Pengantar",
      img: "/image/sp.png",
      desc: "Surat resmi instansi BPS untuk memberikan informasi penting kepada pihak tertentu.",
      link: "https://www.majapah.it/",
    },
  ];

  return (
    <div className="mt-[5%]">
      <h1 className="mb-2 text-center header">Administrasi</h1>
      <p className="mb-2 text-center sub-header">
        Sistem informasi yang membantu organisasi dalam mengelola berbagai tugas
        administratif menjadi lebih efisien dan terorganisir.
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
