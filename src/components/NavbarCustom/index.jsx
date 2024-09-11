import React, { useEffect, useState } from "react";
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
import { useLocation, Link as RouterLink } from "react-router-dom";
import { IoLogIn, IoLogOut } from "react-icons/io5";

export default function NavbarCustom() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  useEffect(() => {
    const path = location.pathname;
    const loginSuccess = localStorage.getItem("loginSuccess");
    const role = localStorage.getItem("userRole");
    setIsLoggedIn(loginSuccess === "true");
    setUserRole(role);

    if (path === "/") setActiveMenu("Beranda");
    else if (path === "/myoffice") setActiveMenu("MyOffice");
    else if (path === "/temanluki") setActiveMenu("Teman Luki");
    else if (path === "/ruangbaca") setActiveMenu("Ruang Baca");
    else if (path === "/zi-rb") setActiveMenu("ZI-RB");
    else if (path.startsWith("/mitraqita")) setActiveMenu("MitraQita");
    else if (path === "/aduan") setActiveMenu("Aduan");
  }, [location]);

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
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={
                  getMenuClasses("Beranda") +
                  " p-0 bg-transparent data-[hover=true]:bg-transparent font-inter text-pdarkblue"
                }
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                <RouterLink to="/" className={getMenuClasses("Beranda")}>
                  Beranda
                </RouterLink>
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
            <DropdownItem className="font-bold" key="profil">
              <RouterLink to="/profil" className={getMenuClasses("Profil")}>
                <p className="font-semibold text-[14px] font-inter">Profil</p>
              </RouterLink>
            </DropdownItem>
            <DropdownItem className="font-bold" key="berita">
              <RouterLink to="/berita" className={getMenuClasses("Berita")}>
                <p className="font-semibold text-[14px] font-inter">Berita</p>
              </RouterLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="hidden lg:flex">
          <RouterLink to="/temanluki" className={getMenuClasses("Teman Luki")}>
            Teman Luki
          </RouterLink>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <RouterLink to="/ruangbaca" className={getMenuClasses("Ruang Baca")}>
            Ruang Baca
          </RouterLink>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <RouterLink to="/aduan" className={getMenuClasses("Aduan")}>
            Aduan
          </RouterLink>
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
                ZI-RB
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[210px] font-inter text-pdarkblue"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem className="font-bold" key="berita">
              <a href="https://rb.bps.go.id/">
                <p className="font-semibold text-[14px] font-inter">BPS RI</p>
              </a>
            </DropdownItem>
            <DropdownItem className="font-bold" key="sobat">
              <p className="font-semibold text-[14px] font-inter">
                <RouterLink to="/zi-rb" className={getMenuClasses("Berita")}>
                  BPS Kabupaten Sidoarjo
                </RouterLink>
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
              <a href="https://mitra.bps.go.id/registrasi">
                <p className="font-semibold text-[14px] font-inter">
                  Daftar Mitra 2024
                </p>
              </a>
            </DropdownItem>
            <DropdownItem className="font-bold" key="sobat">
              <a href="https://mitra.bps.go.id/login">
                <p className="font-semibold text-[14px] font-inter">
                  Aplikasi Sobat
                </p>
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="hidden lg:flex">
          <RouterLink to="/myoffice" className={getMenuClasses("MyOffice")}>
            MyOffice
          </RouterLink>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <RouterLink
            to={isLoggedIn && userRole === "admin" ? "/dashboard" : "/login"}
            className={getMenuClasses(isLoggedIn ? "Logout" : "Login")}
          >
            {isLoggedIn ? <IoLogOut size={36} /> : <IoLogIn size={36} />}
          </RouterLink>
        </NavbarItem>
      </NavbarContent>

      {/* small screen */}

      <NavbarMenu>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={
                  getMenuClasses("Beranda") +
                  " p-0 bg-transparent data-[hover=true]:bg-transparent font-inter text-pdarkblue"
                }
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                <RouterLink to="/" className={getMenuClasses("Beranda")}>
                  Beranda
                </RouterLink>
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
            <DropdownItem className="font-bold" key="profil">
              <RouterLink to="/profil" className={getMenuClasses("Profil")}>
                <p className="font-semibold text-[14px] font-inter">Profil</p>
              </RouterLink>
            </DropdownItem>
            <DropdownItem className="font-bold" key="berita">
              <RouterLink to="/berita" className={getMenuClasses("Berita")}>
                <p className="font-semibold text-[14px] font-inter">Berita</p>
              </RouterLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarMenuItem className="lg:flex">
          <RouterLink to="/temanluki" className={getMenuClasses("Teman Luki")}>
            Teman Luki
          </RouterLink>
        </NavbarMenuItem>
        <NavbarMenuItem className="lg:flex">
          <RouterLink to="/ruangbaca" className={getMenuClasses("Ruang Baca")}>
            Ruang Baca
          </RouterLink>
        </NavbarMenuItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={
                  getMenuClasses("ZI-RB") +
                  " p-0 bg-transparent text-left data-[hover=true]:bg-transparent font-inter"
                }
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                ZI-RB
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[210px] font-inter text-pdarkblue"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem className="font-bold" key="berita">
              <a href="https://rb.bps.go.id/">
                <p className="font-semibold text-[14px] font-inter">BPS RI</p>
              </a>
            </DropdownItem>
            <DropdownItem className="font-bold" key="sobat">
              <p className="font-semibold text-[14px] font-inter">
                <RouterLink to="/zi-rb" className={getMenuClasses("Berita")}>
                  BPS Kabupaten Sidoarjo
                </RouterLink>
              </p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="hidden lg:flex">
          <RouterLink to="/aduan" className={getMenuClasses("Aduan")}>
            Aduan
          </RouterLink>
        </NavbarItem>
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
              <a href="https://mitra.bps.go.id/registrasi">
                <p className="font-semibold text-[14px] font-inter">
                  Daftar Mitra 2024
                </p>
              </a>
            </DropdownItem>
            <DropdownItem className="font-bold" key="sobat">
              <a href="https://mitra.bps.go.id/login">
                <p className="font-semibold text-[14px] font-inter">
                  Aplikasi Sobat
                </p>
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarMenuItem className="lg:flex">
          <RouterLink to="/myoffice" className={getMenuClasses("MyOffice")}>
            MyOffice
          </RouterLink>
        </NavbarMenuItem>
        <NavbarItem className="hidden lg:flex">
          <RouterLink
            to={isLoggedIn && userRole === "admin" ? "/dashboard" : "/login"}
            className={getMenuClasses(isLoggedIn ? "Logout" : "Login")}
          >
            {isLoggedIn ? <IoLogOut size={36} /> : <IoLogIn size={36} />}
          </RouterLink>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
