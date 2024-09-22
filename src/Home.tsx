
import HomeImage from "./assets/Home01.jpg";

export const HomePage = () => {
    return (
        <div className={"flex flex-col justify-center items-center text-center px-4 max-w-[800px] md:ml-[400px] mx-auto"}>
            {/* Top spacer */}
            <div className="h-20" />

            <div className="w-64 h-64 md:w-80 md:h-80 mb-10">
                <img
                    src={HomeImage}
                    alt="Your Image Description"
                    className="w-full h-full object-cover">
                </img>
            </div>

            <p className={"text-2xl md:text-4xl font-bold mb-4"}>Hello! I'm </p>
            <p className={"text-6xl md:text-8xl font-extrabold text-cyan-500 mb-4"}> Keith </p>
            <p className={"text-1xl md:text-3xl font-bold text-gray-400"}>A Computational Design Specialist</p>

            {/* Bottom spacer */}
            <div className="h-20" />
        </div>

    );
}