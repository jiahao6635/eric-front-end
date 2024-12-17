import React from "react";
import ReactECharts from "echarts-for-react";

interface ICircularProgress {
  percentage: number;
  className?: string;
}
const CircularProgress = ({ percentage, className }: ICircularProgress) => {
  const options = {
    series: [
      {
        type: "pie",
        radius: ["70%", "90%"], // 环形宽度
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "center",
          formatter: `${percentage}%`, // 中间显示百分比
          fontSize: 20,
          fontWeight: "bold",
        },
        data: [
          {
            value: percentage,
            itemStyle: {
              color: "#8a7ef9", // 主色
              borderRadius: "50%", // 使得有颜色部分更圆滑
            },
          },
          {
            value: 100 - percentage,
            itemStyle: {
              color: "#f3f3f3", // 背景色
              borderRadius: "50%", // 背景部分也设置圆角
            },
          },
        ],
        startAngle: 90, // 设置起始角度，从顶部开始
        animationType: "expansion", // 动画效果
      },
    ],
  };

  return (
    <div className={`w-[108px] h-[110px] ${className}`}>
      <ReactECharts
        option={options}
        style={{ height: "100%", width: "100%" }}
        opts={{ renderer: "svg" }} // 使用 SVG 渲染，确保更清晰的视觉效果
      />
    </div>
  );
};

export default CircularProgress;
