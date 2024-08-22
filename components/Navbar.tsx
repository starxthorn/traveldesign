"use client";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./Siderbar";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="relative w-full">
        <nav className="px-8 lg:px-40 py-6 flex items-center justify-between">
          <div>
            <Image
              src={"/assets/hilink-logo.svg"}
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <ul className="lg:flex hidden items-center justify-center gap-12">
            {NAV_LINKS?.map((item) => {
              return (
                <>
                  <li className="cursor-pointer text-lg font-medium hover:tracking-wide transition-all">
                    {item.label}
                  </li>
                </>
              );
            })}
          </ul>
          <div>
            <Button styles="lg:flex hidden items-center justify-center gap-3 bg-black text-white rounded-full px-8 py-4 font-medium text-lg">
              <Image
                src={"/assets/user.svg"}
                width={25}
                height={20}
                alt="user"
              />
              Login
            </Button>
          </div>
          <Image
            className="lg:hidden block cursor-pointer"
            src={"/assets/menu.png"}
            width={30}
            height={20}
            alt="menu"
            onClick={() => setMenu(true)}
          />
        </nav>
      </header>
      {menu && <Sidebar isMenu={setMenu} />}
    </>
  );
}
