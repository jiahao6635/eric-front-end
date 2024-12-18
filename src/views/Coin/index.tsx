import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import TokenTradeView from "./TokenTradeView";
import SellOrBuy from "./SellOrBuy";
import BondingCurve from "./BondingCurve";
import GamePlay from "./GamePlay";
import Distribution from "./Distribution";

const Coin = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  return (
    <div className="w-full h-full flex items-center flex-col ">
      <div
        className="text-[14px] text-[#666a6a] w-full mt-[20px] flex items-center cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <ChevronLeft className="w-[16px] h-[18px] mr-[8px]" />
        Back
      </div>

      <div className="w-full flex justify-between mt-[20px]">
        <div>
          <TokenTradeView />
          <GamePlay />
        </div>
        <div className="flex flex-col">
          <SellOrBuy />
          <BondingCurve />
          <Distribution />
        </div>
      </div>
    </div>
  );
};

export default Coin;
