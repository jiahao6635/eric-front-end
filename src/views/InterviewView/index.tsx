import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import microphoneIcon from "@/assets/home/microphoneIcon.png";
import muteMicrophoneIcon from "@/assets/home/muteMicrophoneIcon.png";
import Progress from "@/components/Progress";
import ChoosePackageMask from "@/components/ChoosePackage";

const InterviewView = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [questionList, setQuestionList] = useState<any[]>([{}, {}, {}, {}]);
  const [openChoosePackage, setOpenChoosePackage] = useState(false);
  return (
    <div className="w-full h-[100vh] bg-[#0e0d12] flex justify-center ">
      <div className="w-full h-[960px] bg-[#0e0d12]  flex items-center flex-col">
        <div
          className="w-full h-[68px] bg-[#242430] flex items-center pl-[16px] text-[#fff] font-bold text-[18px]"
          onClick={() => setOpenChoosePackage(true)}
        >
          1st Interview with Dream Firm
        </div>
        <div className="flex w-full justify-between mt-[16px] px-[18px]">
          <div>
            <div className="flex w-[1052px] h-[132px] bg-[#1c1c24] rounded-[24px]"></div>
            <div className="w-[1052px] h-[517px] rounded-[24px] bg-[#1c1c24] mt-[32px] flex items-center justify-center relative p-[26px]">
              <div className="w-full h-full bg-[#000] flex items-center justify-center">
                <img
                  src=""
                  className="w-[393px] h-[410px] rounded-[8px]"
                  alt=""
                />
                <CustomButton className="w-[118px] h-[36px] absolute right-[38px] bottom-[38px] text-[14px]">
                  Change View
                </CustomButton>
              </div>
            </div>
            <div
              className="w-full flex justify-center mt-[26px] cursor-pointer"
              onClick={() => setIsMuted(!isMuted)}
            >
              <img
                src={isMuted ? muteMicrophoneIcon : microphoneIcon}
                className="w-[61px] h-[61px]"
                alt=""
              />
            </div>
          </div>
          <div className="flex w-[332px] h-[764px] bg-[#1c1c24] rounded-[24px] flex-col items-center  pt-[40px]">
            <div className="text-[24px] text-[#fff] font-bold leading-[31px]">
              Interview Progress
            </div>

            <Progress progress={50} className="mt-[20px]" />

            <div className="text-[18px] leading-[23px] mt-[19px] text-[#fff]">
              2 of 5 Questions Answered
            </div>

            <div className="text-[24px] leading-[23px] mt-[19px] text-[#fff] font-bold">
              Your Current Grade:
            </div>

            <div className="font-bold text-[120px] leading-[156px] text-[#ffcc00]">
              B-
            </div>

            {questionList?.map((item, index) => {
              return (
                <div className="mt-[21px] text-[24px] text-[#fff]">
                  Question {index + 1} <span className="ml-[10px]">A+</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ChoosePackageMask
        open={openChoosePackage}
        handleClose={() => setOpenChoosePackage(false)}
      />
    </div>
  );
};

export default InterviewView;
