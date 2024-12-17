import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Congratulations = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] bg-[#0e0d12] flex justify-center ">
      <div className="w-full h-[960px] bg-[#0e0d12]  flex items-center flex-col justify-center">
        <div className="text-[64px] text-[#ff9500] font-medium leading-[83px]">
          Congratulations!
        </div>
        <div className="text-[40px] text-[#fff] leading-[52px] font-bold mt-[20px]">
          You have successfully completed the interview.
        </div>
        <div className="text-[40px] text-[#fff] leading-[52px] mt-[20px] font-bold">
          Register to see your performance report and
        </div>
        <div className="text-[40px] text-[#fff] leading-[52px] mt-[10px] font-bold">
          hacks for improvement!
        </div>

        <CustomButton
          className="w-[261px] h-[67px] mt-[38px] !rounded-[24px]"
          onClick={() => {
            navigate("/login");
          }}
        >
          Register for Free
        </CustomButton>
      </div>
    </div>
  );
};

export default Congratulations;
