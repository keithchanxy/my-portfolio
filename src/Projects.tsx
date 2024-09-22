
export const ProjectsPage = () => {
    return (
        <div className={"px-4 ml-0 max-w-[800px] md:ml-[400px]"}>
            {/* Top Spacer */}
            <div className="h-20" />

            {/* Page title */}
            <h1 className={"text-5xl font-extrabold text-cyan-500 mb-10"}>Projects</h1>

            {/* Projects */}
            <div className="flex flex-col gap-20">
                <div>
                    <p className="text-3xl font-semibold mb-5">Dynamic Parametric Façade Design</p>
                    <p className="text-justify mb-4">
                        The aim of the project is to develop an approach using Dynamo, for
                        concept design, to generate dynamic façades, incorporating Envelope
                        Thermal Transfer Value (ETTV) and Acoustic Rating analysis to
                        enhance the design process and performance analysis of building
                        façades for feasibility studies.
                    </p>
                    <div className="w-full h-96 bg-gray-300 flex items-center justify-center mb-4">
                        <iframe
                            src="https://youtu.be/ogVh1oARGuM?list=RDIJ-VipCCsRM" // Replace with your video URL
                            className="w-full h-full"
                            frameBorder="0"
                            allowFullScreen
                            title="Project Video"
                        ></iframe>
                    </div>
                    <p className={"text-2xl font-semibold mb-3"}>Responsibilities</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4"}>
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
                            <span className="font-medium">Software: </span>Revit, Dynamo
                        </li>
                        <li>
                            <span className="font-medium">Languages: </span>Python
                        </li>
                    </ul>
                    <p className={"text-2xl font-semibold mb-3"}>Outcomes</p>
                    <p className="text-justify">
                        The scripts were well received by the Façade team, with constructive
                        feedback provided for further enhancement. For concept design
                        purposes, they reduced façade design and performance evaluation time
                        by 50%, significantly boosting both efficiency and accuracy. The
                        automation of performance metrics enabled the team to make faster,
                        more informed design decisions, ultimately improving the overall
                        project outcomes.
                    </p>
                </div>


                <div className="border-t border-black"></div>

                <div>
                    <p className="text-3xl font-semibold mb-5">Automate Revit Model Comparison</p>

                    <p className="text-justify mb-4">
                        Comparing between different Revit project versions manually can be
                        time consuming and inaccurate. The aim of this project is to
                        implement Dynamo scripts to automate the comparison between outdated
                        and updated Revit models, significantly reducing comparison time and
                        improving data reconciliation accuracy for architectural and
                        engineering projects.
                    </p>
                    <div className="w-full h-96 bg-gray-300 flex items-center justify-center mb-4">
                        <span className="text-gray-500">Video 2</span>
                    </div>
                    <p className={"text-2xl font-semibold mb-3"}>Responsibilities</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4"}>
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
                            <span className="font-medium">Software: </span>Revit, Dynamo
                        </li>
                        <li>
                            <span className="font-medium">Languages: </span>Python
                        </li>
                    </ul>
                    <p className={"text-2xl font-semibold mb-3"}>Outcomes</p>
                    <p className="text-justify">
                        The scripts reduced comparison time from hours to minutes,
                        significantly improving the accuracy of capturing building
                        information across Revit models. This approach minimized human error
                        and greatly increased work efficiency for team members. The success
                        of the scripts led the BIM team to request a presentation to explore
                        how computational design and tools could add value to their daily
                        workflows.
                    </p>
                </div>

                <div className="border-t border-black"></div>

                <div>
                    <p className="text-3xl font-semibold mb-5">Dynamic Industrial Building Configurations and Parcelization Strategies</p>
                    <p className="text-justify mb-4">
                        JTC's architects currently generate multiple concept design
                        variations for industrial buildings manually, while adhering to site
                        constraints and building codes. The aim of this project is to
                        develop Grasshopper scripts to automate the creation of dynamic
                        industrial building configurations and optimize site parcelization
                        for feasibility studies. This automation will reduce reliance on
                        manual 2D modelling of various scenarios, significantly decreasing
                        time spent and increasing modelling efficiency.
                    </p>
                    <div className="w-full h-96 bg-gray-300 flex items-center justify-center mb-4">
                        <span className="text-gray-500">Video 3</span>
                    </div>
                    <p className={"text-2xl font-semibold mb-3"}>Responsibilities</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4"}>
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
                            <span className="font-medium">Software: </span>Rhino, Grasshopper
                        </li>
                        <li>
                            <span className="font-medium">Languages: </span> C#
                        </li>
                    </ul>
                    <p className={"text-2xl font-semibold mb-3"}>Outcomes</p>
                    <p className="text-justify">
                        The scripts reduced comparison time from hours to minutes,
                        significantly improving the accuracy of capturing building
                        information across Revit models. This approach minimized human error
                        and greatly increased work efficiency for team members. The success
                        of the scripts led the BIM team to request a presentation to explore
                        how computational design and tools could add value to their daily
                        workflows.
                    </p>
                </div>

                <div className="border-t border-black"></div>

                <div>
                    <p className="text-3xl font-semibold mb-5">Third-Party Grasshopper Plugins for interoperability with Podium</p>
                    <p className="text-justify mb-4">
                        The goal of this project was to design and develop customizable
                        third-party Grasshopper components and plugins using advanced C#
                        scripting and object-oriented programming techniques for in-house
                        use. The primary focus was to enable seamless interoperability
                        between Rhino/Grasshopper and Podium's in-house environment,
                        facilitating easy data identification and significantly reducing the
                        need for manual checks.
                    </p>
                    <div className="w-full h-96 bg-gray-300 flex items-center justify-center mb-4">
                        <span className="text-gray-500">Video 4</span>
                    </div>
                    <p className={"text-2xl font-semibold mb-3"}>Responsibilities</p>
                    <ul className={"text-justify ml-10 list-decimal mb-4"}>
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
                            <span className="font-medium">Software: </span>Rhino, Grasshopper,
                            Visual Studio
                        </li>
                        <li>
                            <span className="font-medium">Languages: </span> C#
                        </li>
                    </ul>
                    <p className={"text-2xl font-semibold mb-3"}>Outcomes</p>
                    <p className="text-justify">
                        The project successfully enabled seamless integration between
                        Rhino/Grasshopper and Podium’s internal environment, significantly
                        enhancing project efficiency. This allowed the team to focus on
                        higher-value tasks while minimizing the risk of human error during
                        data processing. The solution received high praise, achieving a 50%
                        reduction in time spent on manual checks and data identification
                        across JSON files.
                    </p>
                </div>

                {/* Bottom spacer */}
                <div />

            </div>
        </div>
    )
}