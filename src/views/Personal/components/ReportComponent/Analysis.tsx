import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";

const Analysis = () => {
  const [data, setData] = useState<any[]>([
    {
      bg: "#424242",
    },
    {
      bg: "#ffcc00",
    },
    {
      bg: "#5a0dca",
    },
    {
      bg: "#f48c7b",
    },
  ]);
  return (
    <div>
      <div className="text-[32px] leading-[42px]">In-depth Analysis</div>
      <div className="w-[1076px] h-[3px] bg-[#7f7f7f] "></div>
      <div className="mt-[39px] grid grid-cols-4 gap-[35px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[245px] h-[230px] bg-[#1c1c24] rounded-[26px] flex items-center justify-center flex-col cursor-pointer"
            style={{
              background: item.bg,
            }}
          >
            <div className="text-[64px] leading-[83px] text-[#fff]">A</div>
            <div className="text-[24px] leading-[31px] text-[#fff]">
              Completion
            </div>
          </div>
        ))}
      </div>
      <div className="w-[1076px] h-[201px] bg-[#f2f2f2] mt-[20px] rounded-[4px] p-[15px] border-[1px] border-[#424242]">
        1111
      </div>
      <div className="flex justify-end mt-[20px]">
        <CustomButton className="w-[465px] h-[80px] rounded-[40px] flex flex-col text-[24px]">
          <div className="text-[16px] leading-[21px]">NEXT</div>
          Score Breakdown by Question
        </CustomButton>
      </div>
    </div>
  );
};

export default Analysis;
