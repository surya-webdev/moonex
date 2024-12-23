import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu2Fill } from "react-icons/ri";

import Button from "./Button";
import trigger from "../_helper/trigger";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="relative z-[400] w-full">
      <div className="flex items-center justify-between px-4 py-6 font-fira lg:justify-between">
        <div className="flex items-center justify-center gap-2 justify-self-start text-2xl text-primary">
          <img src="./logo.svg" alt="logo" />
          <span>Moonex</span>
        </div>
        <ul
          onClick={(e) => trigger(e)}
          className="hidden text-[16px] font-medium lg:flex lg:gap-20"
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#program">About</a>
          </li>
          <li>
            <a href="#feature">Roadmap</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#footer">Contact Us</a>
          </li>
        </ul>
        <div onClick={(e) => trigger(e)} className="hidden lg:block">
          <Button>Connect Wallet</Button>
        </div>

        <div className="z-[200] md:block lg:hidden">
          <button className="text-3xl" onClick={() => setIsOpen((s) => !s)}>
            {!isOpen ? <GrClose /> : <RiMenu2Fill />}
          </button>
        </div>

        {!isOpen && (
          <div className="absolute right-0 top-0 h-screen min-h-screen w-screen bg-primary text-xl">
            <ul
              onClick={(e) => {
                setIsOpen((s) => !s);
                trigger(e);
              }}
              className="flex h-full w-full flex-col items-center justify-center gap-6"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#program">About</a>
              </li>
              <li>
                <a href="#feature">Roadmap</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#footer">Contact Us</a>
              </li>
              <li>
                <button
                  onClick={(e) => trigger(e)}
                  href="#home"
                  className="rounded-[1rem] border border-background bg-transparent px-2 py-2 text-background sm:text-sm md:px-4 md:py-2 lg:px-6 lg:py-3 lg:text-lg"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
