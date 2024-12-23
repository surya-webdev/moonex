import trigger from "../_helper/trigger";

import Button from "./Button";
import Navbar from "./NavBar";

function Hero() {
  return (
    <section className="min-h-screen overflow-hidden">
      <Navbar />
      <section
        id="home"
        className="relative grid grid-cols-1 items-center justify-center gap-10 leading-tight lg:grid-cols-[2fr_1.5fr] lg:p-16 xl:p-[6rem]"
      >
        <div className="relative z-20 flex flex-col items-center justify-center gap-6 px-4 sm:px-5 md:px-6 lg:items-start lg:justify-start">
          <div className="linear-grad absolute left-[0%] rounded-full sm:top-[0%] md:-left-[10%] md:-top-[20%] md:h-[15rem] md:w-[15rem] lg:-left-[30%] lg:-top-[150%] lg:h-[25rem] lg:w-[25rem]"></div>
          <div className="absolute -left-2 top-0 md:-top-24">
            <img className="waves" src="./star-img2.svg" alt="stars" />
          </div>
          <h2 className="text-center text-[1.6rem] font-bold md:text-[2.6rem] lg:text-start lg:text-[3.5rem]">
            Trusted Multi-Chain{" "}
            <span className="text-primary lg:block">
              DEX <span className="text-white">Platform</span>
            </span>
          </h2>
          <p className="text-center font-rale text-sm font-light text-midwhite md:text-lg lg:text-xl">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex gap-4 font-medium" onClick={(e) => trigger(e)}>
            <Button href="#footer" onClick={(e) => trigger(e)}>
              Connect Wallet
            </Button>
            <a
              href="#faq"
              className="rounded-[1rem] border border-primary bg-transparent px-2 py-2 text-primary sm:text-sm md:px-4 md:py-2 lg:px-6 lg:py-3 lg:text-lg"
            >
              Trade Crypto
            </a>
          </div>
        </div>

        <div className="relative z-50 flex items-center justify-center gap-0 justify-self-center bg-background lg:-translate-y-10 lg:flex-col lg:gap-16">
          <img
            className="waves absolute -left-[10%] -top-[10%] inline-block md:-left-[40%] lg:bottom-[120%]"
            src="./star-img.svg"
            alt="stars"
          />

          <img
            className="waves rounded-full lg:h-60 lg:w-60 lg:-translate-y-2"
            src="./sphere.svg"
            alt="moon"
          />
          <div className="linear-grad absolute -left-[0%] top-20 rounded-full sm:top-[0%] md:-top-[20%] md:left-[150%] md:h-[15rem] md:w-[15rem] lg:left-[130%] lg:top-[0%] lg:h-[20rem] lg:w-[20rem]"></div>
          <img
            className="waves absolute -right-[10%] -top-[10%] md:right-[40%] lg:top-[120%]"
            src="./star-img2.svg"
            alt="stars"
          />
        </div>

        <div className="absolute z-0 opacity-80 lg:-top-[18rem]">
          <img className="" src="./circles.png" />
        </div>
      </section>
    </section>
  );
}

export default Hero;
