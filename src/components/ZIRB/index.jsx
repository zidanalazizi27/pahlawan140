import React from "react";

const ZIRB = () => {
  return (
    <div className="flex flex-col mt-[10%]">
      <h1 className="text-center header">ZI-RB BPS Kabupaten Sidoarjo</h1>
      <br />
      <div className="flex justify-center items-center">
        <iframe
          width="640"
          height="360"
          src="https://drive.google.com/file/d/1UphxoiD69f318KEkcsS5ANZVoGh2McBD/preview"
          title="ZI-RB video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="rounded-lg"
        ></iframe>
      </div>
      <br />
      <h6 className="text-center header">Zona Integritas (ZI)</h6>
      <p className="text-center sub-header text-[#0B588F]">
        Merupakan predikat yang diberikan kepada kementerian, lembaga dan
        pemerintah daerah yang pimpinan dan jajarannya mempunyai niat (komitmen)
        untuk mewujudkan WBK dan WBBM melalui upaya pencegahan korupsi,
        reformasi birokrasi dan peningkatan kualitas pelayanan publik.
      </p>
      <br />
      <h6 className="text-center header">Reformasi Birokrasi (RB)</h6>
      <p className="text-center sub-header text-[#0B588F]">
        Adalah langkah penting untuk menciptakan perbaikan dalam tata kelola
        pemerintahan, yang merupakan fondasi utama bagi pembangunan nasional.
        Proses ini melibatkan upaya pembaharuan dan perubahan mendasar pada
        sistem pemerintahan guna mewujudkan prinsip-prinsip tata kelola yang
        baik, atau yang dikenal sebagai good governance.
      </p>
      <br />
      <img
        src="/image/wbk.png"
        alt="Wilayah Bebas Korupsi"
        style={{ height: "15%", width: "15%" }}
        className="mx-auto"
      />
      <p className="text-justify sub-header">
        &emsp; &emsp; BPS Kabupaten Sidoarjo Menerima Penghargaan Satker
        Predikat Wilayah Bebas dari Korupsi (WBK) dari Kementrian PAN-RB pada
        Senin, 20 Desember 2021. Setelah melalui beberapa kali Desk Evaluation
        (DE) WBK, tahun 2021 BPS Kabupaten Sidoarjo resmi menjadi satker dengan
        predikat WBK. WBK merupakan predikat yang diberikan kepada satuan kerja
        yang telah memenuhi kriteria tertentu sebagai bentuk pencegahan
        terjadinya korupsi, kolusi, dan nepotisme. Satker yang dinilai layak
        menyandang predikat WBK harus memenuhi 6 (enam) kriteria perubahan,
        antara lain: manajemen perubahan, penataan tata laksana, penataan sistem
        manajemen sumber daya manusia, penguatan pengawasan, dan penguatan
        akuntabilitas kinerja.
      </p>
    </div>
  );
};

export default ZIRB;
