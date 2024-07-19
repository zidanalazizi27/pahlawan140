import React from "react";
import FooterTitle from "./FooterTittle";
import FooterList from "./FooterList";
import {
  YouTube,
  Instagram,
  Facebook,
  Twitter,
  Room,
  Email,
  X,
  FacebookOutlined,
  FacebookRounded,
  FacebookSharp,
  FacebookTwoTone,
  Call,
} from "@mui/icons-material";

const medSos = [
  {
    icon: FacebookOutlined,
    href: "",
    text: "BPS 3515",
  },
  {
    icon: Instagram,
    href: "",
    text: "@bps.sidoarjo",
  },
  {
    icon: YouTube,
    href: "",
    text: "@BPS3515",
  },
];

const contacts = [
  {
    icon: Room,
    href: "https://maps.app.goo.gl/4dMALXhFKqJ952D78/",
    text: "Jl. Pahlawan No 140 Sidoarjo",
  },
  {
    icon: Call,
    text: "(031)8941744",
  },
  {
    icon: Email,
    href: "mailto:bps3515@bps.go.id",
    text: "bps3515@bps.go.id",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-base text-pdarkblue md:h-60 flex md:flex-around flex-col md:flex-row overflow-hidden md:items-center p-5 md:p-0"
    >
      <div className="flex flex-col justify-center items-center md:w-4/12 mb-5 md:my-0">
        <div className="flex items-center">
          <img alt="logo" src="/image/logo.png" width={120} height={120} />

          {/* Divider here */}
          <div className="w-[6px] rounded-full h-24 bg-pdarkblue mx-4"></div>

          <p className="block text-2xl">
            <b>BPS</b> <span className="block">Kabupaten</span>{" "}
            <span className="block">
              <b>Sidoarjo</b>
            </span>
          </p>
        </div>

        <p className="whitespace-pre-wrap w-42 md:text-left ml-6 text-lg text-pdarkblue mt-5 z-40">
          <b>
            <span className="mr-2">&#169;</span>BPS Sidoarjo 2024
          </b>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-9/12 mx-auto">
        <div>
          <FooterTitle title="Media Sosial" />
          <FooterList items={medSos} />
        </div>
        <div>
          <FooterTitle title="Kontak Kami" />
          <FooterList items={contacts} />
        </div>
      </div>

      <div className="hidden md:block absolute right-0 bottom-0">
        <img src="/image/pattern.png" width={140} height={140} />
      </div>

      <div className="hidden md:block absolute left-0 bottom-0">
        <img
          src="/image/pattern.png"
          width={140}
          height={140}
          style={{ transform: "scaleX(-1)" }}
        />
      </div>
    </footer>
  );
}
