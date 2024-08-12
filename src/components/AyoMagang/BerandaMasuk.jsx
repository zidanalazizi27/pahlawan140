import React from 'react';
import { Button } from '@nextui-org/react';
import urang from '/image/Urang.png';
import { Link } from 'react-router-dom';

const Beranda = () => {
  return (
    <div style={{ padding: '80px 20px 20px' }}>
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
          <img src={urang} alt="Urang" style={{ maxWidth: '300px', marginRight: '40px' }} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          backgroundColor: '#13466A',
          padding: '10px 20px',
          borderRadius: '10px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          color: 'white',
          justifyContent: 'space-between',
          width: '35%',
        }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <h3 style={{ fontSize: '2rem', margin: 0, fontFamily: 'Inter, sans-serif' }}>6</h3>
            <p style={{ fontSize: '1rem', margin: 0 }}>pendaftar</p>
          </div>
          <div style={{
            height: '40px',
            width: '1px',
            backgroundColor: 'white',
            margin: '0 10px',
            alignSelf: 'center'
          }}></div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <h3 style={{ fontSize: '2rem', margin: 0, fontFamily: 'Inter, sans-serif' }}>9</h3>
            <p style={{ fontSize: '1rem', margin: 0 }}>magang aktif</p>
          </div>
          <div style={{
            height: '40px',
            width: '1px',
            backgroundColor: 'white',
            margin: '0 10px',
            alignSelf: 'center'
          }}></div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <h3 style={{ fontSize: '2rem', margin: 0, fontFamily: 'Inter, sans-serif' }}>12</h3>
            <p style={{ fontSize: '1rem', margin: 0 }}>kuota</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '80px' }}>
        <h2 className="font-semibold" style={{ textAlign: 'center', fontSize: '1.4rem', margin: 0 }}>Tahapan Pendaftaran Magang</h2>
        <p style={{ textAlign: 'center', fontSize: '1rem', margin: '8px 0' }}>
          Berikut merupakan alur pendaftaran magang BPS Kabupaten Sidoarjo
        </p>
      </div>
      <div style={{
        backgroundColor: '#F0F0F0',
        padding: '50px',
        borderRadius: '10px',
        marginTop: '50px',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '30px 0',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            height: '2px',
            backgroundColor: '#26AAE1',
            transform: 'translateY(-50%)'
          }}></div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            margin: '0 20px'
          }}>
            <div style={{
              backgroundColor: '#EB891B',
              color: 'white',
              borderRadius: '50%',
              padding: '10px',
              width: '30px',
              height: '30px',
              display: 'flex',
              marginTop: '90px',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1
            }}>1</div>
            <div style={{
              backgroundColor: '#68B92E',
              borderRadius: '10px',
              padding: '10px',
              color: 'white',
              marginTop: '20px',
              textAlign: 'center',
              maxWidth: '600px'
            }}>
              <p style={{ margin: 0 }}>Registrasi & masuk akun Ayo Magang!</p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            margin: '0 20px'
          }}>
            <div style={{
              backgroundColor: '#EB891B',
              color: 'white',
              borderRadius: '50%',
              padding: '10px',
              width: '30px',
              height: '30px',
              display: 'flex',
              marginTop: '-15px',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1
            }}>2</div>
            <div style={{
              backgroundColor: '#68B92E',
              borderRadius: '10px',
              padding: '10px',
              color: 'white',
              marginTop: '-120px',
              textAlign: 'center',
              maxWidth: '600px'
            }}>
              <p style={{ margin: 0 }}>Isi dan lengkapi data yang diperlukan pada formulir</p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            margin: '0 20px'
          }}>
            <div style={{
              backgroundColor: '#EB891B',
              color: 'white',
              borderRadius: '50%',
              padding: '10px',
              width: '30px',
              height: '30px',
              display: 'flex',
              marginTop: '90px',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1
            }}>3</div>
            <div style={{
              backgroundColor: '#68B92E',
              borderRadius: '10px',
              padding: '10px',
              color: 'white',
              marginTop: '20px',
              textAlign: 'center',
              maxWidth: '600px'
            }}>
              <p style={{ margin: 0 }}>Unggah berkas-berkas pendukung seperti Surat Pengantar atau Proposal Magang (jika diperlukan)</p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            margin: '0 20px'
          }}>
            <div style={{
              backgroundColor: '#EB891B',
              color: 'white',
              borderRadius: '50%',
              padding: '10px',
              width: '30px',
              height: '30px',
              display: 'flex',
              marginTop: '-15px',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1
            }}>4</div>
            <div style={{
              backgroundColor: '#68B92E',
              borderRadius: '10px',
              padding: '10px',
              color: 'white',
              marginTop: '-120px',
              textAlign: 'center',
              maxWidth: '600px'
            }}>
              <p style={{ margin: 0 }}>Pastikan data diisi dengan baik dan benar, kemudian kirim data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;