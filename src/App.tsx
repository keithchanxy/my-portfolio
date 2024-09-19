import { Button } from "@/components/ui/button";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { cn } from "./lib/utils";

export const App = () => {
  return (
    <div className="h-screen w-screen">
      <BrowserRouter>
        <TopBar />
        <div className="flex flex-row h-full">
          <SideBar />

          <Routes>
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/portfolio" />} />
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
          href="/portfolio"
          className={cn("text-xl text-gray-400", {
            "text-gray-800": location.pathname === "/portfolio",
          })}
        >
          Portfolio
        </a>
      </Button>

      <Button asChild variant={"ghost"}>
        <a
          href="/about"
          className={cn("text-xl text-gray-400", {
            "text-gray-800": location.pathname === "/about",
          })}
        >
          About
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
          <p className="font-semibold text-3xl">Keith Chan</p>
          <p className="text-gray-500">Computational Design Specialist</p>
        </div>

        <Button asChild variant={"ghost"}>
          <a
            href="/portfolio"
            className={cn("text-xl text-gray-400", {
              "text-gray-800": location.pathname === "/portfolio",
            })}
          >
            Portfolio
          </a>
        </Button>

        <Button asChild variant={"ghost"}>
          <a
            href="/about"
            className={cn("text-xl text-gray-400", {
              "text-gray-800": location.pathname === "/about",
            })}
          >
            About
          </a>
        </Button>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className={"px-4 ml-0 max-w-[800px] md:ml-[400px]"}>
      {/* Top Spacer */}
      <div className="h-20" />

      {/* Page title */}
      <h1 className={"text-4xl font-bold mb-10"}>Portfolio</h1>

      {/* Projects */}
      <div className="flex flex-col gap-20">
        <div>
          <p className="text-2xl font-semibold">
            Dynamic Parametric Façade Design
          </p>
          <p>
            The aim of the project is to develop an approach using Dynamo, for
            concept design, to generate dynamic façades, incorporating Envelope
            Thermal Transfer Value (ETTV) and Acoustic Rating analysis to
            enhance the design process and performance analysis of building
            façades for feasibility studies.
          </p>
          <p className={"mt-4 font-semibold"}>My Role</p>
          <ul className={"list-disc"}>
            <li>
              Organized stand-up sessions with subject matter experts (SMEs) to
              better understand façade design and performance analysis.
            </li>
            <li>
              Designed and implemented Dynamo scripts using Python to automate
              the generation of parametric façade designs.
            </li>
            <li>
              Integrated performance metrics into the model for Envelope Thermal
              Transfer Value (ETTV) and acoustic analysis.
            </li>
            <li>
              Validate the scripts by comparing their outputs with performance
              benchmarks and refined them based on feedback.
            </li>
          </ul>
          <p className={"mt-4 font-semibold"}>Tools and Technologies</p>
          <ul className={"list-disc"}>
            <li>
              <span className="font-medium">Software: </span>Revit, Dynamo
            </li>
            <li>
              <span className="font-medium">Languages: </span>Python
            </li>
          </ul>
          <p className={"mt-4 font-semibold"}>Outcomes</p>
          <p>
            The scripts were well received by the Façade team, with constructive
            feedback provided for further enhancement. For concept design
            purposes, they reduced façade design and performance evaluation time
            by 50%, significantly boosting both efficiency and accuracy. The
            automation of performance metrics enabled the team to make faster,
            more informed design decisions, ultimately improving the overall
            project outcomes.
          </p>
        </div>

        <div>
          <p className="text-2xl font-semibold">
            Automate Revit Model Comparison
          </p>
          <p>
            Comparing between different Revit project versions manually can be
            time consuming and inaccurate. The aim of this project is to
            implement Dynamo scripts to automate the comparison between outdated
            and updated Revit models, significantly reducing comparison time and
            improving data reconciliation accuracy for architectural and
            engineering projects.
          </p>
          <p className={"mt-4 font-semibold"}>My Role</p>
          <ul className={"list-disc"}>
            <li>
              Collaborated with the BIM team to ensure the solution met the
              specific needs of both architectural and engineering disciplines.
            </li>
            <li>
              Designed and developed Dynamo scripts to automate model comparison
              between outdated and updated Revit models.
            </li>
            <li>
              Streamlined the workflow to reduce manual data handling and
              improve accuracy in model reconciliation.
            </li>
            <li>
              Tested and refined the scripts based on feedback to ensure optimal
              performance and data accuracy.
            </li>
          </ul>
          <p className={"mt-4 font-semibold"}>Tools and Technologies</p>
          <ul className={"list-disc"}>
            <li>
              <span className="font-medium">Software: </span>Revit, Dynamo
            </li>
            <li>
              <span className="font-medium">Languages: </span>Python
            </li>
          </ul>
          <p className={"mt-4 font-semibold"}>Outcomes</p>
          <p>
            The scripts reduced comparison time from hours to minutes,
            significantly improving the accuracy of capturing building
            information across Revit models. This approach minimized human error
            and greatly increased work efficiency for team members. The success
            of the scripts led the BIM team to request a presentation to explore
            how computational design and tools could add value to their daily
            workflows.
          </p>
        </div>

        <div>
          <p className="text-2xl font-semibold">
            Dynamic Industrial Building Configurations and Parcelization
            Strategies
          </p>
          <p>
            JTC's architects currently generate multiple concept design
            variations for industrial buildings manually, while adhering to site
            constraints and building codes. The aim of this project is to
            develop Grasshopper scripts to automate the creation of dynamic
            industrial building configurations and optimize site parcelization
            for feasibility studies. This automation will reduce reliance on
            manual 2D modelling of various scenarios, significantly decreasing
            time spent and increasing modelling efficiency.
          </p>
          <p className={"mt-4 font-semibold"}>My Role</p>
          <ul className={"list-disc"}>
            <li>
              Collaborated with a team of 2 architects, coordinating efforts
              across design, scripting, and testing to ensure smooth
              implementation of Grasshopper scripts for dynamic building
              configurations and site parcelization strategies.
            </li>
            <li>
              Organized stand-up sessions to understand site-specific
              requirements and various building code, ensuring that the
              parametric models adhered to feasibility study criteria.
            </li>
            <li>
              Kept the team informed with regular progress updates and validated
              the script outputs, facilitating constructive feedback and
              enabling more informed decision-making for continuous product
              improvement.
            </li>
            <li>
              Conducted research to enhance the product by improving the user
              interface and user experience (UI/UX).
            </li>
          </ul>
          <p className={"mt-4 font-semibold"}>Tools and Technologies</p>
          <ul className={"list-disc"}>
            <li>
              <span className="font-medium">Software: </span>Grasshopper, Rhino
            </li>
            <li>
              <span className="font-medium">Languages: </span> C#
            </li>
          </ul>
          <p className={"mt-4 font-semibold"}>Outcomes</p>
          <p>
            The scripts reduced comparison time from hours to minutes,
            significantly improving the accuracy of capturing building
            information across Revit models. This approach minimized human error
            and greatly increased work efficiency for team members. The success
            of the scripts led the BIM team to request a presentation to explore
            how computational design and tools could add value to their daily
            workflows.
          </p>
        </div>

        <div>
          <p className="text-2xl font-semibold">
            Third-Party Grasshopper Plugins for interoperability with Podium
          </p>
          <p>
            The goal of this project was to design and develop customizable
            third-party Grasshopper components and plugins using advanced C#
            scripting and object-oriented programming techniques for in-house
            use. The primary focus was to enable seamless interoperability
            between Rhino/Grasshopper and Podium's in-house environment,
            facilitating easy data identification and significantly reducing the
            need for manual checks.
          </p>
          <p className={"mt-4 font-semibold"}>My Role</p>
          <ul className={"list-disc"}>
            <li>
              Led the development of customizable Grasshopper components and
              plugins, utilizing advanced scripting techniques (C#) and
              object-oriented programming techniques in Visual Studio to enhance
              interoperability between Rhino/Grasshopper and Podium's in-house
              systems.
            </li>
            <li>
              Collaborated closely with software engineers to understand
              Podium's data representation, ensuring seamless and functional
              interoperability between Grasshopper and Podium.
            </li>
            <li>
              Kept the team informed with regular progress updates and validated
              the script outputs, facilitating constructive feedback and
              enabling more informed decision-making for continuous product
              improvement.
            </li>
            <li>
              Tested and refined the scripts based on feedback to ensure optimal
              performance and data accuracy.
            </li>
          </ul>
          <p className={"mt-4 font-semibold"}>Tools and Technologies</p>
          <ul className={"list-disc"}>
            <li>
              <span className="font-medium">Software: </span>Grasshopper, Rhino,
              Visual Studio
            </li>
            <li>
              <span className="font-medium">Languages: </span> C#
            </li>
          </ul>
          <p className={"mt-4 font-semibold"}>Outcomes</p>
          <p>
            The project successfully enabled seamless integration between
            Rhino/Grasshopper and Podium’s internal environment, significantly
            enhancing project efficiency. This allowed the team to focus on
            higher-value tasks while minimizing the risk of human error during
            data processing. The solution received high praise, achieving a 50%
            reduction in time spent on manual checks and data identification
            across JSON files.
          </p>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-20" />
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className={"px-4 ml-0 max-w-[800px] md:ml-[400px]"}>
      {/* Bottom spacer */}
      <div className="h-20" />

      {/* Page title */}
      <h1 className={"text-4xl font-bold mb-10 mt-20"}>About me</h1>

      {/* About me Description */}
      <p className="mb-4">Hi I'm Keith.</p>
      <p className="mb-4">
        My journey into computational design began during my internship at
        Witteveen+Bos, where I discovered the potential of algorithm-driven
        design to automate repetitive tasks and streamline design processes.
        This sparked a deep interest in computational tools, leading me to
        self-learn about visual programming platforms like Grasshopper and
        Dynamo, high level programming languages such as C# and Python, and
        apply them in my academic and professional projects.
      </p>
      <p className="mb-4">
        Since then, with over 4 years of experience in computational design,
        I've had the opportunity to work with industry leaders like Lendlease
        Singapore (Podium), JTC Corporation, and Mott MacDonald Singapore, where
        I have designed and developed custom Grasshopper plugins, automated BIM
        workflows, and integrated computational design techniques to solve
        complex challenges.
      </p>
      <p className="mb-4">
        Outside of work, I stay active with road cycling, hiking, and running,
        which help me unwind and connect with nature. I also enjoy videography
        and photography, capturing everyday moments and landscapes. These
        activities provide a refreshing break and offer a new perspective on the
        world around me. I am passionate and a firm believer that computational
        design is more than just a tool—it's a means of rethinking how we design
        and build. Thanks for stopping by.
      </p>

      {/* Bottom spacer */}
      <div className="h-20" />
    </div>
  );
};

export default App;
