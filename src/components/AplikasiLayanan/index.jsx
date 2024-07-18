import React from "react";
import {
    Card, 
    CardBody, 
    CardFooter, 
    Image
} from "@nextui-org/react";

export default function AplikasiLayanan() {
  const list = [
    {
      title: "Romantik",
      img: "/pict/Romantik.jpeg",
      desc: "'Rujukan Otomatis Manajemen Statistik Terintegrasi' merupakan sistem atau aplikasi yang dikembangkan oleh Badan Pusat Statistik (BPS) Indonesia. Sistem ini bertujuan meningkatkan efisiensi dan efektivitas manajemen data statistik melalui proses yang terintegrasi dan otomatis.",
      link: "https://romantik.web.bps.go.id/"
    },
    {
      title: "Situs BPS",
      img: "/pict/Web BPS.jpeg",
      desc: "Situs web resmi Badan Pusat Statistik (BPS) Indonesia yang menyediakan berbagai informasi dan layanan terkait data statistik. Situs ini merupakan portal utama untuk mengakses data, publikasi, dan informasi lainnya yang disediakan oleh BPS yang telah diverifikasi dan diolah secara profesional.",
      link: "https://www.bps.go.id/id"
    },
    {
      title: "Pojok Statistik",
      img: "/pict/Potik.jpeg",
      desc: "Portal online yang disediakan Badan Pusat Statistik (BPS) guna memudahkan akses masyarakat terhadap data dan informasi statistik. Berfungsi sebagai sumber informasi yang interaktif dan user-friendly, dirancang membantu pengguna memahami dan memanfaatkan data statistik lebih baik.",
      link: "https://pojokstatistik.bps.go.id/"
    },
    {
      title: "Desa Cantik",
      img: "/pict/Desa Cantik.jpeg",
      desc: "Program yang diinisiasi Badan Pusat Statistik (BPS) untuk meningkatkan literasi statistik di tingkat desa dan memperkuat kapasitas pemerintah desa dalam mengelola data dan informasi statistik secara mandiri, sehingga dapat digunakan untuk perencanaan dan pengambilan keputusan yang lebih baik.",
      link: "https://siokicantik.bpsoki.com/"
    }
  ];

  return (
    
    <div className="bg-base" style={{padding: '5% 10%', textAlign: 'center'}}>
        <h1 className="font-extrabold font-inter text-[30px] text-pdarkblue ml-4">Aplikasi Pelayanan</h1>
        <p className="font-normal font-assistant text-[22px] text-pdarkblue ml-3">Sistem yang memfasilitasi layanan BPS kepada publik</p><br/>
        <div className="gap-5 grid grid-cols-3 sm:grid-cols-4">
      {list.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="card-link">
        <Card shadow="md" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-4">
            <Image
              shadow="md"
              radius="md"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-full"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small block">
            <b className="font-bold font-inter text-[20px] text-pdarkblue text-left">{item.title}</b>
            <p className="font-normal font-inter text-[15px] ml-2" style={{ color: '#5A5858', textAlign: 'justify', padding: '2%' }}>{item.desc}</p>
          </CardFooter>
        </Card>
        </a>
      ))}
      <span></span>
      </div>
    </div>
  );
}
