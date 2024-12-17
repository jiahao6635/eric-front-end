import React, { useState } from "react";
import interviewer1 from "@/assets/home/interviewer1.png";
import interviewer2 from "@/assets/home/interviewer2.png";
import interviewer3 from "@/assets/home/interviewer3.png";
import interviewer4 from "@/assets/home/interviewer4.png";
import interviewer5 from "@/assets/home/interviewer5.png";

import CustomButton from "@/components/CustomButton";
import { useNavigate } from "react-router-dom";

const ChooseFirm = () => {
  const data = [
    {
      name: "Goldman Sachs",
      img: interviewer1,
    },
    {
      name: "Morgan Stanley",
      img: interviewer2,
    },
    {
      name: "JP Morgan",
      img: interviewer3,
    },
    {
      name: "Bank of America",
      img: interviewer4,
    },
    {
      name: "UBS",
      img: interviewer5,
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const onClickGotoSelect = (index: number) => {
    setSelectedIndex(index);
    navigate("/upload-resume");
  };

  const [isMatch, setIsMatch] = useState(false);

  return (
    <div className="w-full h-[100vh] bg-[#242430] flex justify-center relative">
      <div className="w-full h-[960px] bg-[#1c1c24]  flex items-center flex-col">
        {isMatch ? (
          <div className="">
            <div>Interviewer Matched!</div>
            <div>
              Click on Continue to take a 5-minute mock and see how well you do
            </div>
          </div>
        ) : (
          <div className="text-[#fff] text-[32px] leading-[42px] mt-[171px] font-medium  flex items-center flex-col">
            Pairing You up with An Interviewer
            <div>from Your Target Firm</div>
          </div>
        )}

        <div className="grid grid-cols-5 gap-[81px] mt-[42px] px-[90px] cursor-pointer">
          {data.map((item, index) => (
            <div
              className="flex flex-col items-center justify-center rounded-[25px] "
              onClick={() => setSelectedIndex(index)}
              style={{}}
            >
              <img src={item.img} className="w-[188px] h-[335px]" alt="" />
            </div>
          ))}
        </div>
        {isMatch ? (
          <div className="text-[#fff] text-[18px] mt-[37px]">
            Please wait while we find your best match...
          </div>
        ) : (
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
        )}
      </div>
      <div className="absolute top-[171px] right-[89px] w-[80px] h-[36px] text-[14px]  border-[1px] rounded-[8px] text-[#fff] border-[#fff] flex items-center justify-center cursor-pointer">
        Skip
      </div>
    </div>
  );
};

export default ChooseFirm;
