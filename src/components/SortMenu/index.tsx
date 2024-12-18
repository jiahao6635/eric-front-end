import { useState } from "react";

const SortMenu = () => {
  const [sortMenuList, setSortMenuList] = useState([
    {
      name: "RPG",
    },
    {
      name: "3D",
    },
    {
      name: "2D",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex items-center">
      <div className="h-[40px] px-[24px] cursor-pointer bg-[#0e1414] w-[224px] rounded-[12px] text-[#fff] flex items-center justify-between text-[14px] font-medium mr-[16px]">
        <div className="text-[#6e7171]">Sort</div>
        <div>Marketcap</div>
      </div>
      <div className="flex items-center">
        {sortMenuList.map((item, index) => (
          <div
            style={{
              background: activeIndex === index ? "#032120" : "#0f1716",
              color: activeIndex === index ? "#09FFF0" : "#fff",
            }}
            className="h-[40px] px-[24px] cursor-pointer bg-[#0f1716] rounded-[12px] text-[#fff] flex items-center text-[14px] font-medium mr-[16px]"
            onClick={() => setActiveIndex(index)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortMenu;
