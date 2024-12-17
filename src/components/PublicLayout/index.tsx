import { useLocation } from "react-router-dom";
import { routes as routesConfig } from "../../configs/routes";
import Navbar from "../../views/HomeView/Navbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideNavbarRoutes = routesConfig
    ?.filter((route) => route.type === "public")
    .map((route) => route.path);
  const showNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div
      className=" w-full  overflow-x-hidden flex flex-col items-center custom"
      style={{
        background: showNavbar ? "#0e0d12" : "#fff",
      }}
    >
      <div
        className="w-full"
        style={{
          maxWidth: showNavbar ? "1440px" : "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PublicLayout;
