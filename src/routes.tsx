import AwardsPage from "./pages/awards/AwardsPage";
import ContactPage from "./pages/contact/ContactPage";
import CVPage from "./pages/cv/CVPage";
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
    index: true,
  },
  {
    path: "/awards",
    name: "Awards & Leadership",
    component: AwardsPage,
    index: true,
  },
  {
    path: "/press",
    name: "Press",
    component: PressPage,
    index: true,
  },
  {
    path: "/women-in-science",
    name: "Women in Science",
    component: WomenInSciencePage,
    index: true,
  },
  {
    path: "/cv",
    name: "CV",
    component: CVPage,
    index: true,
  },
  {
    path: "/personal",
    name: "Personal",
    component: PersonalPage,
    index: true,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
    index: true,
  },
];
