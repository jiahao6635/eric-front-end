import { useState } from "react";
interface TabProps {
  tabs: any[];
  activeTab: any;
  onChange: (tab: any) => void;
}
const Tab = ({ tabs, activeTab, onChange }: TabProps) => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center">
        {tabs.map((tab) => (
          <div
            onClick={() => {
              onChange(tab);
            }}
            className="mr-[32px] font-medium text-[16px] text-[#fff] cursor-pointer"
            style={{
              color: activeTab?.name === tab?.name ? "#fff" : "#6f7373",
              fontWeight: activeTab?.name === tab?.name ? "bold" : "normal",
            }}
          >
            {tab?.name}
          </div>
        ))}
      </div>

      <div className="w-wull h-[1px] bg-[#1b2121]  mt-[24px] relative">
        <div
          className="absolute left-0 top-[-3px] w-[82px] h-[3px] bg-[#09fff0]"
          style={{
            left: `${
              tabs.findIndex((t) => t.name === activeTab?.name) * 118
            }px`,
            transition: "left 0.3s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Tab;
