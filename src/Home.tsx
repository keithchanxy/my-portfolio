import testingImage from "./assets/Keith_IC_Photo.jpg";

export const HomePage = () => {
    return (
        <div className={"px-4 ml-0 max-w-[800px] md:ml-[400px]"}>
            {/* Top spacer */}
            <div className="h-20" />

            <div className="flex justify-center">
                <div className="w-60 h-60 rounded-full overflow-hidden">
                    <img src={testingImage} alt="Your Image Description" className="w-full h-full object-cover" />
                </div>
            </div>

            <p className={"text-5xl font-bold mb-2"}>Hello! I'm </p>

            <p className={"text-9xl font-extrabold text-cyan-500 mb-2"}> Keith </p>

            <p className="text-3xl font-bold text-gray-400">
                A Computational Design Specialist
            </p>

            
        </div>
    );
}