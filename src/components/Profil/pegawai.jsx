import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Pegawai() {
  const list = [
    {
      title: "Kepala BPS Kabupaten Sidoarjo",
      img: "/image/pegawai/KepalaBPS.png",
      price: "Mohamad Isma'il S.Si, M.Ec.Dev",
    },
    // {
    //   title: "Kepala Bagian Umum",
    //   img: "/image/pegawai/Hanifah.png",
    //   price: "Anggie Dian Pratiwi SST, M.Ec.Dev",
    // },
    // {
    //   title: "",
    //   img: "/image/pegawai/profil4.png",
    //   price: "",
    // },
    // {
    //   title: "Lemon",
    //   img: "/image/pegawai/fruit-4.jpeg",
    //   price: "$5.30",
    // },
    // {
    //   title: "Avocado",
    //   img: "/image/pegawai/fruit-5.jpeg",
    //   price: "$15.70",
    // },
    // {
    //   title: "Lemon 2",
    //   img: "/images/fruit-6.jpeg",
    //   price: "$8.00",
    // },
    // {
    //   title: "Banana",
    //   img: "/images/fruit-7.jpeg",
    //   price: "$7.50",
    // },
    // {
    //   title: "Watermelon",
    //   img: "/images/fruit-8.jpeg",
    //   price: "$12.20",
    // },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              height="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between text-center">
            <p className="mx-auto">
              <b>{item.title}</b><br />
              <span className="text-default-500">{item.price}</span>
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
