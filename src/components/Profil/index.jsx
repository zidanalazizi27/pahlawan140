/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Pegawai from "./pegawai.jsx";

export default function ProfilBPS(){
  const [selectedMenu, setSelectedMenu] = useState("Informasi Umum BPS");

  const menuItems = [
    "Informasi Umum BPS",
    "Visi dan Misi BPS",
    "Core Value",
    "Struktur Organisasi",
    "Profil Pejabat BPS",
    "Alamat dan Kontak BPS",
  ];

  const content = {
    "Informasi Umum BPS": (
      <div className="text-[12px]">
        <p className="text-justify text-slate-600">
          Badan Pusat Statistik (BPS) adalah Lembaga Pemerintah Non Kementerian
          yang bertanggung jawab langsung kepada Presiden. Sebagai pengganti
          kedua UU tersebut ditetapkan UU Nomor 16 Tahun 1997 tentang Statistik.
          Berdasarkan UU ini yang ditindaklanjuti dengan peraturan perundangan
          dibawahnya, secara formal nama Biro Pusat Statistik diganti menjadi
          Badan Pusat Statistik.
        </p>
      </div>
    ),
    "Visi dan Misi BPS": (
      <div className="text-[12px]">
        <p className="text-justify text-slate-600">
          Dengan mempertimbangkan capaian kinerja, memperhatikan aspirasi
          masyarakat, potensi dan permasalahan, serta mewujudkan Visi Presiden
          dan Misi Presiden maka Visi Badan Pusat Statistik untuk tahun
          2020-2024 adalah:
        </p>
        <p className="font-bold text-center">
          "Penyedia Data Statistik Berkualitas untuk Indonesia Maju" <br></br>
          <div className="italic font-medium">
            (Provider of Qualified Statistical Data for Advanced Indonesia)
          </div>
        </p>
        <p className="text-slate-600">Misi:</p>
        <ul className="mt-2 list-disc list-inside text-slate-600">
          <li>
            Menyediakan statistik berkualitas yang berstandar nasional dan
            internasional
          </li>
          <li>
            Memenuhi KLN (Kebutuhan Layanan Nasional) melalui Sistem Statistik
            Nasional yang berkesinambungan
          </li>
          <li>
            Mewujudkan pelayanan prima di bidang statistik untuk terwujudnya
            Sistem Statistik Nasional
          </li>
          <li>
            Membangun SDM yang unggul dan adaptif berlandaskan nilai
            profesionalisme, integritas dan amanah
          </li>
        </ul>
      </div>
    ),
    "Core Value": "",
    "Struktur Organisasi": "",
    "Profil Pejabat BPS": (
      <Pegawai />
    ),
    "Alamat dan Kontak BPS": (
      <p className="text-[12px]">
        <b>Badan Pusat Statistik Kabupaten Sidoarjo</b>
        <br></br>
        Jl. Pahlawan 140, Lemahputro, Sidoarjo<br></br>
        Telepon: (031) 8946473<br></br>
        Email: bps3515@bps.go.id<br></br>
        Website: sidoarjokab.bps.go.id
      </p>
    ),
  };

  return (
    <>
      <h2
        className="mb-2 font-bold text-[20px] text-pdarkblue font-inter text-center"
        style={{ marginTop: "5%" }}
      >
        {" "}
        Profil BPS
      </h2>
      <p className="mb-8 text-[18px] text-pdarkblue font-assistant text-center">
        Baca informasi terbaru seputar kegiatan dan layanan dari BPS Kabupaten
        Sidoarjo
      </p>
      <div className="flex flex-col h-screen lg:flex-row lg:h-auto">
        <div className="p-4 pl-0 bg-white lg:w-1/4 lg:border-r lg:border-gray-300">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setSelectedMenu(item)}
                className={`p-2 mb-2 cursor-pointer text-[12px] font-semibold rounded-md ${
                  selectedMenu === item
                    ? "bg-pdarkblue text-white"
                    : "bg-white text-pdarkblue"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 lg:w-3/4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="mb-2 text-[12px] font-bold text-pdarkblue">
              {selectedMenu}
            </h2>
            {/* Uncomment and customize the button as needed */}
            {/* <button className="px-4 py-2 text-white bg-blue-600 rounded-full">Selengkapnya</button> */}
          </div>
          <div>{content[selectedMenu]}</div>
        </div>
      </div>
    </>
  );
};
