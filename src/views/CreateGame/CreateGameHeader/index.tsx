import ForgeButton from "@/components/GlowButton";
import { ChevronLeft } from "lucide-react";
interface CreateGameHeaderProps {
  onBack: () => void;
  gameName?: string;
  creator?: string;
  createdTime?: string;
  marketcap?: string;
  plays?: string;
}
const CreateGameHeader = ({
  onBack,
  gameName,
  creator,
  createdTime,
  marketcap,
  plays,
}: CreateGameHeaderProps) => {
  return (
    <div className="w-full h-[74px] bg-[#101616] px-[24px] flex items-center justify-between rounded-[16px]">
      <div className="flex items-center gap-4">
        {/* 返回按钮 */}
        <div onClick={onBack} className="flex items-center text-[#707373]">
          <ChevronLeft className="text-[10px]" />
          <span className="text-[14px] ml-[6px] leading-[14px]">Back</span>
        </div>

        {/* 游戏信息 */}
        <div className="flex items-center gap-6 text-[#ffffff]">
          <h1 className="text-white font-medium">
            {gameName} <span className="">($FPS)</span>
          </h1>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#767A7A]">Created by</span>
            <span className="text-white">{creator}</span>
            <span className="text-[#767A7A]">•</span>
            <span className="text-[#767A7A]">{createdTime}</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[#767A7A]">Marketcap</span>
              <span className="text-[#09fff0]">{marketcap}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#767A7A]">Plays</span>
              <span className="text-white">{plays}</span>
            </div>
          </div>
        </div>
      </div>

      <ForgeButton className="!w-[100px] !h-[42px] !text-[14px]">
        Proposal
      </ForgeButton>
    </div>
  );
};

export default CreateGameHeader;
