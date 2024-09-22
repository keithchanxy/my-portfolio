
import Image from "./assets/Image01.jpg";

export const HomePage = () => {
    return (
        <div className={"px-4 ml-0 max-w-[800px] md:ml-[400px]"}>
            {/* Top spacer */}
            <div className="h-20" />

            <div className="flex justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden mb-10 ">
                    <img src={Image} alt="Your Image Description" className="w-full h-full object-cover" />
                </div>
            </div>

            <p className={"text-6xl font-bold flex justify-center mb-4"}>Hello! I'm </p>
            <p className={"text-9xl font-extrabold flex justify-center text-cyan-500 mb-4"}> Keith </p>
            <p className="text-4xl font-bold flex justify-center text-gray-400">A Computational Design Specialist</p>

            
        </div>
    );
}