import React, { useState } from "react";
import logo1 from "@/assets/home/logo1.png";
import logo2 from "@/assets/home/logo2.png";
import logo3 from "@/assets/home/logo3.png";
import logo4 from "@/assets/home/logo4.png";
import logo5 from "@/assets/home/logo5.png";
import logo6 from "@/assets/home/logo6.png";
import CustomButton from "@/components/CustomButton";
import { useNavigate } from "react-router-dom";

const ChooseFirm = () => {
  const data = [
    {
      name: "Goldman Sachs",
      img: logo1,
    },
    {
      name: "Morgan Stanley",
      img: logo2,
    },
    {
      name: "JP Morgan",
      img: logo3,
    },
    {
      name: "Bank of America",
      img: logo4,
    },
    {
      name: "UBS",
      img: logo5,
    },
    {
      name: "Citi",
      img: logo6,
    },
  ];
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const onClickGotoSelect = (index: number) => {
    navigate("/choose-interviewer");
  };
  return (
    <div className="w-full h-[100vh] bg-[#242430] flex justify-center ">
      <div className="w-full h-[960px] bg-[#1c1c24]  flex items-center flex-col">
        <div className="text-[#fff] text-[32px] leading-[42px] font-medium mt-[80px] flex items-center flex-col">
          Choose A Target Firm
        </div>
        <div className="grid grid-cols-3 gap-[31px] mt-[32px] px-[32px] cursor-pointer">
          {data.map((item, index) => (
            <div
              onClick={() => {
                setSelectedIndex(index);
              }}
              className="w-[438px] h-[303px] bg-[#0e0d12]  rounded-[25px] border-[2px] border-[#4c24d0] flex items-center justify-center flex-col relative"
              style={{
                border:
                  selectedIndex === index
                    ? "2px solid #4cd964"
                    : "2px solid #4c24d0",
              }}
            >
              {index === selectedIndex && (
                <div className="w-[168px] h-[44px] flex items-center justify-center bg-[#4cd964] rounded-[4px] text-[18px] leading-[28px] font-semibold text-[#fff] absolute top-[-2px] left-[-2px]">
                  Selected
                </div>
              )}
              <img src={item.img} alt="" />
              <div className="text-[#fff] text-[18px] leading-[28px] font-bold mt-[26px]">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        <CustomButton
          onClick={() => onClickGotoSelect(selectedIndex)}
          className="w-[150px] h-[52px] bg-[#000] mt-[20px] !text-[18px]"
          style={{
            background: selectedIndex !== -1 ? "#4a23cc" : "#fff",
            color: selectedIndex !== -1 ? "#fff" : "#000",
          }}
        >
          Continue
        </CustomButton>
      </div>
    </div>
  );
};

export default ChooseFirm;
