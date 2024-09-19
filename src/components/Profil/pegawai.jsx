import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

export default function Pegawai() {
  const list = [
    {
      img: "/image/Pegawai/ksg.png"
    },
    {
      img: "/image/Pegawai/Ismail.png",
      title: "Ismail"
    },
    {
      img: "/image/Pegawai/Yayuk.png",
      title: "Yayuk"
    },
    {
      img: "/image/Pegawai/ksg.png"
    },
    {
      img: "/image/Pegawai/Anggie.png",
      title: "Anggie"
    },
    {
      img: "/image/Pegawai/Chandra.png",
      title: "Chandra"
    },
    {
      img: "/image/Pegawai/Eka.png",
      title: "Eka"
    },
    {
      img: "/image/Pegawai/Febri.png",
      title: "Febri"
    },
    {
      img: "/image/Pegawai/Indra.png",
      title: "Indra"
    },
    {
      img: "/image/Pegawai/Kristin.png",
      title: "Kristin"
    },
    {
      img: "/image/Pegawai/Lukmi.png",
      title: "Lukmi"
    },
    {
      img: "/image/Pegawai/Maserul.png",
      title: "Maserul"
    },
    {
      img: "/image/Pegawai/Mutia.png",
      title: "Mutia"
    },
    {
      img: "/image/Pegawai/Neli.png",
      title: "Neli"
    },
    {
      img: "/image/Pegawai/Uus.png",
      title: "Uus"
    },
    {
      img: "/image/Pegawai/Yuli.png",
      title: "Yuli"
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {list.map((item, index) => (
        <Card
          key={index}
          className="mx-auto"
          css={{
            width: '100%',      
            height: 'auto',      
            aspectRatio: '1/1'  
          }}
        >
          <CardBody className="p-0">
            <Image
              radius="lg"
              objectFit="cover"
              alt={item.title || 'Image without title'}
              className="w-full h-full object-cover"
              src={item.img}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}