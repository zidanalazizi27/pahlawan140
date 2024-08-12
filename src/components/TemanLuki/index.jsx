import React from "react";
import { Image } from "@nextui-org/react";

export default function TemanLuki() {
  return (
    <div className="mt-[7%]">
      <h1 className="mb-2 text-center header">Teman Luki</h1>
      <p className="text-justify sub-header">
        Sistem Monitoring dan Evaluasi Kinerja Merupakan solusi inovatif yang
        dirancang khusus untuk mendukung capaian output dan pelayanan publik BPS
        Kabupaten Sidoarjo yang berbasis IT secara efektif dan efisien. Sistem
        ini bertujuan untuk meningkatkan transparansi, akurasi, dan kecepatan
        akses informasi terkait kinerja yang mana memungkinkan para pemangku
        kepentingan untuk membuat keputusan yang lebih akurat.
      </p>
      <br />
      <h2 className="mb-2 text-center header">Pencapaian Kami</h2>
      <div className="flex justify-center">
        <Image
          isZoomed
          isBlurred
          width={511}
          height={360}
          alt="Penghargaan Teman Luki"
          src="/image/sertifikat.png"
        />
      </div>
      <br />
      <br />
      <h2 className="mb-2 text-center header">Monev OPD</h2>
      <p className="text-justify sub-header">
        Sebuah alat manajemen informasi dan visualisasi data yang dirancang
        dengan cermat untuk memuat dan menampilkan seluruh kegiatan statistik
        sektoral yang diajukan oleh Organisasi Perangkat Daerah (OPD) dari tahun
        ke tahun.
      </p>
      <div className="flex justify-center">
        <iframe
          width="1000"
          height="800"
          src="https://lookerstudio.google.com/embed/reporting/0B_U5RNpwhcE6QXg4SXFBVGUwMjg/page/6zXD"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
      </div>
      <br />
      <br />
      <h2 className="mb-2 text-center header">Monitoring Sensus dan Survei</h2>
      <p className="text-justify sub-header">
        Sistem evaluasi yang dirancang untuk memastikan kualitas dan akurasi
        data yang dikumpulkan oleh petugas lapangan dalam pelaksanaan sensus dan
        survei oleh Badan Pusat Statistik (BPS). Dengan fokus pada validitas dan
        keandalan data, sistem ini memainkan peran penting dalam memastikan
        bahwa setiap tahap pengumpulan data dilakukan sesuai dengan standar yang
        ditetapkan.
      </p>
      <div className="flex justify-center">
        <iframe
          width="1000"
          height="847"
          src="https://lookerstudio.google.com/embed/reporting/a04698a4-ad08-48c3-95eb-4273f2812f82/page/p_3it7ak2zlc"
          frameBorder="0"
          style={{ border: 0 }}
          allowfullscreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
      </div>
    </div>
  );
}
