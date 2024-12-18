import Tab from "@/components/Tab";
import { useState } from "react";
import GameView from "./GameView";

const GamePlay = () => {
  const [tabs, setTabs] = useState([
    {
      name: "Game Play",
    },
    {
      name: "Comements",
      num: 1234,
    },
    {
      name: "Proposal",
    },
  ]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const onChange = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-[797px] h-[765px] bg-[#0f1515] rounded-[16px]  flex items-center flex-col p-[24px] mt-[16px]">
      <Tab tabs={tabs} activeTab={activeTab} onChange={onChange} />

      <div className="w-full pt-[24px]">
        {activeTab?.name === "Game Play" && <GameView />}
      </div>
    </div>
  );
};

export default GamePlay;