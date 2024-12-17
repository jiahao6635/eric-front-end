import BubbleChart from "@/components/BubbleChart";
import CircularProgress from "@/components/CircularProgress";
import CustomButton from "@/components/CustomButton";

const Overview = () => {
  const data = [
    { text: "Passionate", size: 100, color: "gold" },
    { text: "Calm", size: 50, color: "skyblue" },
    { text: "Sharp", size: 70, color: "purple" },
    { text: "Humorous", size: 40, color: "salmon" },
    { text: "Responsible", size: 60, color: "limegreen" },
  ];

  return (
    <div className="w-[1076px] flex flex-col items-center">
      <div className="w-[865px] h-[398px] bg-[#424242] rounded-[24px] p-[15px] ">
        <div className="w-full h-full bg-[#e5e5e5] rounded-[24px]">
          <video src="" />
        </div>
      </div>

      <div className="w-[full] mt-[30px]">
        <div className="text-[32px] leading-[42px] font-semibold">Overview</div>
        <div className="w-[1076px] h-[3px] bg-[#7f7f7f] "></div>
      </div>

      <div className="flex items-center justify-between mt-[30px] w-full">
        <div className="w-[357px] h-[263px] bg-[#f6f8fa] rounded-[24px] flex items-center justify-center flex-col border-[1px] border-[#4e1ea0]">
          <div className="text-[24px] leading-[31px] text-[#424242] font-semibold">
            Total Questions
          </div>
          <div className="text-[96px] text-[#4a23cc] font-semibold">B+</div>
        </div>
        <div className="w-[711px] h-[263px] bg-[#f6f8fa] rounded-[24px] px-[30px] pt-[15px]">
          <div className="text-[32px] leading-[42px] font-semibold">
            Percentile in Candidates
          </div>

          <ProcessData
            title="Early-Round Interviews"
            className="mt-[10px]"
            value="80"
          />
          <ProcessData
            title="Early-Round Interviews"
            className="mt-[20px]"
            value="80"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-[20px] w-full">
        <div className="w-[541px] h-[278px] bg-[#f6f8fa] rounded-[24px] pt-[22px] flex flex-col items-center">
          <div className="text-[32px] leading-[42px] font-semibold">
            Decision Probability Analysis
          </div>

          <div className="flex items-center w-full justify-between mt-[20px] px-[20px]">
            <div className="flex items-center flex-col">
              <CircularProgress percentage={80} />
              <div className="text-center font-semibold">
                <div>80%</div>
                <div>recommoned</div>
              </div>
            </div>
            <div className="flex items-center flex-col">
              <CircularProgress percentage={80} />
              <div className="text-center font-semibold">
                <div>80%</div>
                <div>recommoned</div>
              </div>
            </div>
            <div className="flex items-center flex-col">
              <CircularProgress percentage={80} />
              <div className="text-center font-semibold">
                <div>80%</div>
                <div>recommoned</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[527px] h-[278px] bg-[#f6f8fa]  rounded-[24px] pt-[22px] flex flex-col items-center">
          <BubbleChart data={data} width={527} height={278} />
        </div>
      </div>

      <div className="w-[1088px] h-[228px] bg-[#f6f8fa] mt-[52px] rounded-[24px] flex flex-col  justify-center pl-[39px]">
        <div className="text-[32px] leading-[42px] font-semibold">
          Summary of Performance
        </div>

        <div className="w-[1007px] h-[1px] bg-[#4e1ea0] mt-[5px]"></div>

        <div className="text-[24px] leading-[31px] text-[#4a23cc] font-semibold mt-[20px]">
          Overview
        </div>
        <div className="text-[18px] w-[1007px] leading-[23px] text-[#000] mt-[5px]">
          Quick-witted and audacious, you aren't afraid to disagree with the
          status quo. Few things light up these personalities more than a bit of
          verbal sparring – and if the conversation veers into controversial
          terrain, so much the better. You are knowledgeable and curious with a
          playful sense of humor, and can be incredibly entertaining.
        </div>
      </div>

      <div className="w-full flex justify-end mt-[20px] mb-[50px]">
        <CustomButton className="w-[304px] h-[80px] rounded-[40px] flex flex-col text-[24px]">
          <div className="text-[16px] leading-[21px]">NEXT</div>
          Continue
        </CustomButton>
      </div>
    </div>
  );
};

export default Overview;

interface IProcessData {
  title: string;
  value: string;
  className?: string;
}
const ProcessData = ({ title, value, className }: IProcessData) => {
  return (
    <div className={`relative   ${className}`}>
      <div className="italic text-[24px] font-medium">{title}</div>

      <div className="flex items-center w-full  h-[33px]">
        <div
          className={`w-full h-full flex items-center border-[1px] border-[#4a23cc] relative `}
        >
          <div
            className=" h-[33px] bg-[#4a23cc]"
            style={{
              width: `${value}%`,
            }}
          ></div>
          <div
            className={`absolute  h-[70px] w-[3px] bg-[#4a23cc]`}
            style={{
              left: `${value}%`,
            }}
          ></div>
          <div
            className="text-[16px] w-[200px] text-[#4a23cc] font-medium absolute"
            style={{
              left: `calc(${value}% + 10px)`,
              top: "-25px",
            }}
          >
            You are here
          </div>
        </div>

        <div className="text-[24px] ml-[16px] text-[#4a23cc] font-medium">
          {value}%
        </div>
      </div>
    </div>
  );
};
