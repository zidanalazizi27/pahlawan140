import React from "react";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const Daftar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/image/bg_am.png')", backgroundSize: 'cover' }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md p-8 mt-10 bg-white shadow-md rounded-xl md:max-w-lg" style={{ marginTop: '120px', marginBottom: '60px' }}>
        <div className="flex flex-col items-center mb-8">
          <img
            src="/image/logo_am.png"
            alt="Logo"
            className="w-20 h-55 mb-3 md:w-30 md:h-50"
          />
          <p className="text-lg font-bold font-inter md:text-xl">
            REGISTRASI AKUN MAGANG
          </p>
          <p className="text-sm font-semibold tracking-wider text-gray-500 font-assistant">
            AYO MAGANG
          </p>
        </div>
        <form className="flex flex-col w-full gap-4 font-quicksand">
          <Input
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap anda"
            type="text"
            classNames={{
              label: "text-black text-base md:text-lg mt-[5px] font-nunito font-bold",
              inputWrapper: "bg-slate-100",
            }}
            isClearable
          />
          <Input
            label="Perguruan Tinggi"
            placeholder="Cth: Universitas Indonesia"
            type="text"
            classNames={{
              label: "text-black text-base md:text-lg mt-[5px] font-nunito font-bold",
              inputWrapper: "bg-slate-100",
            }}
            isClearable
          />
          <Input
            label="Program Studi"
            placeholder="Cth: S1 Ilmu Hukum"
            type="text"
            classNames={{
              label: "text-black text-base md:text-lg mt-[5px] font-nunito font-bold",
              inputWrapper: "bg-slate-100",
            }}
            isClearable
          />
          <Input
            label="E-mail Aktif (Untuk Verifikasi Akun)"
            placeholder="Cth: email@gmail.com"
            type="email"
            classNames={{
              label: "text-black text-base md:text-lg mt-[5px] font-nunito font-bold",
              inputWrapper: "bg-slate-100",
            }}
            isClearable
          />
          <Input
            label="Nomor Telepon (Whatsapp Aktif)"
            placeholder="Cth: 085608389667"
            type="tel"
            classNames={{
              label: "text-black text-base md:text-lg mt-[5px] font-nunito font-bold",
              inputWrapper: "bg-slate-100",
            }}
            isClearable
          />
          <Input
            label="Kata Sandi"
            placeholder="Masukkan kata sandi anda"
            type="password"
            classNames={{
              label: "text-black text-base md:text-lg mt-[5px] font-nunito font-bold",
              inputWrapper: "bg-slate-100",
            }}
            isClearable
          />
          <div className="flex justify-center">
            <Button
              className="w-full font-bold font-nunito bg-[#0B588F] text-white"
              onClick={onOpen}
            >
              Daftar Akun Magang
            </Button>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-sm text-gray-500 font-assistant">
            Sudah memiliki akun magang?{" "}
            <Link to="/masukam" className="text-[#0B588F]">
              Masuk di sini.
            </Link>
          </p>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Konfirmasi Pendaftaran
              </ModalHeader>
              <ModalBody>
                <p>
                  Apakah Anda yakin ingin mendaftar akun magang dengan informasi yang telah diisi?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Tidak
                </Button>
                <Button color="primary" onPress={() => window.location.href = '/berhasildaftar'}>
                  Yakin
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Daftar;