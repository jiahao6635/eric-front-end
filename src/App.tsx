import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { routes as routesConfig } from "./configs/routes";
import LoginView from "./views/loginView";
import { useUserStore } from "./stores/userStore";
import Navbar from "./views/HomeView/Navbar";

function App() {
  const token = useUserStore((state: any) => state.token);

  // if (!token) {
  //   return <LoginView />;
  // }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    if (route.redirect) {
      return (
        <Route
          key={index}
          path={route.path}
          element={<Navigate to={route.redirect} />}
        />
      );
    }

    return (
      <Route key={index} path={route.path} element={route.component}>
        {route.children && renderRoutes(route.children)} 
      </Route>
    );
  });
};

function AppContent() {
  const location = useLocation();
  return (
    <div className="w-full h-full">
      {location?.pathname == "/home" && <Navbar></Navbar>}
      <Routes>{renderRoutes(routesConfig)}</Routes>
    </div>
  );
}
