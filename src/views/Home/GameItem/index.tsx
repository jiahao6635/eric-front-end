import { useNavigate } from "react-router-dom";

const GameItem = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-[592px] h-[203px] bg-[#0f1515] rounded-[16px] flex items-center px-[24px] cursor-pointer"
      onClick={() => {
        navigate("/coin/123");
      }}
    >
      <img src="" className="w-[152px] h-[152px]" alt="" />
      <div className="ml-[24px]">
        <div className="text-[#09FFF0]">FPS Game ($FPS)</div>
        <div className="flex items-center">
          <div className="text-[#838585] flex items-center">
            Created By <span className="text-[#fff] ml-[8px]">Oxad.…dad</span>{" "}
            <span className="inline-block w-[3px] h-[3px] bg-[#09FFF0] rounded-full mx-[8px]"></span>
            <span className="text-[#fff]">1min ago</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-[#838585]">
            Marketcap <span className="text-[#09FFF0] ml-[8px]">29.9m</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-[#838585]">
            Plays <span className="text-[#fff] ml-[8px]">1234</span>
          </div>
        </div>

        <div className="w-[368px] h-[50px] border-t border-[#2d3131] text-[#6f7373] mt-[12px] pt-[12px] truncate">
          How many targets can you hit? My high score is 49! Move with 'WASD' -
          Learn to build your first FPS...
        </div>
      </div>
    </div>
  );
};

export default GameItem;
