import React from "react";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Masuk = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/image/bg_am.png')", backgroundSize: 'cover' }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-sm p-8 m-5 bg-white shadow-md rounded-xl md:max-w-md" style = {{ marginTop: '80px' }}>
        <div className="flex flex-col items-center mb-8">
          <img
            src="/image/logo_am.png"
            alt="Logo"
            className="w-20 h-55 mb-3 md:w-30 md:h-50"
          />
          <p className="text-lg font-bold font-inter md:text-xl">
            MASUK
          </p>
          <p className="text-sm font-semibold tracking-wider text-gray-500 font-assistant">
            AYO MAGANG
          </p>
        </div>
        <form className="flex flex-col w-full gap-4 font-quicksand">
          <Input
            label="E-mail"
            placeholder="Masukkan e-mail anda"
            type="text"
            classNames={{
              label:
                "text-black text-base md:text-lg mt-[5px] font-nunito font-bold",
              inputWrapper: "bg-slate-100",
            }}
            isClearable
          />
          <Input
            label="Kata Sandi"
            placeholder="Masukkan kata sandi anda"
            type="password"
            classNames={{
              label:
                "text-black text-base md:text-lg mt-1 font-nunito font-bold",
              inputWrapper: "bg-slate-100",
            }}
            isClearable
          />
          <div className="flex justify-center">
            <Button className="w-full font-bold font-nunito bg-[#0B588F] text-white">
              <Link to="/berandamasuk" className="w-full">
                Masuk
              </Link>
            </Button>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-sm text-gray-500 font-assistant">
            Belum memiliki akun magang?{" "}
            <Link to="/daftaram" className="text-[#0B588F]">
              Daftar di sini.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Masuk;