import CustomButton from "@/components/CustomButton";
import React from "react";
const Navbar = () => {
  return (
    <div className="w-full h-[102px] bg-[#242430] flex items-center justify-end pr-[62px]">
      <CustomButton className="w-[184px] !h-[42px] text-[#fff] !text-[18px] rounded-[24px] !bg-[#242430] mr-[20px] border-[#4a23cc] border-solid !border-[1px] hover:bg-[#4a23cc] hover:text-[#fff]">
        Sign In
      </CustomButton>
      <CustomButton className="w-[184px] !h-[42px] text-[#fff] !text-[18px] rounded-[24px] bg-[#4a23cc] leading-[24px] hover:bg-[#4a23cc]">
        Sign Up
      </CustomButton>
    </div>
  );
};
export default Navbar;
