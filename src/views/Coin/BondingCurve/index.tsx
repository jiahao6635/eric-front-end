import { CircleAlert } from "lucide-react";

const BondingCurve = () => {
  return (
    <div className="w-[387px] h-[192px] bg-[#0f1515] rounded-[16px] overflow-hidden flex items-center flex-col p-[24px] mt-[16px]">
      <div className="flex items-center font-thin text-[16px] text-[#fff] w-full">
        Bonding Curve Progress
        <CircleAlert className="w-[16px] h-[16px] text-[#575b5b] ml-[8px]" />
      </div>

      <div className="text-[16px] text-[#09FFF0] font-bold mt-[16px] w-full">
        14.37%
      </div>

      <div className="w-full h-[16px] bg-[#1b2121] mt-[16px] rounded-full">
        <div
          className="h-[16px]  rounded-full"
          style={{
            width: "14.37%",
            background:
              "linear-gradient(90deg, rgba(9, 255, 240, 0.4) 0%, #09FFF0 100%)",
          }}
        ></div>
      </div>

      <div className=" mt-[16px] w-full text-[12px] text-[#707373]">
        graduate this coin to raydium at $92,724 market cap.there is 52.724 SOL
        in the bonding curve.
      </div>
    </div>
  );
};

export default BondingCurve;
