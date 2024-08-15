import React from "react";
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  const handleConfirm = () => {
    onOpenChange(false); // Close the modal
    navigate("/konfirmasi"); // Redirect to /konfirmasi
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/image/bg.svg')", backgroundSize: "cover" }}
    >
      <div
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg p-8 mt-10 bg-white shadow-md rounded-xl md:max-w-xl"
        style={{ marginTop: "120px", marginBottom: "60px" }}
      >
        <div className="flex flex-col items-center mb-8">
          <p className="text-lg font-semibold font-inter md:text-xl">
            Daftar Magang
          </p>
        </div>
        <form className="flex flex-col w-full gap-4 font-quicksand">
          <div className="flex gap-4">
            <Input
              label="NIM"
              placeholder="NIM"
              type="text"
              classNames={{
                label: "text-black text-sm md:text-base mt-[5px] font-nunito font-semibold",
                input: "text-black",
                inputWrapper: "bg-slate-100",
              }}
              isClearable
            />
            <Input
              label="Nama Lengkap"
              placeholder="Nama Lengkap"
              type="text"
              classNames={{
                label: "text-black text-sm md:text-base mt-[5px] font-nunito font-semibold",
                input: "text-black",
                inputWrapper: "bg-slate-100",
              }}
              isClearable
            />
          </div>
          <Input
            label="Nama Perguruan Tinggi"
            placeholder="Cth: Universitas Negeri Surabaya"
            type="text"
            classNames={{
              label: "text-black text-sm md:text-base mt-[5px] font-nunito font-semibold",
              inputWrapper: "bg-slate-100",
            }}
            isClearable
          />
          <div className="flex gap-4">
            <Input
              label="Fakultas/Jurusan"
              placeholder="Cth: Teknik"
              type="text"
              classNames={{
                label: "text-black text-sm md:text-base mt-[5px] font-nunito font-semibold",
                inputWrapper: "bg-slate-100",
              }}
              isClearable
            />
            <Input
              label="Program Studi"
              placeholder="Cth: S1 Teknik Informatika"
              type="text"
              classNames={{
                label: "text-black text-sm md:text-base mt-[5px] font-nunito font-semibold",
                inputWrapper: "bg-slate-100",
              }}
              isClearable
            />
          </div>
          <Input
            label="Nomor Telepon (Whatsapp Aktif)"
            placeholder="Cth: 085608389667"
            type="tel"
            classNames={{
              label: "text-black text-sm md:text-base mt-[5px] font-nunito font-semibold",
              inputWrapper: "bg-slate-100",
            }}
            isClearable
          />
          <div className="flex gap-4">
            <Input
              label="Waktu Mulai Magang"
              placeholder="Tanggal Mulai"
              type="date"
              classNames={{
                label: "text-black text-sm md:text-base mt-[5px] font-nunito font-semibold",
                inputWrapper: "bg-slate-100",
              }}
            />
            <Input
              label="Waktu Berakhir Magang"
              placeholder="Tanggal Mulai"
              type="date"
              classNames={{
                label: "text-black text-sm md:text-base mt-[5px] font-nunito font-semibold",
                inputWrapper: "bg-slate-100",
              }}
            />
          </div>
          <Input
            label="Unggah Dokumen"
            placeholder="Choose Files"
            type="file"
            multiple
            classNames={{
              label: "text-black text-xs md:text-sm mt-[5px] font-nunito font-semibold",
              inputWrapper: "bg-slate-100",
            }}
            helperText="Format file berupa PDF maksimal 5MB"
          />
          <div className="flex justify-center">
            <Button className="w-full font-semibold font-nunito bg-[#0B588F] text-white" onPress={onOpen}>
              Daftar Magang
            </Button>
          </div>
        </form>
      </div>
      <img
        src="/image/logo_am.png"
        alt="Logo"
        className="absolute bottom-0 right-0 w-30 h-40 m-5"
        style={{ marginRight: '70px' }}
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Konfirmasi</ModalHeader>
              <ModalBody>
                <p>Apakah Anda yakin dengan isian tersebut dan melakukan pendaftaran magang?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Tidak
                </Button>
                <Button color="primary" onPress={handleConfirm}>
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

export default Form;