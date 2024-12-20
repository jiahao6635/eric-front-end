import ChatView from "@/components/chatView";
import CodeEditor from "@/components/EditorView";
import CreateGameHeader from "./CreateGameHeader";
import clearIcon from "@/assets/fun/clearIcon.png";
import { CustomSelect } from "@/components/CustomSelect";
import { useState } from "react";

const CreateGame = () => {
  const [selectedValue, setSelectedValue] = useState("3.5");

  const options = [
    { value: "3.5", label: "Claude sonet 3.5" },
    { value: "4.0", label: "Claude sonet 4.0" },
    { value: "4.5", label: "Claude sonet 4.5" },
  ];
  return (
    <div className="flex items-center w-full flex-col">
      <CreateGameHeader
        onBack={() => {}}
        gameName="Game Name"
        creator="Creator"
        createdTime="Created Time"
        marketcap="Marketcap"
        plays="Plays"
      ></CreateGameHeader>
      <div className="flex items-center w-full mt-[16px]">
        <div className="w-[491px] h-[701px] rounded-[16px] p-[24px] bg-[#0f1515]">
          <div className="w-full flex items-center justify-between h-[42px] mb-[24px]">
            <CustomSelect
              options={options}
              value={selectedValue}
              onChange={setSelectedValue}
            ></CustomSelect>
            <div
              className="text-[#cfd0d0] text-[12px] flex items-center"
              onClick={() => {}}
            >
              <img
                src={clearIcon}
                alt="clearIcon"
                className="w-[16px] h-[16px] mr-[8px]"
              />
              Clear Memory
            </div>
          </div>
          <ChatView></ChatView>
        </div>

        <div className="w-[693px] h-[701px] rounded-[16px] bg-[#0b1111] ml-[16px]">
          <CodeEditor></CodeEditor>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;
