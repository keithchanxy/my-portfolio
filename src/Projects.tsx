import ProjectImage01 from "./assets/ProjectImage01.png";

export const ProjectsPage = () => {
    return (
        <div className={"px-4 ml-0 max-w-[800px] md:ml-[400px]"}>
            {/* Top Spacer */}
            <div className="h-20" />

            {/* Page title */}
            <h1 className={"text-5xl font-extrabold text-cyan-500 mb-10 mt-10"}>Projects</h1>

            {/* Projects */}
            <div className="flex flex-col gap-20">
                <div>
                    <p className="text-3xl font-semibold mb-5">Dynamic Parametric Façade Design</p>
                    <p className="text-justify mb-4">
                        The project’s goal is to leverage Dynamo's computational design 
                        capabilities for generating dynamic façades in the concept design 
                        stage, integrating performance metrics like Envelope Thermal Transfer 
                        Value (ETTV) and Acoustic Rating. By embedding ETTV and Acoustic Rating 
                        analyses within the façade design process in Dynamo, this project aims 
                        to create a comprehensive, adaptable, and efficient approach for evaluating 
                        and optimizing façades in concept design. This approach is expected to 
                        enhance the quality and sustainability of building envelopes, contributing 
                        to both energy conservation and occupant comfort. 
                    </p>
                    <div className="flex items-center justify-center mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/GcBnghnF1Hw?si=EhhMFkwHLFeIR7L1" title="YouTube video player"></iframe>
                    </div>
                    <p className={"text-2xl font-semibold mb-3"}>Responsibilities</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4 gap-y-4 space-y-4"}>
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
                    <p className={"text-2xl font-semibold mb-3"}>Tools</p>
                    <ul className={"ml-10 list-disc mb-4"}>
                        <li>
                            <span className="font-medium">Design and Modelling Tools: </span>Revit
                        </li>
                        <li>
                            <span className="font-medium">Visual Programming Tools: </span>Dynamo
                        </li>
                        <li>
                            <span className="font-medium">Programming Languages: </span>Python
                        </li>
                    </ul>
                    <p className={"text-2xl font-semibold mb-3"}>Results and Impact</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4 gap-y-4 space-y-4"}>
                        <li>
                            Automating calculations for metrics such as Envelope Thermal Transfer 
                            Value (ETTV) and Acoustic Rating not only saved time but also increased 
                            accuracy. The scripts standardized calculations, minimizing the risk of 
                            human error that often accompanies manual data entry and analysis. 
                        </li>
                        <li>
                            By automating key aspects of façade design and performance evaluation, 
                            the scripts reduced the time needed to complete concept design tasks by 
                            50%. This significant time savings enabled the Façade team to iterate 
                            through design options more rapidly, focusing more on creative 
                            exploration rather than repetitive, time-consuming calculations. 
                        </li>
                        <li>
                            The scripts also provided a rapid means of evaluating multiple design 
                            variations, allowing for side-by-side comparisons of different façade 
                            options. This streamlined approach minimized manual work, helping designers 
                            manage complex design variables like shading, material properties, and 
                            geometric configurations with ease. 
                        </li>
                    </ul>
                    <p className="text-justify">
                        The scripts developed for façade design and performance analysis were 
                        enthusiastically received by the Façade team, who recognized their potential 
                        to streamline workflows and enhance project outcomes. Through constructive 
                        feedback, the team identified additional enhancements that could further 
                        align the scripts with specific design requirements, ensuring a more 
                        tailored and effective tool. 
                    </p>
                </div>


                <div className="border-t border-black"></div>

                <div>
                    <p className="text-3xl font-semibold mb-5">Automate Revit Model Comparison</p>

                    <p className="text-justify mb-4">
                        The project aims to develop and implement a suite of Dynamo scripts that 
                        automate the comparison process between different versions of Revit models. 
                        This automated comparison will enable architects, engineers, and BIM managers 
                        to quickly identify changes, discrepancies, and updates between outdated and 
                        updated Revit models, reducing manual effort and enhancing accuracy in data 
                        reconciliation. By eliminating the need for manual review, the project will 
                        streamline quality control and ensure consistency across project documentation 
                        and deliverables. This solution will ultimately contribute to higher-quality 
                        project deliverables, improved resource allocation, and a more streamlined design 
                        and engineering workflow. 
                    </p>
                    <div className="flex items-center justify-center mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/rSzh_vKSAzw?si=xiGJ2cyx7P2hnYdI" title="YouTube video player"></iframe>
                    </div>
                    <p className={"text-2xl font-semibold mb-3"}>Responsibilities</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4 gap-y-4 space-y-4"}>
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
                    <p className={"text-2xl font-semibold mb-3"}>Tools</p>
                    <ul className={"ml-10 list-disc mb-4"}>
                        <li>
                            <span className="font-medium">Design and Modelling Tools: </span>Revit
                        </li>
                        <li>
                            <span className="font-medium">Visual Programming Tools: </span>Dynamo
                        </li>
                        <li>
                            <span className="font-medium">Programming Languages: </span>Python
                        </li>
                    </ul>
                    <p className={"text-2xl font-semibold mb-3"}>Results and Impact</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4 gap-y-4 space-y-4"}>
                        <li>
                            The reduction in time spent on model comparisons allowed team members to 
                            refocus their efforts on higher-value tasks. With comparison times cut down 
                            to less than 10 minutes, team members could perform checks more frequently 
                            and seamlessly integrate updates without the time burden previously associated 
                            with such tasks.
                        </li>
                        <li>
                            By automating the comparison process, the Dynamo scripts greatly minimized the 
                            potential for human error, which is a common challenge with manual checks. 
                            Even small discrepancies that might go unnoticed in a manual review were consistently 
                            flagged by the automated scripts, leading to a higher level of data fidelity. 
                        </li>
                        <li>
                            The automated scripts allowed team members to complete comparisons with minimal effort, 
                            significantly lightening their workloads. As a result, productivity increased, as 
                            team members could dedicate their expertise to design development, coordination, and 
                            quality control rather than manual model auditing. 
                        </li>
                    </ul>
                    <p className="text-justify">
                        Overall, the automation of Revit model comparisons through Dynamo scripts not only delivered immediate 
                        time and accuracy benefits but also sparked a cultural shift toward computational design within the team. 
                        By demonstrating the tangible impact of automation on project outcomes, the project paved the way for a 
                        broader adoption of computational tools, driving efficiency, collaboration, and continuous improvement 
                        across architectural and engineering workflows. 
                    </p>
                </div>

                <div className="border-t border-black"></div>

                <div>
                    <p className="text-3xl font-semibold mb-5">Dynamic Industrial Building Configurations and Parcelization Strategies</p>
                    <p className="text-justify mb-4">
                        The project focuses on designing and developing Grasshopper scripts to automate the 
                        generation of dynamic industrial building configurations for JTC’s architects. 
                        By automating this process, the team will be able to rapidly generate multiple 
                        design variations that adhere to site constraints and building codes, reducing 
                        the time spent on manual modeling and increasing the efficiency and consistency 
                        of their feasibility studies. This approach not only supports faster decision-making 
                        but also optimizes site parcelization to maximize usable space and ensure regulatory 
                        compliance. 
                    </p>
                    <div className="flex items-center justify-center mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nFo_uZMeClU?si=Ec-k75gwT9jYxkQl" title="YouTube video player"></iframe>
                    </div>
                    <p className={"text-2xl font-semibold mb-3"}>Responsibilities</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4 gap-y-4 space-y-4"}>
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
                    <p className={"text-2xl font-semibold mb-3"}>Tools</p>
                    <ul className={"ml-10 list-disc mb-4"}>
                        <li>
                            <span className="font-medium">Design and Modelling Tools: </span>Rhino
                        </li>
                        <li>
                            <span className="font-medium">Visual Programming Tools: </span>Grasshopper
                        </li>
                        <li>
                            <span className="font-medium">Programming Languages: </span>C#
                        </li>
                    </ul>
                    <p className={"text-2xl font-semibold mb-3"}>Results and Impact</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4 gap-y-4 space-y-4"}>
                        <li>
                            By reducing scenario generation time from days to mere minutes, the Grasshopper scripts 
                            allowed architects to work more flexibly and iteratively. This time savings fundamentally 
                            shifted the concept design process, enabling rapid experimentation with various 
                            configurations, layouts, and building parameters.
                        </li>
                        <li>
                            In addition to broadening the scope of designs, the automation allowed for thorough exploration 
                            of alternative configurations, factoring in site constraints, orientation, sustainability goals, 
                            and spatial requirements. This comprehensive approach led to higher-quality designs tailored to 
                            both client expectations and environmental considerations.  
                        </li>
                        <li>
                            The success of these Grasshopper scripts created a solid foundation for expanding automation 
                            capabilities across other design processes in the future. The team gained valuable experience 
                            in computational design, which could be applied to other projects or design challenges, enhancing 
                            the organization’s capacity to innovate.
                        </li>
                    </ul>
                    <p className="text-justify">
                        The implementation of the Grasshopper scripts drastically reduced scenario generation time from days to minutes, 
                        enhancing user efficiency and satisfaction while enabling architects to explore a wider range of design options. 
                        This automation led to faster project iterations, better decision-making, and improved collaboration across departments. 
                        By streamlining the concept design phase, the project fostered a data-driven, efficient, and innovative approach to 
                        architectural design, significantly elevating both the quality of work and the overall project outcomes.
                    </p>
                </div>

                <div className="border-t border-black"></div>

                <div>
                    <p className="text-3xl font-semibold mb-5">Third-Party Grasshopper Plugins for interoperability with Podium</p>
                    <p className="text-justify mb-4">
                        The goal of this project was to design and develop customizable third-party 
                        Grasshopper components and plugins using advanced C# scripting and 
                        object-oriented programming (OOP) techniques to enhance in-house design workflows. 
                        The primary objective was to enable seamless interoperability between Rhino/Grasshopper 
                        and Podium's in-house environment, providing a more efficient and automated approach to 
                        data management. By automating data identification and minimizing manual checks, the 
                        components streamlined the design and analysis process, resulting in increased efficiency, 
                        accuracy, and consistency. Additionally, their scalability and adaptability ensure that 
                        these tools can continue to add value to Podium’s workflows for future projects. 
                    </p>
                    <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-4">
                        <img
                            src={ProjectImage01}
                            alt="Your Image Description"
                            className="w-full h-full object-cover">
                        </img>
                    </div>
                    <p className={"text-2xl font-semibold mb-3"}>Responsibilities</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4 gap-y-4 space-y-4"}>
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
                    <p className={"text-2xl font-semibold mb-3"}>Tools</p>
                    <ul className={"ml-10 list-disc mb-4"}>
                        <li>
                            <span className="font-medium">Design and Modelling Tools: </span>Rhino, Visual Studio
                        </li>
                        <li>
                            <span className="font-medium">Visual Programming Tools: </span>Grasshopper
                        </li>
                        <li>
                            <span className="font-medium">Programming Languages: </span>C#
                        </li>
                    </ul>
                    <p className={"text-2xl font-semibold mb-3"}>Results and Impact</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4 gap-y-4 space-y-4"}>
                        <li>
                            One of the most significant outcomes was the 50% reduction in time spent on manual checks 
                            and data identification, particularly across JSON files. This time-saving allowed the team 
                            to redirect their efforts toward higher-value tasks, such as conceptual design, creative 
                            problem-solving, and technical optimization. Tasks that once consumed hours of manual verification 
                            now required only minutes of automated processing, effectively doubling the amount of productive 
                            time available for the team. 
                        </li>
                        <li>
                            The automation significantly reduced the risk of human error, which is common when manually processing 
                            large datasets or performing repeated checks. Manual tasks like data entry and verification, which are 
                            prone to oversight, were automated through the Grasshopper components, ensuring that critical design 
                            parameters and data points were accurately identified and flagged. This improvement led to fewer mistakes, 
                            less rework, and greater confidence in the integrity of the design data.  
                        </li>
                    </ul>
                    <p className="text-justify">
                        The project successfully integrated Rhino/Grasshopper with Podium’s internal 
                        environment, significantly enhancing the efficiency, accuracy, and quality of 
                        the design process. By automating manual data checks and identification, the 
                        solution reduced the risk of errors, sped up decision-making, and enabled the 
                        team to focus on higher-value tasks. The project received high praise for its impact, 
                        achieving a 50% reduction in time spent on manual checks, and setting a strong 
                        foundation for future process improvements and scalability within Podium’s workflows. 
                    </p>
                </div>

                {/* Bottom spacer */}
                <div />

            </div>
        </div>
    )
}