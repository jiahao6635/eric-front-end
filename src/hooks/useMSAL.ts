import * as msal from "@azure/msal-browser";
import { useEffect, useState } from "react";

const b2cPolicies = {
  names: {
    signUpSignIn: `${process.env.REACT_APP_B2C_LOGIN}`,
    // forgotPassword: "b2c_1_reset",
    // editProfile: "b2c_1_edit_profile",
  },
  authorities: {
    signUpSignIn: {
      authority: `https://${process.env.REACT_APP_AUTHORITY}.b2clogin.com/${process.env.REACT_APP_AUTHORITY}.onmicrosoft.com/${process.env.REACT_APP_B2C_LOGIN}`,
    },
    // forgotPassword: {
    //     authority: "https://your-tenant-name.b2clogin.com/your-tenant-name.onmicrosoft.com/b2c_1_reset",
    // },
    // editProfile: {
    //     authority: "https://your-tenant-name.b2clogin.com/your-tenant-name.onmicrosoft.com/b2c_1_edit_profile"
    // }
  },
  authorityDomain: `${process.env.REACT_APP_AUTHORITY}.b2clogin.com`,
};

const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID ?? "",
    authority: b2cPolicies.authorities.signUpSignIn.authority, // 替换为你的 B2C 策略
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: process.env.REACT_APP_REDIRECT_URI ?? "", // 确保与 Azure 配置的 URI 一致
  },
  cache: {
    cacheLocation: "localStorage", // 或 "sessionStorage"
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: any, message: any, containsPii: any) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case msal.LogLevel.Error:
            console.error(message);
            return;
          case msal.LogLevel.Info:
            console.info(message);
            return;
          case msal.LogLevel.Verbose:
            console.debug(message);
            return;
          case msal.LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

export const useMSAL = () => {
  const [msalInstance, setMsalInstance] =
    useState<msal.PublicClientApplication>();
  useEffect(() => {
    const initializeMsal = async () => {
      const msalClient = new msal.PublicClientApplication(msalConfig);
      msalClient.initialize().then(() => setMsalInstance(msalClient));
    };

    initializeMsal();
  }, []);
  return { msalInstance };
};
