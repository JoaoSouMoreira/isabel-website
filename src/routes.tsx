import AwardsPage from "./pages/awards/AwardsPage";
import ContactPage from "./pages/contact/ContactPage";
import ResumePage from "./pages/resume/ResumePage";
import HomePage from "./pages/home/HomePage";
import PersonalPage from "./pages/personal/PersonalPage";
import PressPage from "./pages/press/PressPage";
import ResearchPage from "./pages/research/ResearchPage";
import WomenInSciencePage from "./pages/women-in-science/WomenInSciencePage";

interface Route {
  path: string;
  name: string;
  component: React.ComponentType;
  index?: boolean;
  title?: string;
  shouldHide?: boolean;
}

export const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    index: true,
    title: "Isabel Castanho - Home",
  },
  {
    path: "/research",
    name: "Research & Publications",
    component: ResearchPage,
    index: false,
  },
  {
    path: "/awards",
    name: "Awards & Leadership",
    component: AwardsPage,
    index: false,
  },
  {
    path: "/press",
    name: "Press & Media",
    component: PressPage,
    index: false,
  },
  {
    path: "/women-in-science",
    name: "Women in Science",
    component: WomenInSciencePage,
    index: false,
  },
  {
    path: "/resume",
    name: "Resume",
    component: ResumePage,
    index: false,
  },
  {
    path: "/personal",
    name: "Personal",
    component: PersonalPage,
    index: false,
    shouldHide: true,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
    index: false,
  },
];
