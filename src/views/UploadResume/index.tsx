import React, { useState } from "react";

import uploadIcon from "@/assets/home/uploadIcon.png";
import interviewerAvatar from "@/assets/home/interviewerAvatar.png";

import CustomButton from "@/components/CustomButton";

const UploadResume = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [resume, setResume] = useState(null);
  const onClickGotoSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="w-full h-[100vh] bg-[#242430] flex justify-center relative">
      <div className="w-full h-[960px] bg-[#1c1c24]  flex items-center flex-col">
        {resume ? (
          <>
            <div className="text-[#fff] text-[32px] leading-[42px] mt-[171px] font-medium  flex items-center flex-col">
              Before the Mock...
              <div>Upload your CV for the Interview</div>
            </div>

            <div className="w-[512px] h-[274px] border-[2px] border-[#4e1ea0] rounded-[25px] mt-[31px] flex items-center justify-center flex-col bg-[#0e0d12]">
              <div className="text-[#fff] text-[24px]  font-bold ">
                Upload Your Resume
              </div>

              <img
                src={uploadIcon}
                className="w-[68px] h-[121px] mt-[23px]"
                alt=""
              />
              <div className="text-[#c2c2c2] text-[24px] font-medium ">
                Click to Upload here
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            Interviewer Overview
            <img src={interviewerAvatar} alt="" />
          </div>
        )}

        <CustomButton
          onClick={() => onClickGotoSelect(selectedIndex)}
          className="w-[150px] h-[52px] bg-[#000] mt-[29px] !text-[18px]"
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

export default UploadResume;
