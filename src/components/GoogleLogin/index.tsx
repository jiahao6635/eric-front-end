import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import CustomButton from "../CustomButton";

const GoogleLoginButton = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <GoogleLogin></GoogleLogin>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;

const GoogleLogin = () => {
  const login = useGoogleLogin({
    onSuccess: (response) => {
      console.log("登录成功：", response);
    },
    onError: () => {
      console.error("登录失败");
    },
  });
  return (
    <CustomButton
      onClick={login}
      className="w-[536px] !h-[52px] shrink-0 mt-[20px] !rounded-[24px]"
    >
      Continue with Google
    </CustomButton>
  );
};
