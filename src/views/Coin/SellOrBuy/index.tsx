import SearchInput from "@/components/input";
import tokenIcon from "@/assets/fun/tokenIcon.png";
import { useState } from "react";
import { CircleAlert } from "lucide-react";
import ForgeButton from "@/views/Home/ForgeButton";

const SellOrBuy = () => {
  const [currentType, setCurrentType] = useState<"buy" | "sell">("buy");
  const [activeIndex, setActiveIndex] = useState(0);
  const [GAIMEList, setGAIMEList] = useState([
    {
      num: "10",
    },
    {
      num: "100",
    },
    {
      num: "1000",
    },
  ]);
  return (
    <div className="w-[387px] h-[354px] bg-[#0f1515] rounded-[16px] overflow-hidden flex items-center flex-col ">
      <div className="w-full h-[56px] flex items-center relative cursor-pointer">
        <div
          className="w-[50%] h-[56px] flex items-center justify-center font-bold text-[18px]"
          onClick={() => setCurrentType("buy")}
          style={{
            backgroundColor: currentType === "buy" ? "#111616" : "#0b1111",
            color: currentType === "buy" ? "#09FFF0" : "#595d5d",
          }}
        >
          Buy
        </div>
        <div
          className="w-[50%] h-[56px] flex items-center justify-center font-bold text-[18px]"
          onClick={() => setCurrentType("sell")}
          style={{
            backgroundColor: currentType === "buy" ? "#0b1111" : "#111616",

            color: currentType === "buy" ? "#595d5d" : "#09FFF0",
          }}
        >
          Sell
        </div>
        <div
          className="w-[29px] h-[3px] bg-[#09FFF0] absolute bottom-[-3px]"
          style={{
            left: currentType === "buy" ? "82px" : "275px",
          }}
        ></div>
      </div>

      <div className="w-full px-[24px]">
        <div className="w-full flex justify-end text-[12px] mt-[24px] text-[#fff]">
          Balance: 1000 GAIME
        </div>

        <div className="w-full  bg-[#111515] mt-[16px] relative">
          <SearchInput
            className="!h-[56px]"
            icon={
              <img
                src={tokenIcon}
                alt=""
                className="absolute left-3 top-1/2 -translate-y-1/2 w-[24px] h-[24px]"
              />
            }
            placeholder="Search"
          />
          <div className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[16px] text-[#fff]">
            GAIME
          </div>
        </div>

        <div className="w-full h-[28px] bg-[#111515] flex items-center mt-[16px]">
          {GAIMEList.map((item, index) => (
            <div
              style={{
                background: activeIndex === index ? "#0f2c2b" : "#0f1716",
                color: activeIndex === index ? "#09fff0" : "#fff",
              }}
              className="h-[28px] w-[108px] cursor-pointer font-thin justify-center bg-[#1b2121] rounded-[10px] text-[#fff] flex items-center text-[12px] mr-[16px]"
              onClick={() => setActiveIndex(index)}
            >
              {item.num} <span className="ml-[8px] ">GAIME</span>
            </div>
          ))}
        </div>

        <div className="flex items-center mt-[25px] font-thin text-[12px] text-[#838585]">
          Trading Fee
          <CircleAlert className="w-[16px] h-[16px] text-[#575b5b] ml-[8px]" />
        </div>

        <div className="w-full flex justify-center mt-[16px]">
          <ForgeButton onClick={() => {}} className="!text-[18px]">
            Buy Tokens
          </ForgeButton>
        </div>
      </div>
    </div>
  );
};

export default SellOrBuy;
