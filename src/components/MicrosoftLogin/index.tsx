// src/App.tsx
import React from "react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import CustomButton from "../CustomButton";

// 配置 MSAL
const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID", // 替换为你的客户端 ID
    authority: "https://login.microsoftonline.com/common", // 或指定租户 ID
    redirectUri: "http://localhost:3000", // 替换为你的重定向 URI
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const MicrosoftLogin = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <div className="App">
        <MicrosoftLoginButton />
      </div>
    </MsalProvider>
  );
};

export default MicrosoftLogin;

const MicrosoftLoginButton = () => {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      const loginResponse = await instance.loginPopup({
        scopes: ["User.Read"], // 请求的权限
      });
      console.log("登录成功：", loginResponse);
    } catch (error) {
      console.error("登录失败：", error);
    }
  };

  return (
    <CustomButton
      onClick={handleLogin}
      className="w-[536px] !h-[52px] shrink-0 mt-[20px] !rounded-[24px]"
    >
      Continue with Microsoft
    </CustomButton>
  );
};
