import React, { useState } from "react";

const Summary = () => {
  const [data, setData] = useState<any[]>([
    {
      name: "Question 1",
      message:
        "Quick-witted and audacious, you aren't afraid to disagree with the status quo. Few things light up these personalities more than a bit of verbal sparring – and if the conversation veers into controversial terrain, so much the better. You are knowledgeable and curious with a playful sense of humor, and can be incredibly entertaining.",
    },
    {
      name: "Question 1",
      message:
        "Quick-witted and audacious, you aren't afraid to disagree with the status quo. Few things light up these personalities more than a bit of verbal sparring – and if the conversation veers into controversial terrain, so much the better. You are knowledgeable and curious with a playful sense of humor, and can be incredibly entertaining.",
    },
    {
      name: "Question 1",
      message:
        "Quick-witted and audacious, you aren't afraid to disagree with the status quo. Few things light up these personalities more than a bit of verbal sparring – and if the conversation veers into controversial terrain, so much the better. You are knowledgeable and curious with a playful sense of humor, and can be incredibly entertaining.",
    },
  ]);
  return (
    <div className="w-[1088px] h-[1325px] bg-[#f6f8fa] rounded-[24px] pt-[31px] pl-[39px] pr-[42px]">
      <div className="text-[32px] font-medium">Score Breadown by Questions</div>
      <div className="w-[1007px] h-[3px] bg-[#7f7f7f] "></div>

      {data?.map((item, index) => (
        <div className="mt-[15px]  w-[1009px]">
          <div
            key={index}
            className=" w-[1009px] h-[43px] bg-[#4a23cc] rounded-[26px] flex items-center text-[#fff] pl-[20px] text-[24px] font-medium"
          >
            {item.name}:
          </div>
          <div className="w-[1009px] mt-[13px]">{item?.message}</div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
