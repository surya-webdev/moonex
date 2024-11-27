import { FaTelegram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import trigger from "../_helper/trigger";

function Footers() {
  return (
    <footer className="footer section mt-24 border-t border-gray-800 px-12 py-24 lg:px-40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-2">
          <img src="./logo2.svg" alt="logo" />
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-8">
          <a
            onClick={(e) => trigger(e)}
            href="#home"
            className="transition-colors hover:text-yellow-500"
          >
            About Us
          </a>
          <a
            onClick={(e) => trigger(e)}
            href="#program"
            className="transition-colors hover:text-yellow-500"
          >
            Roadmap
          </a>
          <a
            onClick={(e) => trigger(e)}
            href="#faq"
            className="transition-colors hover:text-yellow-500"
          >
            FAQs
          </a>
          <a
            onClick={(e) => trigger(e)}
            href="#home"
            className="transition-colors hover:text-yellow-500"
          >
            Contact Us
          </a>
        </nav>
        <div className="flex flex-col gap-6 justify-self-end font-bold">
          <h1 className="font-rale text-3xl">
            Contact <span className="text-primary">Us</span>
          </h1>
          <ul className="flex gap-10 text-[1.6rem]">
            <li>
              <FaTelegram />
            </li>
            <li>
              <FaReddit />
            </li>
            <li>
              <TfiTwitter />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
