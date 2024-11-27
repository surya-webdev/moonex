import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do I get a Referral Code?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "How do I get a Referral Code?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
  ];

  return (
    <section
      id="faq"
      className="section relative my-40 flex w-full flex-col items-center justify-center px-4"
    >
      <div className="flex w-full flex-col items-center justify-center gap-10 rounded-md bg-[#d9d9d917] px-6 py-10 backdrop-blur-3xl md:w-[80%]">
        <h2 className="my-4 text-center text-4xl font-bold lg:my-6">
          <span className="font-fira text-primary">FAQs</span>
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`flex w-full flex-col gap-6 ${index === 2 ? "" : "border-b-[0.5px] border-midwhite"} `}
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text:sm lg:text-lg">{faq.question}</span>
              {openFaq === index ? (
                <span className="rounded-full bg-[#d9d9d920] px-2 py-2">
                  <FaMinus className="h-3 w-3 text-white" />
                </span>
              ) : (
                <span className="rounded-full bg-[#d9d9d920] px-2 py-2">
                  <FaPlus className="h-3 w-3 text-white" />
                </span>
              )}
            </button>
            {openFaq === index && (
              <div className="overflow-hidden">
                <p className="pb-4 font-medium text-gray-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* <div className="linear-grad2 absolute h-[8rem] w-[8rem] rounded-full opacity-10 blur-lg md:h-[15rem] md:w-[15rem] lg:h-[20rem] lg:w-[20rem]"></div> */}
    </section>
  );
}

export default Faq;
