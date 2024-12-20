import ModelPopup from "@/components/ModelPopup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HowToFun = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setShow(false);
    navigate("/create-token");
  };
  return (
    <>
      <ModelPopup
        open={show}
        onClose={() => setShow(false)}
        title="How to fun"
        className="!w-[640px] "
        onClickSubmit={handleClick}
        buttonText="I’m ready to fun"
      >
        <div className="w-full mt-[24px]">
          <div className=" w-[592px] h-[114px] rounded-[16px] bg-[#1e2323] text-[#d2d3d3] text-[14px] p-[24px]">
            gaime.fun prevents rugs by making sure that all created tokens are
            safe. each game ongaime.fun is a{" "}
            <span className="text-[#09fff0]">fair-launch</span> with{" "}
            <span className="text-[#09fff0]">no presale</span> and{" "}
            <span className="text-[#09fff0]">no team allocation</span>.
          </div>

          <div className="mt-[24px] flex flex-col">
            <div className="flex items-center text-[14px] text-[#d2d3d3]">
              <span className="text-[#767979] mr-[20px]">Step1</span>
              <span>ick a game that you like</span>
            </div>
            <div className="flex items-center text-[14px] text-[#d2d3d3] mt-[8px]">
              <span className="text-[#767979] mr-[20px]">Step1</span>
              <span>ick a game that you like</span>
            </div>
            <div className="flex items-center text-[14px] text-[#d2d3d3] mt-[8px]">
              <span className="text-[#767979] mr-[20px]">Step1</span>
              <span>ick a game that you like</span>
            </div>
            <div className="flex items-center text-[14px] text-[#d2d3d3] mt-[8px]">
              <span className="text-[#767979] mr-[20px]">Step1</span>
              <span>ick a game that you like</span>
            </div>
          </div>
        </div>
      </ModelPopup>
    </>
  );
};

export default HowToFun;
