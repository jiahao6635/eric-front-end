import homeBg from "@/assets/fun/homeBg.png";
import ForgeButton from "./ForgeButton";
import GameItem from "./GameItem";
import SortMenu from "@/components/SortMenu";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="max-w-[1440px] h-full min-h-screen bg-[#020606] flex items-center flex-col"
    >
      <div className="mt-[83px] flex items-center flex-col">
        <ForgeButton></ForgeButton>

        <div className="mt-[40px] text-[#fff] text-[24px] font-bold">
          Almost jeet
        </div>

        <div className="mt-[24px]">
          <GameItem></GameItem>
        </div>
      </div>

      <div className="mt-[79px]">
        <SortMenu></SortMenu>
      </div>

      <div className="mt-[32px] grid grid-cols-2 gap-[16px]">
        <GameItem></GameItem>
        <GameItem></GameItem>
        <GameItem></GameItem>
        <GameItem></GameItem>
      </div>
    </div>
  );
};

export default Home;
