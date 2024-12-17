import React from "react";
import CustomButton from "../../components/CustomButton";
import computer from "@/assets/home/computer.png";
import computer1 from "@/assets/home/computer1.png";
import computer2 from "@/assets/home/computer2.png";
import computer3 from "@/assets/home/computer3.png";
import computer4 from "@/assets/home/computer4.png";
import { useNavigate } from "react-router-dom";
export default function HomeView() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1440px] flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center h-[588px] text-[#fff] text-[48px]">
        <div className="w-[800px] text-center leading-[62px]  font-medium">
          Your Ultimate Interview Coach for Investment Banking
        </div>
        <div className="w-[700px] text-center text-[24px] mt-[18px] leading-[31px]">
          Practice your interview with simulated bankers from BB and get
          personalized feedback & coaching.
        </div>
        <div className="w-[700px] text-center text-[24px] mt-[12px] leading-[31px]">
          Stand out. Grow fast. Win big.
        </div>

        <CustomButton
          onClick={() => {
            navigate("/choose-firm");
          }}
        ></CustomButton>
      </div>

      <div className="w-[1312px] h-[720px] bg-[#1c1c24] rounded-[10px] p-[30px]">
        <div className="w-full h-[288px] bg-[#0e0d12] rounded-[24px] pt-[33px] pl-[60px] pr-[102px] flex  justify-between">
          <div className="text-[#fff] font-medium text-[18px]">
            <div className="text-[#fff] text-[36px] font-semibold">
              Mock with Bankers
            </div>
            <div>
              text: 'Stand out among 100,000+ applicants with:
              <div>
                · Mock interview sessions with simulated bankers of different
                styles available 24-7
              </div>
              <div>
                · 2,000+ previous interview questions of top investment banks'
              </div>
            </div>

            <CustomButton
              className="w-[194px] h-[50px] border-[2px] border-[#fff] mt-[16px] !text-[18px]"
              onClick={() => {
                navigate("/choose-firm");
              }}
            >
              Practice for Free
            </CustomButton>
          </div>
          <img src={computer} className="w-[300px] h-[200px]" alt="" />
        </div>

        <div className="mt-[17px] flex w-full justify-between">
          <div className="w-[612px] h-[287px] bg-[#0e0d12] rounded-[24px] flex flex-col items-center justify-center text-center">
            <div className="text-[#fff] text-[32px] font-semibold">
              Mock with Bankers
            </div>
            <div className="text-[#fff] text-[18px] font-medium">
              Get prepared with
              <div>real Hirevue questions and process</div>
            </div>
            <CustomButton className="w-[194px] h-[50px] border-[2px] border-[#fff] mt-[16px] !text-[18px]">
              Practice for Free
            </CustomButton>
          </div>
          <div className="w-[612px] h-[287px] bg-[#0e0d12] rounded-[24px] flex flex-col items-center justify-center text-center">
            <div className="text-[#fff] text-[32px] font-semibold">
              Superday Simulation
            </div>
            <div className="text-[#fff] text-[18px] font-medium">
              1:1 simulated mock superdays
              <div> with 4 back-to-back interviews</div>
            </div>
            <CustomButton className="w-[194px] h-[50px] border-[2px] border-[#fff] mt-[16px] !text-[18px]">
              Practice for Free
            </CustomButton>
          </div>
        </div>
      </div>

      <div className="w-[1312px]">
        <div className="mt-[46px] flex w-full justify-between">
          <div className="w-[612px] h-[483px] bg-[#1c1c24] rounded-[24px] flex flex-col items-center justify-center text-center">
            <div className="text-[#fff] text-[28px] font-semibold">
              Full Collection of
              <div>Past Interview Questions from BB to EB</div>
            </div>
            <img
              src={computer1}
              className="w-[448px] h-[244px] mt-[27px]"
              alt=""
            />
            <CustomButton className="w-[167px] h-[50px] border-[2px] border-[#fff] mt-[25px] !text-[18px] !font-medium">
              Try for Free
            </CustomButton>
          </div>
          <div className="w-[612px] h-[483px] bg-[#1c1c24] rounded-[24px] flex flex-col items-center justify-center text-center">
            <div className="text-[#fff] text-[28px] font-semibold">
              Personalized Report with
              <div>Question-by-Question Feedback</div>
            </div>
            <img
              src={computer2}
              className="w-[448px] h-[244px] mt-[27px]"
              alt=""
            />
            <CustomButton className="w-[167px] h-[50px] border-[2px] border-[#fff] mt-[25px] !text-[18px] !font-medium">
              Try for Free
            </CustomButton>
          </div>
        </div>
      </div>

      <div className="w-[1312px] text-center  text-[36px] font-medium text-[#fff] mt-[79px]">
        Discover Our Unmatched Advantage in Prep for IB
      </div>

      <div className="w-[1312px]  font-semibold text-[#fff] mt-[20px]">
        <div className=" text-[32px]">Comparison at a Glance</div>
        <div className="w-full flex justify-between mt-[35px]">
          <div className="w-[570px] h-[216px] bg-[#1c1c24] rounded-[24px] flex flex-col  pt-[24px] pl-[28px] pr-[26px]">
            <div className="text-[24px]">Other Mentors</div>
            <div className="w-full flex items-center justify-between text-[20px] mt-[16px]">
              <div className="font-medium">Price</div>
              <div className=" font-normal">$400–$600/hour</div>
            </div>
            <div className="w-full flex items-center justify-between text-[20px] mt-[16px]">
              <div className="font-medium">Reliability</div>
              <div className=" font-normal">Risk of cancellation or delay</div>
            </div>
            <div className="w-full flex items-center justify-between text-[20px] mt-[16px]">
              <div className="font-medium">Quality of Service</div>
              <div className=" font-normal">Depends on individual mentor</div>
            </div>
          </div>

          <div className="w-[700px] h-[216px] bg-[#1c1c24] rounded-[24px] flex flex-col  pt-[20px] pl-[31px] pr-[26px] border-[4px] border-[#4e1ea0]">
            <div className="text-[28px] leading-[36px]">
              Our Mock Interview Service
            </div>
            <div className="w-full flex items-center justify-between text-[24px] mt-[13px] leading-[31px]">
              <div className="font-medium">Price</div>
              <div className=" font-normal">As affordable as $40/hour</div>
            </div>
            <div className="w-full flex items-center justify-between text-[24px] mt-[13px] leading-[31px]">
              <div className="font-medium">Reliability</div>
              <div className=" font-normal">Always available, 24/7</div>
            </div>
            <div className="w-full flex items-center justify-between text-[24px] mt-[13px] leading-[31px]">
              <div className="font-medium">Quality of Service</div>
              <div className=" font-normal">Consistent, industry-backed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1338px] h-[288px] bg-[#1c1c24] rounded-[24px] pt-[33px] pl-[38px] pr-[33px] flex  justify-between mt-[82px]">
        <div className="text-[#fff] font-medium text-[18px]">
          <div className="text-[#fff] text-[36px] font-semibold">
            Affordable Excellence: 10x Price Advantage
          </div>
          <div className="text-[24px]">
            Typical mentors for investment banking charge between $400 to
            $600/hr.
            <div>
              'We offer the same with:{" "}
              <span className="text-[36px] text-[#a992ef]">$40/hr</span>
            </div>
          </div>

          <CustomButton className="w-[167px] h-[50px] border-[2px] border-[#fff] mt-[26px] !text-[18px]">
            Try for Free
          </CustomButton>
        </div>
        <img src={computer3} className="w-[300px] h-[200px]" alt="" />
      </div>

      <div className="w-[1338px] h-[288px] bg-[#1c1c24] rounded-[24px] pt-[33px] pl-[28px] pr-[33px] flex  justify-between mt-[47px] mb-[155px]">
        <img src={computer4} className="w-[300px] h-[200px] mr-[50px]" alt="" />

        <div className="text-[#fff] font-medium text-[18px]">
          <div className="text-[#fff] text-[32px] leading-[42px] font-semibold">
            Why Choose Us: 24-7 Reliability
          </div>
          <div className="text-[24px] leading-[36px]">
            Unlike traditional IBD mentors who may cancel or delay due to their
            workloads, we pride ourselves on being 24/7 available for your
            schedule. Whether it’s a last-minute prep or a midnight practice,
            we’re here for you.
          </div>

          <CustomButton className="w-[167px] h-[50px] border-[2px] border-[#fff] mt-[15px] !text-[18px]">
            Try for Free
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
