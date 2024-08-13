import React from 'react';
import { Button } from '@nextui-org/react';
import urang from '/image/Urang.png';
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Beranda = () => {
  return (
    <div style={{ padding: '4rem 0px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0B588F',
        color: 'white',
        padding: '25px',
        borderRadius: '10px',
        position: 'relative'
      }}>
        <div style={{ marginLeft: '40px', marginRight: '40px' }}>
          <h1 className="font-bold italic" style={{ fontSize: '2rem', margin: 0 }}>Ayo Magang!</h1>
          <h2 className="font-semibold" style={{ fontSize: '1.5rem', margin: 0 }}>BPS Kabupaten Sidoarjo</h2>
          <p style={{ fontSize: '1rem', margin: '10px 0' }}>
            Sebuah platform yang memfasilitasi pengajuan magang bagi mahasiswa/i dari berbagai universitas atau perguruan tinggi untuk
            memperoleh pengalaman bekerja secara nyata di lingkungan
            instansi Badan Pusat Statistik Kabupaten Sidoarjo sebagai penyedia
            data statistik di Kabupaten Sidoarjo.
          </p>
          <Button
            auto
            style={{
              backgroundColor: '#EB891B',
              color: 'white',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <Link to="/formulir" style={{ color: 'inherit', textDecoration: 'none' }}>
              Daftar Magang
            </Link>
          </Button>
        </div>
        <div>
          <img src={urang} alt="Urang" style={{ maxWidth: '350px', marginRight: '40px' }} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '-65px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          backgroundColor: '#13466A',
          padding: '10px 15px',
          borderRadius: '15px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          color: 'white',
          justifyContent: 'space-between',
          width: '35%',
        }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <h3 style={{ fontSize: '2.5rem', margin: 0, fontFamily: 'Assistant, sans-serif', fontWeight: '600' }}>6</h3>
            <p style={{ fontSize: '1rem', margin: 0, fontFamily: 'Asisstant, sans-serif', fontWeight: 'normal'}}>pendaftar</p>
          </div>
          <div style={{
            height: '4rem',
            width: '1px',
            backgroundColor: 'white',
            margin: '0 7px',
            alignSelf: 'center'
          }}></div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <h3 style={{ fontSize: '2.5rem', margin: 0, fontFamily: 'Assistant, sans-serif', fontWeight: '600' }}>9</h3>
            <p style={{ fontSize: '1rem', margin: 0, fontFamily: 'Asisstant, sans-serif', fontWeight: 'normal'}}>magang aktif</p>
          </div>
          <div style={{
            height: '4rem',
            width: '1px',
            backgroundColor: 'white',
            margin: '0 7px',
            alignSelf: 'center'
          }}></div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <h3 style={{ fontSize: '2.5rem', margin: 0, fontFamily: 'Assistant, sans-serif', fontWeight: '600' }}>12</h3>
            <p style={{ fontSize: '1rem', margin: 0, fontFamily: 'Asisstant, sans-serif', fontWeight: 'normal' }}>kuota</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '80px' }}>
        <h2 className="font-bold font-assistant text-gray-600" style={{ textAlign: 'center', fontSize: '1.4rem', margin: 0 }}>Tahapan Pendaftaran Magang</h2>
        <p className="font-assistant text-gray-500" style={{ textAlign: 'center', fontSize: '1rem', margin: '8px 0' }}>
          Berikut merupakan alur pendaftaran magang BPS Kabupaten Sidoarjo
        </p>
      </div>
      <div className='w-full mt-5'>
        <VerticalTimeline lineColor='#0B588F'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(to right, #0B588F, #26AAE1)', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
            contentArrowStyle={{ borderRight: '7px solid #26AAE1' }}
            iconStyle={{ background: '#EB891B', color: '#fff' }}
            icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
              <text x="6" y="20" font-size="24" font-weight="semibold" fill="currentColor">1</text>
            </svg>
            }
          >
            <h3 className="vertical-timeline-element-title">Registrasi & masuk akun Ayo Magang!</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(to right, #0B588F, #26AAE1)', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
            contentArrowStyle={{ borderRight: '7px solid #0B588F' }}
            iconStyle={{ background: '#EB891B', color: '#fff' }}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <text x="5" y="20" font-size="24" font-weight="semibold" fill="currentColor">2</text>
              </svg>
            }
          >
            <h3 className="vertical-timeline-element-title">Isi dan lengkapi data yang diperlukan pada formulir</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(to right, #0B588F, #26AAE1)', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
            contentArrowStyle={{ borderRight: '7px solid #26AAE1' }}
            iconStyle={{ background: '#EB891B', color: '#fff' }}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <text x="4" y="20" font-size="24" font-weight="semibold" fill="currentColor">3</text>
              </svg>
            }
          >
            <h3 className="vertical-timeline-element-title">Unggah berkas-berkas pendukung seperti Surat Pengantar atau Proposal Magang, jika diperlukan</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(to right, #0B588F, #26AAE1)', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: '600' }}
            contentArrowStyle={{ borderRight: '7px solid #0B588F' }}
            iconStyle={{ background: '#EB891B', color: '#fff' }}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <text x="4" y="20" font-size="24" font-weight="semibold" fill="currentColor">4</text>
              </svg>
            } 
          >
            <h3 className="vertical-timeline-element-title">Pastikan semua data telah benar sebelum dikumpulkan</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      </div>
  );
};

export default Beranda;