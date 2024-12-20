import { useState } from "react";
import logo from "@/assets/fun/logo.png";
import SearchInput from "@/components/input";
import ConnectButton from "@/assets/fun/ConnectButton.png";
import { Search } from "lucide-react";
import HowToFun from "./HowToFun";
import ForgeButton from "../../../components/GlowButton";

const Header = () => {
  const [show, setShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className="w-full h-[88px] flex items-center justify-between px-[120px]">
        <div className="flex items-center text-[18px] text-[#fff] font-bold">
          <img src={logo} className="w-[30px] h-[30px]" alt="" />
          <div className="ml-[14px]">gAlme.fun</div>
          <div
            className="ml-[96px] text-[14px] font-medium cursor-pointer"
            onClick={() => setShow(true)}
          >
            How to fun
          </div>
        </div>

        {isLogin ? (
          <div className="flex items-center">
            <SearchInput
              icon={
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666a6a] w-[16px] h-[18px]" />
              }
            />
            <img
              src={ConnectButton}
              className="w-[133px] h-[42px] ml-[24px] cursor-pointer"
              alt=""
            />
          </div>
        ) : (
          <div className="flex items-center">
            <ForgeButton
              onClick={() => setIsLogin(true)}
              className="!w-[100px] !h-[42px] !text-[14px]"
            >
              Buy Game
            </ForgeButton>
          </div>
        )}
      </div>

      <HowToFun show={show} setShow={setShow}></HowToFun>
    </>
  );
};

export default Header;
