import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu2Fill } from "react-icons/ri";

import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="z-10 w-full">
      <div className="flex items-center justify-between px-4 py-6 font-fira lg:justify-between">
        <div className="flex items-center justify-center gap-4 justify-self-start text-2xl text-primary">
          <img src="./logo.svg" alt="logo" />
          <span>Moonex</span>
        </div>
        <ul className="hidden text-[16px] font-medium lg:flex lg:gap-20">
          <li>
            <a href="#about">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#program">Roadmap</a>
          </li>
          <li>
            <a href="#form">FAQ</a>
          </li>
          <li>
            <a href="#form">Contact Us</a>
          </li>
        </ul>
        <div className="hidden lg:block">
          <Button>Connect Wallet</Button>
        </div>

        <div className="z-50 md:block lg:hidden">
          <button className="text-3xl" onClick={() => setIsOpen((s) => !s)}>
            {!isOpen ? <GrClose /> : <RiMenu2Fill />}
          </button>
          {!isOpen && (
            <div className="absolute right-0 top-0 z-20 h-lvh w-full bg-primary">
              <ul
                onClick={(e) => {
                  setIsOpen((s) => !s);
                }}
                className="flex h-full w-full flex-col items-center justify-center gap-6"
              >
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#program">Program</a>
                </li>
                <li>
                  <a href="#form">Contact</a>
                </li>
                <li>
                  <button
                    className="rounded-md border-2 border-solid border-black px-8 py-3"
                    href="#form"
                  >
                    Be a Donor
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
