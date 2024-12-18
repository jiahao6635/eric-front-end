import { useState } from "react";

const Distribution = () => {
  const [holders, setHolders] = useState([
    {
      name: "Holder 1",
      address: "0x1234567890",
      balance: "85",
    },
    {
      name: "Holder 2",
      address: "0x1234567890",
      balance: "85",
    },
  ]);
  return (
    <div className="w-[387px] h-[665px] bg-[#0f1515] rounded-[16px]  flex items-center flex-col p-[24px] mt-[16px]">
      <div className="text-[16px] text-[#fff] font-medium w-full flex items-center">
        Holder Distribution{" "}
        <span className="text-[#707373] ml-[8px]">(1123)</span>
      </div>

      <div className="w-full h-[1px] bg-[#1a2121] mt-[24px]"></div>

      <div className="flex items-center flex-col w-full mt-[24px]">
        {holders.map((holder, index) => (
          <div
            key={index}
            className="w-full flex items-center mt-[12px] justify-between"
          >
            <div className="flex items-center text-[#fff]">
              <div>{index + 1}</div>
              <div className="text-[12px] ml-[8px]">{holder.name}</div>
            </div>

            <div
              style={{
                color:
                  index === 0
                    ? "#00ff00"
                    : index === 1
                    ? "#ffd700"
                    : index === 2
                    ? "#ffa500"
                    : "#fff",
              }}
            >
              {holder.balance}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Distribution;
