const TokenTradeView = () => {
  return (
    <div className="w-[797px] h-[548px] bg-[#111616] rounded-[16px] flex items-center flex-col p-[24px]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <img src="" className="w-[96px] h-[96px]" alt="" />
          <div className="ml-[24px]">
            <div className="text-[#09FFF0]">FPS Game ($FPS)</div>
            <div className="flex items-center">
              <div className="text-[#838585] flex items-center">
                Created By{" "}
                <span className="text-[#fff] ml-[8px]">Oxad.…dad</span>{" "}
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
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] text-[#707373] mt-[24px]">
        How many targets can you hit? My high score is 49! Move with 'WASD' -
        Learn to build your first FPS on our discord:
        https://discord.com/channels/77371219972941...
        <div className="text-[#cfd0d0] text-[12px]">Read more</div>
      </div>
    </div>
  );
};
export default TokenTradeView;
