import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
} from "./Icon.jsx";

export default function NavbarCustom() {
  const [activeMenu, setActiveMenu] = useState('');
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const getMenuClasses = (menu) => {
    return activeMenu === menu
      ? 'font-bold font-inter text-white bg-pdarkblue py-2 px-4 rounded-full transition-colors duration-100'
      : 'font-bold font-inter text-pdarkblue transition-colors duration-100';
  };

  return (
    <Navbar className='bg-base'>
      <NavbarBrand>
        <img
          src="https://www.bps.go.id/_next/image?url=%2Fassets%2Flogo-bps.png&w=1080&q=75"
          alt="BPS Logo"
          width={48}
          height={48}
        />
        <p className="font-bold font-inter italic text-[18px] text-pdarkblue ml-3">
          BPS KABUPATEN SIDOARJO
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className={getMenuClasses('Beranda')} onClick={() => handleMenuClick('Beranda')}>
            Beranda
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className={getMenuClasses('MyOffice')} onClick={() => handleMenuClick('MyOffice')}>
            MyOffice
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className={getMenuClasses('ZI-RB')} onClick={() => handleMenuClick('ZI-RB')}>
            ZI-RB
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={getMenuClasses('MitraQita') + " p-0 bg-transparent data-[hover=true]:bg-transparent"}
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                MitraQita
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[150px] font-inter text-pdarkblue"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem className="font-bold" key="daftarmitra">
              <p className="font-bold">Daftar Mitra 2024</p>
            </DropdownItem>
            <DropdownItem className="font-bold" key="sobat">
              <p className="font-bold">Aplikasi Sobat</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={getMenuClasses('Aduan') + " p-0 bg-transparent data-[hover=true]:bg-transparent"}
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Aduan
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[180px] font-inter text-pdarkblue"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem className="font-bold" key="pengaduan">
              <p className="font-bold">Pengaduan</p>
            </DropdownItem>
            <DropdownItem className="font-bold" key="whitle">
              <p className="font-bold">Whitle Blowing System</p>
            </DropdownItem>
            <DropdownItem className="font-bold" key="gratifikasi">
              <p className="font-bold">Gratifikasi</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
