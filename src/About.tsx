import About01 from "./assets/About01.jpg";
import About02 from "./assets/About02.jpg";
import About03 from "./assets/About03.jpg";
import About04 from "./assets/About04.jpg";
import About05 from "./assets/About05.jpg";

export const AboutPage = () => {
  return (
    <div className={"px-4 ml-0 max-w-[800px] md:ml-[400px] "}>
      {/* Top spacer */}
      <div className="h-20" />

      {/* Page title */}
      <h1 className={"text-5xl font-extrabold text-cyan-500 mb-10 mt-10"}>About Me</h1>

      {/* About me Description */}
      {/* <p className="mb-4">
          Hi I'm Keith.
        </p> */}
      <p className="text-justify mb-4">
        What began as a graduate journey in Sustainable Infrastructure Engineering 
        (Building Services) from Singapore Institute of Technology quickly transformed 
        into a deep passion for digital solutions within the built environment. I am dedicated 
        to leveraging computational design and algorithm-driven techniques to expand what’s 
        possible in architecture and engineering. 
      </p>
      <p className="text-justify mb-4">
        Captivated by the potential of computational tools to streamline processes, automate tasks, 
        and inform decision-making, I expanded my expertise through self-teaching tools like Grasshopper 
        and Dynamo, as well as developing proficiency in C# and Python. These skills have empowered me to 
        lead impactful projects—such as the Revit Model Checker, Automated Industrial Building Generation, 
        and data-driven solutions for 4D-5D BIM—that demonstrate my commitment to advancing innovation 
        and efficiency in BIM and automation. 
      </p>
      <p className="text-justify mb-4">
        With over 4 years of experience in computational design and computational BIM,
        I've had the opportunity to work with industry leaders like Lendlease Digital Asia (Podium), 
        JTC Corporation, Mott MacDonald Singapore and Witteveen+Bos Singapore. Known for my adaptability 
        and enthusiasm for new challenges, I continually push my technical boundaries to optimize workflows 
        and drive meaningful results. With a proactive approach to learning and a versatile skillset, 
        I strive to bring innovative, efficient solutions to every project I undertake. 
      </p>
      <p className="text-justify mb-4">
        Outside of work, I stay active with road cycling, hiking, and running,
        which help me unwind and connect with nature. I also enjoy videography
        and photography, capturing everyday moments and landscapes. These
        activities provide a refreshing break and offer a new perspective on the
        world around me. I am passionate and a firm believer that computational
        design is more than just a tool—it's a means of rethinking how we design
        and build.
      </p>
      <p className="text-justify mb-10">
        Thanks for stopping by!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Image 1 */}
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
          <img
            src={About01}
            alt="Your Image Description"
            className="w-full h-full object-cover">
          </img>
        </div>

        {/* Image 2 */}
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
        <img
            src={About02}
            alt="Your Image Description"
            className="w-full h-full object-cover">
          </img>
        </div>

        {/* Image 3 */}
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
        <img
            src={About03}
            alt="Your Image Description"
            className="w-full h-full object-cover">
          </img>
        </div>

        {/* Image 4 */}
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
        <img
            src={About04}
            alt="Your Image Description"
            className="w-full h-full object-cover">
          </img>
        </div>

        {/* Image 5 */}
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
        <img
            src={About05}
            alt="Your Image Description"
            className="w-full h-full object-cover">
          </img>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-20" />

    </div>
  );
}
