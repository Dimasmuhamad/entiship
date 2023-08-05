import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Cta from "components/cta1";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);
  return (
    <header className="max-w-full lg:max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="w-36">
          <img src="logo.svg" alt="EntiShift" />
        </div>

        <button
          className={[
            "w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50",
            menu ? "text-white fixed right-4" : "relative text-inherit",
          ]}
          onClick={toggleMenu}
        >
          <span className="material-symbols-outlined">
            {menu ? "close" : "menu"}
          </span>
        </button>

        <div
          className={[
            "lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20",
            menu
              ? "flex items-centerjustify-center h-screen w-full inset-0 opacity-100 visible fixed"
              : "hidden opacity-0 h-0 invisible",
          ]}
        >
          <ul className="flex items-center">
            <li className="">
              <Link href="/home" legacyBehavior>
                <a className="px-9 text-gray-900">Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/fitur" legacyBehavior>
                <a className="px-9 text-gray-900">Fitur</a>
              </Link>
            </li>
            <li className="">
              <Link href="/home" legacyBehavior>
                <a className="px-9 text-gray-900">Harga</a>
              </Link>
            </li>
            <li className="">
              <Link href="/tentang-kami" legacyBehavior>
                <a className="px-9 text-gray-900">Tentang Kami</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-auto">
          <ul className="flex items-center">
            <li className="">
              <Cta />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
