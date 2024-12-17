import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
const ReportProgress = () => {
  const [data, setData] = useState([
    {
      title: "Total Interviews",
      value: 100,
    },
    {
      title: "Total Interviews",
      value: 100,
    },
    {
      title: "Total Interviews",
      value: 100,
    },
    {
      title: "Total Interviews",
      value: "A",
    },
  ]);

  const [timeline, setTimeline] = useState([
    {
      date: "MM/DD/YYYY",
      title: "Mock with Bankers - Interview Title",
    },
    {
      date: "MM/DD/YYYY",
      title: "Mock with Bankers - Interview Title",
    },
  ]);
  // 配置 ECharts 的图表选项
  const options = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} °C",
      },
    },
    series: [
      {
        name: "Highest",
        type: "line",
        data: [10, 11, 13, 11, 12, 12, 9],
        markPoint: {
          data: [
            { type: "max", name: "Max" },
            { type: "min", name: "Min" },
          ],
        },
        markLine: {
          data: [{ type: "average", name: "Avg" }],
        },
      },
      {
        name: "Lowest",
        type: "line",
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
        },
        markLine: {
          data: [
            { type: "average", name: "Avg" },
            [
              {
                symbol: "none",
                x: "90%",
                yAxis: "max",
              },
              {
                symbol: "circle",
                label: {
                  position: "start",
                  formatter: "Max",
                },
                type: "max",
                name: "最高点",
              },
            ],
          ],
        },
      },
    ],
  };

  const option = {
    legend: {
      data: ["Allocated Budget", "Actual Spending"],
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: "Sales", max: 6500 },
        { name: "Administration", max: 16000 },
        { name: "Information Technology", max: 30000 },
        { name: "Customer Support", max: 38000 },
        { name: "Development", max: 52000 },
        { name: "Marketing", max: 25000 },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: "Allocated Budget",
          },
        ],
      },
    ],
  };
  return (
    <div className="w-[1076px]">
      <div className="w-full grid grid-cols-4 gap-[22px] mt-[30px]">
        {data?.map((item, index) => (
          <div
            key={index}
            className="w-[248px] h-[130px]  rounded-[4px] bg-[#fff] flex items-center flex-col justify-center"
          >
            <div className="text-[24px] leading-[31px] text-[#424242] font-medium">
              {item.title}
            </div>
            <div className="text-[48px] leading-[62px] text-[#424242]">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-between mt-[22px]">
        <div className="w-[643px] h-[391px] bg-[#fefefe] rounded-[8px]">
          <ReactECharts
            option={options}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="w-[400px] h-[391px] bg-[#fefefe] rounded-[8px] ml-[32px] pt-[20px]">
          <ReactECharts
            option={option}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>

      <div className="w-full bg-[#f0f0f5] pt-[24px] pl-[24px] pr-[22px] h-[248px] mt-[20px] rounded-[24px]">
        <div className="text-[24px] leading-[31px] text-[#424242] font-semibold">
          Reports
        </div>
        {timeline?.map((item, index) => (
          <div
            key={index}
            className="w-[1053px] h-[75px] bg-[#e6e6eb] rounded-[24px] mt-[13px] flex items-center px-[18px] justify-between"
          >
            <div className="text-[18px] leading-[21px] text-[#424242] font-medium">
              {item.date}
            </div>
            <div className="text-[16px] leading-[21px] text-[#424242] font-medium">
              {item.title}
              <span className="text-[#4a23cc]">Interview Title</span>
            </div>
            <CustomButton className="!text-[18px] !text-[#fff] !font-medium !w-[139px] !h-[44px]">
              View Report
            </CustomButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportProgress;
