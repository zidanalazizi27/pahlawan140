import React, { useState } from "react";
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
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ChevronDown } from "./Icon.jsx";

export default function NavbarCustom() {
  const [activeMenu, setActiveMenu] = useState("Beranda");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const getMenuClasses = (menu) => {
    return activeMenu === menu
      ? "font-bold font-inter text-[14px] text-white bg-pdarkblue py-2 px-4 rounded-full transition-colors duration-100"
      : "font-bold font-inter text-[14px] text-pdarkblue transition-colors duration-100";
  };

  return (
    <Navbar className="absolute bg-base">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src="https://www.bps.go.id/_next/image?url=%2Fassets%2Flogo-bps.png&w=1080&q=75"
            alt="BPS Logo"
            width={48}
            height={48}
          />
          <p className="font-[800] font-inter italic text-[14px] sm:text-[18px] text-pdarkblue ml-3 block xs:inline-block">
            BPS KABUPATEN <br className="xs:hidden" />
            SIDOARJO
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            className={getMenuClasses("Beranda")}
            onClick={() => handleMenuClick("Beranda")}
          >
            Beranda
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            href="/myoffice"
            className={getMenuClasses("MyOffice")}
            onClick={() => handleMenuClick("MyOffice")}
          >
            MyOffice
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            className={getMenuClasses("Teman Luki")}
            onClick={() => handleMenuClick("Teman Luki")}
          >
            Teman Luki
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            className={getMenuClasses("Ruang Baca")}
            onClick={() => handleMenuClick("Ruang Baca")}
          >
            Ruang Baca
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            className={getMenuClasses("ZI-RB")}
            onClick={() => handleMenuClick("ZI-RB")}
          >
            ZI-RB
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={
                  getMenuClasses("MitraQita") +
                  " p-0 bg-transparent data-[hover=true]:bg-transparent font-inter"
                }
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
              <p className="font-semibold text-[14px] font-inter">
                Daftar Mitra 2024
              </p>
            </DropdownItem>
            <DropdownItem className="font-bold" key="sobat">
              <p className="font-semibold text-[14px] font-inter">
                Aplikasi Sobat
              </p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={
                  getMenuClasses("Aduan") +
                  " p-0 bg-transparent data-[hover=true]:bg-transparent font-inter"
                }
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
              <p className="font-semibold text-[14px] font-inter">Pengaduan</p>
            </DropdownItem>
            <DropdownItem className="font-bold" key="whitle">
              <p className="font-semibold text-[14px] font-inter">
                Whistle Blowing System
              </p>
            </DropdownItem>
            <DropdownItem className="font-bold" key="gratifikasi">
              <p className="font-semibold text-[14px] font-inter">
                Gratifikasi
              </p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem className="lg:flex">
          <Link
            href="#"
            className={getMenuClasses("Beranda")}
            onClick={() => handleMenuClick("Beranda")}
          >
            Beranda
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="lg:flex">
          <Link
            href="/myoffice"
            className={getMenuClasses("MyOffice")}
            onClick={() => handleMenuClick("MyOffice")}
          >
            MyOffice
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="lg:flex">
          <Link
            href="#"
            className={getMenuClasses("Teman Luki")}
            onClick={() => handleMenuClick("Teman Luki")}
          >
            Teman Luki
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="lg:flex">
          <Link
            href="#"
            className={getMenuClasses("Ruang Baca")}
            onClick={() => handleMenuClick("Ruang Baca")}
          >
            Ruang Baca
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="lg:flex">
          <Link
            href="#"
            className={getMenuClasses("ZI-RB")}
            onClick={() => handleMenuClick("ZI-RB")}
          >
            ZI-RB
          </Link>
        </NavbarMenuItem>
        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={
                  getMenuClasses("MitraQita") +
                  " p-0 bg-transparent data-[hover=true]:bg-transparent justify-between"
                }
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                MitraQita
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[150px] font-inter text-pdarkblue"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem className="font-bold" key="daftarmitra">
              <p className="font-semibold text-[14px] font-inter">
                Daftar Mitra 2024
              </p>
            </DropdownItem>
            <DropdownItem
              className="font-semibold text-[14px] font-inter"
              key="sobat"
            >
              <p className="font-semibold text-[14px] font-inter">
                Aplikasi Sobat
              </p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={
                  getMenuClasses("Aduan") +
                  " p-0 bg-transparent data-[hover=true]:bg-transparent justify-between"
                }
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Aduan
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[180px] font-inter text-pdarkblue"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem className="font-bold" key="pengaduan">
              <p className="font-semibold text-[14px] font-inter">Pengaduan</p>
            </DropdownItem>
            <DropdownItem
              className="font-semibold text-[14px] font-inter"
              key="whitle"
            >
              <p className="font-semibold text-[14px] font-inter">
                Whistle Blowing System
              </p>
            </DropdownItem>
            <DropdownItem
              className="font-semibold text-[14px] font-inter"
              key="gratifikasi"
            >
              <p className="font-semibold text-[14px] font-inter">
                Gratifikasi
              </p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarMenu>
    </Navbar>
  );
}
