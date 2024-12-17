import { useEffect, useState } from "react";
import { useUserStore } from "../../stores/userStore";
import { useMSAL } from "../../hooks/useMSAL";
import { login as loginService } from "../../services/userService";
import peopleIcon from "@/assets/home/peopleIcon.png";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import GoogleLoginButton from "@/components/GoogleLogin";
import MicrosoftLogin from "@/components/MicrosoftLogin";

export default function LoginView() {
  const token = useUserStore((state: any) => state.token);
  const setToken = useUserStore((state: any) => state.setToken);
  const setRole = useUserStore((state: any) => state.setRole);
  const setUsername = useUserStore((state: any) => state.setUsername);
  const setNickname = useUserStore((state: any) => state.setNickname);
  const url = new URL(window.location.href);

  const [loadingText, setLoadingText] = useState("Loading....");

  // 如果url的params含有code，则访问后端进行验证，拿到token
  const { msalInstance } = useMSAL();
  // const error = url.searchParams.get("error");

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    let state = url.hash;

    async function login() {
      try {
        if (!msalInstance) {
          return;
        }
        await msalInstance
          .handleRedirectPromise()
          .then(async (response) => {
            if (!response) {
              await msalInstance.loginRedirect();
            }
            if (response) {
              loginService(response.idToken)
                .then((res: any) => {
                  setLoadingText("Verifying your account...");
                  setToken(res.data.token);
                })
                .catch((err: any) => {
                  setToken("");
                  window.location.href = "/login";
                  console.log(err);
                });
              console.log("Login successful:", response);
            }
          })
          .catch((error) => {
            console.error("Error handling redirect:", error);
          });
      } catch (error) {
        console.error("MSAL Login Redirect Error: ", error);
      }
    }
    if (state) {
      console.log("state triggered", state);

      const params = new URLSearchParams(state.slice(1));
      state = params.get("state") ?? "";
      loginService(state)
        .then((res: any) => {
          setLoadingText("Verifying your account...");
          setToken(res.data.token);
        })
        .catch((err: any) => {
          setToken("");
          //   window.location.href = "/login";
          console.log(err);
        });
    } else if (code) {
      console.log("code triggered", code);
      loginService(code)
        .then((res: any) => {
          setLoadingText("Verifying your account...");
          setToken(res.data.token);
        })
        .catch((err: any) => {
          setToken("");
          //   window.location.href = "/login";
          console.log(err);
        });
    } else if (msalInstance) {
      console.log("msalInstance triggered");
      if (token) {
        // 跳转至首页
        console.log("token", token);
        setLoadingText("Redirecting...");
        // window.location.href = "/";
      } else if (state || code) {
        setLoadingText("Verifying your account...");
      } else {
        setLoadingText("Redirecting to logging page...");
        login();
      }
    }
  }, [msalInstance, token, url.searchParams]);

  return (
    <div className="w-full h-[100vh] bg-[#0e0d12] flex  flex-col items-center">
      <img
        src={peopleIcon}
        alt="people"
        className="w-[30px] h-[36px] mt-[32px]"
      />
      <div className="mt-[167px] w-[600px] h-[434px] rounded-[24px] bg-[#1c1c24] flex items-center flex-col  py-[32px]">
        <div className="text-[36px] text-[#fff] leading-[40px] font-bold">
          Register with One Click
        </div>

        <GoogleLoginButton />

        <MicrosoftLogin />

        <div className="w-[536px] flex items-center mt-[31px]">
          <div className="w-[245px] h-[1px] bg-[#6138ec]"></div>
          <div className="text-[#bbbbbe] text-[18px] leading-[24px] font-semibold mx-[12px]">
            Or
          </div>
          <div className="w-[245px] h-[1px] bg-[#6138ec]"></div>
        </div>

        <CustomInput
          placeholder="Enter your email"
          className="!rounded-[24px] !w-[536px] !h-[46px] mt-[26px] bg-[#fff]"
        />

        <CustomButton className="w-[536px] !h-[52px] shrink-0 mt-[20px] !rounded-[24px]">
          Register with Email
        </CustomButton>
      </div>
    </div>
  );
}
