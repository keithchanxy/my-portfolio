import { Button } from "@/components/ui/button";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { cn } from "./lib/utils";
import './index.css';
import { HomePage } from "./Home";
import { AboutPage } from "./About";
import { ContactPage } from "./Contact";
import { ProjectsPage } from "./Projects";

export const App = () => {
  return (
    <div className="h-screen w-screen">
      <BrowserRouter>
        <TopBar />
        <div className="flex flex-row h-full">
          <SideBar />

          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export const TopBar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 w-full p-4 items-center gap-4 bg-white md:hidden">
      <Button asChild variant={"ghost"}>
        <a
          href="/home"
          className={cn("text-xl text-gray-400", {
            "text-gray-800": location.pathname === "/home",
          })}
        >
          Home
        </a>
      </Button>
      
      <Button asChild variant={"ghost"}>
        <a
          href="/about"
          className={cn("text-xl text-gray-400", {
            "text-gray-800": location.pathname === "/about",
          })}
        >
          About Me
        </a>
      </Button>

      <Button asChild variant={"ghost"}>
        <a
          href="/projects"
          className={cn("text-xl text-gray-400", {
            "text-gray-800": location.pathname === "/projects",
          })}
        >
          Projects
        </a>
      </Button>

      <Button asChild variant={"ghost"}>
        <a
          href="/contact"
          className={cn("text-xl text-gray-400", {
            "text-gray-800": location.pathname === "/contact",
          })}
        >
          Contact Me
        </a>
      </Button>
    </div>
  );
};

export const SideBar = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 h-screen w-[400px] hidden md:flex justify-center items-center">
      <div className="flex flex-col items-start gap-4 p-4">
        <div className="p-4">
          {/* <p className="font-semibold text-3xl">Keith Chan</p>
          <p className="text-gray-500">Computational Design Specialist</p> */}
        </div>

        <Button asChild variant={"ghost"}>
          <a
            href="/home"
            className={cn("text-xl text-gray-400", {
              "text-gray-800": location.pathname === "/home",
            })}
          >
            Home
          </a>
        </Button>

        <Button asChild variant={"ghost"}>
          <a
            href="/about"
            className={cn("text-xl text-gray-400", {
              "text-gray-800": location.pathname === "/about",
            })}
          >
            About Me
          </a>
        </Button>

        <Button asChild variant={"ghost"}>
          <a
            href="/projects"
            className={cn("text-xl text-gray-400", {
              "text-gray-800": location.pathname === "/projects",
            })}
          >
            Projects
          </a>
        </Button>

        <Button asChild variant={"ghost"}>
          <a
            href="/contact"
            className={cn("text-xl text-gray-400", {
              "text-gray-800": location.pathname === "/contact",
            })}
          >
            Contact Me
          </a>
        </Button>
      </div>
    </div>
  );
};

export default App;
