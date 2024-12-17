import ChooseFirm from "@/views/ChooseFirm";
import HomeView from "../views/HomeView";
import InterviewView from "../views/InterviewView";
import LoginView from "../views/loginView";
import ChooseInterviewer from "@/views/ChooseInterviewer";
import UploadResume from "@/views/UploadResume";
import Congratulations from "@/views/Congratuations";
import Home from "@/views/Personal/components/Home";
import Personal from "@/views/Personal";
import PublicLayout from "@/components/PublicLayout";
import InterviewDrill from "@/views/Personal/components/InterviewDrill";
import Reports from "@/views/Personal/components/Reports";
import PersonalLayout from "@/components/Layout/PersonalLayout";
import Analysis from "@/views/Personal/components/ReportComponent/Analysis";
import ReportProgress from "@/views/Personal/components/ReportComponent/ReportProgress";
import Overview from "@/views/Personal/components/ReportComponent/Overview";
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
        <HomeView />
      </PublicLayout>
    ),
  },
  {
    path: "/",
    type: "public",
    component: (
      <PublicLayout>
        <HomeView />
      </PublicLayout>
    ),
  },
  {
    path: "/interview",
    type: "public",
    component: (
      <PublicLayout>
        <InterviewView />
      </PublicLayout>
    ),
  },
  {
    path: "/congratulations",
    type: "public",
    component: (
      <PublicLayout>
        <Congratulations />
      </PublicLayout>
    ),
  },
  {
    path: "/create-game",
    type: "public",
    component: <CreateGame />,
  },
];
