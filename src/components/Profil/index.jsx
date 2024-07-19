import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState('Informasi Umum BPS');

  const menuItems = [
    'Informasi Umum BPS',
    'Visi dan Misi BPS',
    'Core Value',
    'Struktur Organisasi',
    'Profil Pejabat BPS',
    'Alamat dan Kontak BPS'
  ];

  const content = {
    'Informasi Umum BPS': 'Konten Informasi Umum BPS',
    'Visi dan Misi BPS': (
      <div>
        <p className="text-slate-600 text-base text-justify">
          Dengan mempertimbangkan capaian kinerja, memperhatikan aspirasi masyarakat, potensi dan permasalahan, serta
          mewujudkan Visi Presiden dan Misi Presiden maka Visi Badan Pusat Statistik untuk tahun 2020-2024 adalah:
        </p>
        <p className='text-center font-bold'>"Penyedia Data Statistik Berkualitas untuk Indonesia Maju" <br></br>
        <div className='italic font-medium'>(Provider of Qualified Statistical Data for Advanced Indonesia)</div>
        </p>
        <p className='text-slate-600'>
        Misi:            
        </p>
        <ul className="text-slate-600 list-disc list-inside mt-2">
          <li>Menyediakan statistik berkualitas yang berstandar nasional dan internasional</li>
          <li>Memenuhi KLN (Kebutuhan Layanan Nasional) melalui Sistem Statistik Nasional yang berkesinambungan</li>
          <li>Mewujudkan pelayanan prima di bidang statistik untuk terwujudnya Sistem Statistik Nasional</li>
          <li>Membangun SDM yang unggul dan adaptif berlandaskan nilai profesionalisme, integritas dan amanah</li>
        </ul>
      </div>
    ),
    'Core Value': 'Konten Core Value',
    'Struktur Organisasi': 'Konten Struktur Organisasi',
    'Profil Pejabat BPS': 'Konten Profil Pejabat BPS',
    'Alamat dan Kontak BPS': (
    <p>
        <b>Badan Pusat Statistik Kabupaten Sidoarjo</b><br></br>
        Jl. Pahlawan 140, Lemahputro, Sidoarjo<br></br>
        Telepon: (031) 8946473<br></br>
        Email: bps3515@bps.go.id<br></br>
        Website: sidoarjokab.bps.go.id
    </p>
    )
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-4 text-pdarkblue" style={{ marginTop: "5%" }}> Profil BPS</h2>
      <p className="text-sm mb-5 from-neutral-600">Baca informasi terbaru seputar kegiatan dan layanan dari BPS Kabupaten Sidoarjo</p>
      <div className="flex flex-col lg:flex-row h-screen lg:h-auto">
        <div className="lg:w-1/4 bg-white p-4 pl-0 lg:border-r lg:border-gray-300">
          <ul>
            {menuItems.map(item => (
              <li
                key={item}
                onClick={() => setSelectedMenu(item)}
                className={`p-2 mb-2 cursor-pointer rounded-md ${
                  selectedMenu === item ? 'bg-pdarkblue text-white' : 'bg-white text-pdarkblue'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-3/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-pdarkblue font-bold mb-2">{selectedMenu}</h2>
            {/* Uncomment and customize the button as needed */}
            {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-full">Selengkapnya</button> */}
          </div>
          <div>{content[selectedMenu]}</div>
        </div>
      </div>
    </>
  );
};

export default App;
