import Button from "./Button";
import Navbar from "./NavBar";

function Hero() {
  return (
    <section className="overflow-x-hidden">
      <Navbar />
      <section className="relative grid grid-cols-1 items-center justify-center gap-10 leading-tight lg:grid-cols-[2fr_1.5fr] lg:p-16 xl:p-[6rem]">
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 sm:px-5 md:px-6 lg:items-start lg:justify-start">
          <div className="linear-grad absolute rounded-full sm:left-[0%] sm:top-[0%] md:-left-[10%] md:-top-[20%] md:h-[15rem] md:w-[15rem] lg:-left-[30%] lg:-top-[150%] lg:h-[25rem] lg:w-[25rem]"></div>
          <div className="absolute -top-24">
            <img className="waves" src="./star-img2.svg" alt="stars" />
          </div>
          <h2 className="z-10 text-center text-[1rem] md:text-[2rem] lg:text-[3.5rem]">
            Trusted Multi-Chain{" "}
            <span className="text-primary lg:block">
              DEX <span className="text-white">Platform</span>
            </span>
          </h2>
          <p className="text-center font-rale text-sm font-light text-midwhite md:text-lg lg:text-xl">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex gap-4">
            <Button>Connect Wallet</Button>
            <button className="rounded-[1rem] border border-primary bg-transparent px-2 py-2 text-primary sm:text-sm md:px-4 md:py-2 lg:px-6 lg:py-3 lg:text-lg">
              Trade Crypto
            </button>
          </div>
        </div>

        <div className="z-10 flex items-center justify-center gap-10 justify-self-center bg-background lg:flex lg:-translate-y-10 lg:flex-col lg:gap-16">
          <div>
            <img className="waves" src="./star-img2.svg" alt="stars" />
          </div>
          <div className="waves h-52 w-52 rounded-full lg:h-60 lg:w-60 lg:-translate-y-2">
            <img className="waves" src="./sphere.svg" alt="moon" />
          </div>
          <div>
            <img className="waves" src="./star-img.svg" alt="stars" />
          </div>
        </div>

        <div className="absolute z-0 opacity-80 lg:-top-[18rem]">
          <img src="./circles.png" />
        </div>
      </section>
    </section>
  );
}

export default Hero;