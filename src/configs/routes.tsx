import LoginView from "../views/loginView";
import Home1 from "@/views/Home";
import PublicLayout from "@/components/PublicLayout";
import Coin from "@/views/Coin";
import CreateToken from "@/views/Home/CreateToken";
import CreateGame from "@/views/CreateGame";

export const routes = [
  {
    path: "/login",
    type: "public",
    component: (
      <PublicLayout>
        <LoginView />
      </PublicLayout>
    ),
  },
  {
    path: "/home",
    type: "public",
    component: (
      <PublicLayout>
        <Home1 />
      </PublicLayout>
    ),
  },
  {
    path: "/",
    type: "public",
    component: (
      <PublicLayout>
        <Home1 />
      </PublicLayout>
    ),
  },
  {
    path: "/coin/:id",
    type: "public",
    component: (
      <PublicLayout>
        <Coin />
      </PublicLayout>
    ),
  },
  {
    path: "/create-token",
    type: "public",
    component: (
      <PublicLayout>
        <CreateToken />
      </PublicLayout>
    ),
  },
  {
    path: "/create-game",
    type: "public",
    component: (
      <PublicLayout>
        <CreateGame />
      </PublicLayout>
    ),
  },
];
