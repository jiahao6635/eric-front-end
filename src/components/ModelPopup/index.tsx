import { Modal } from "@mui/material";
import React from "react";
import { X } from "lucide-react";
import ForgeButton from "@/views/Home/ForgeButton";

interface ModelPopupProps {
  className?: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
  onClickSubmit: () => void;
  buttonText?: string;
}
const ModelPopup = ({
  className,
  children,
  open,
  onClose,
  title,
  onClickSubmit,
  buttonText = "Post a Reply",
}: ModelPopupProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none">
        <div
          className={`w-[480px] relative bg-[#111919] border-[1px] border-sold border-[#2a3030] rounded-[16px]  p-[24px] flex flex-col ${className}`}
        >
          <div className="flex items-center justify-between w-full pb-[24px] border-b-[1px] border-solid border-[#293030]">
            <div className="text-[#fff] text-[20px] font-medium">{title}</div>
            <div className="text-[#fff] text-[16px] font-thin">
              <X
                className="text-[24px] text-[#fff] cursor-pointer"
                onClick={onClose}
              />
            </div>
          </div>
          {children}

          <div className="w-full  bg-[#293030] mt-[24px]">
            <ForgeButton
              className="!w-full !h-[56px] rounded-[12px] text-[18px]  bg-[#0f1515] text-[#000] hover:bg-[#fff] hover:text-[#0f1515] border-[1px] border-solid border-[#404444]"
              onClick={onClickSubmit}
            >
              {buttonText}
            </ForgeButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModelPopup;
