import { FiDollarSign } from "react-icons/fi";
import { HiPhoneMissedCall } from "react-icons/hi";
import { TbAdjustments, TbShieldCheckFilled } from "react-icons/tb";

export default function Features() {
  const features = [
    {
      icon: FiDollarSign,
      title: "Cheapest TXs",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      icon: TbShieldCheckFilled,
      title: "CerTIK",
      description:
        "We are Audited by CertiK. CertiK is the leading security-focused ranking platform to",
    },
    {
      icon: HiPhoneMissedCall,
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets",
    },
    {
      icon: TbAdjustments,
      title: "CrossDex Support",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
  ];

  return (
    <div className="mb-9 px-4 font-rale text-white md:p-8">
      <div>
        <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">
          Our <span className="font-fira text-yellow-500">Features</span>
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border-[0.1px] border-midwhite bg-[#d9d9d917] p-6 backdrop-blur-sm transition-colors hover:bg-gray-800/70"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-700/50">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm font-medium text-midwhite">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
