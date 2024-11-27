import { FaCheck } from "react-icons/fa";
import { TbX } from "react-icons/tb";

function Box() {
  return (
    <section
      id="program"
      className="section relative flex flex-col justify-center gap-10 p-4 font-fira lg:p-16 xl:p-[6rem]"
    >
      <div>
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Why <span className="text-primary"> MoonEX ?</span>
        </h2>
      </div>
      <div className="relative overflow-x-auto rounded-md bg-[#d9d9d917] px-4 py-12 backdrop-blur-2xl">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-[#d9d9d935]">
              <th className="px-4 py-4 text-left">Comparison</th>
              <th className="px-4 py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <img src="./logo.svg" alt="Moonex" width={24} height={24} />
                  <span className="text-primary">Moonex</span>
                </div>
              </th>
              <th className="px-4 py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="./uniswap.svg"
                    alt="Uniswap"
                    width={100}
                    height={100}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Point no one",
              "Point no two this",
              "Point no two this",
              "Point no two this",
              "Point no two this",
            ].map((point, index) => (
              <tr key={index} className="border-b border-[#d9d9d935]">
                <td className="px-4 py-4 text-midwhite">{point}</td>
                <td className="px-4 py-4 text-center">
                  <span className="inline-block text-green-500">
                    <FaCheck />
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <span className="inline-block text-red-500">
                    <TbX />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="linear-grad2 absolute -bottom-2 h-[15rem] w-[15rem] rounded-full opacity-10 blur-lg md:h-[15rem] md:w-[15rem] lg:h-[20rem] lg:w-[20rem]"></div>
    </section>
  );
}

export default Box;
