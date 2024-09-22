
export const ContactPage = () => {
    return (
        <div className={"flex flex-col justify-center items-center text-center px-4 max-w-[800px] md:ml-[400px] mx-auto"}>
            {/* Bottom spacer */}
            <div className="h-20" />

            {/* Page title */}
            <h1 className={"text-6xl font-extrabold text-cyan-500 mb-20"}>Get In Touch!</h1>

            <p className="text-justify mb-4">
                Thank you for your interest in my portfolio.
            </p>
            <p className="text-justify mb-4">
                I'd love to hear from you!
            </p>
            <p className="text-justify mb-4">
                Connect with me on any of my social media platforms below:
            </p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-6">

                <a href="https://facebook.com/keith.chan.355" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0H1.325C.594 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.325 24h11.494V14.706h-3.13v-3.622h3.13V8.413c0-3.1 1.892-4.788 4.655-4.788 1.325 0 2.465.099 2.797.143v3.243h-1.918c-1.504 0-1.795.715-1.795 1.762v2.308h3.587l-.467 3.622h-3.12V24h6.117C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z" />
                    </svg>
                </a>

                <a href="https://instagram.com/kchanxy/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.329 3.608 1.305.975.976 1.242 2.243 1.305 3.609.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.329 2.633-1.305 3.608-.976.975-2.243 1.242-3.609 1.305-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.329-3.609-1.305-.975-.976-1.242-2.243-1.305-3.609-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.329-2.633 1.305-3.609C4.519 2.492 5.786 2.225 7.152 2.163 8.417 2.105 8.797 2.163 12 2.163m0-2.163C8.741 0 8.332.015 7.052.073c-1.433.062-2.865.33-3.93 1.396C2.057 2.535 1.789 3.967 1.727 5.4.666 6.68.651 7.09.651 12s.015 5.32.073 6.6c.062 1.433.33 2.865 1.395 3.93 1.065 1.066 2.498 1.334 3.93 1.396C8.332 23.985 8.741 24 12 24s3.668-.015 4.948-.073c1.433-.062 2.865-.33 3.93-1.395 1.066-1.065 1.334-2.498 1.396-3.93.058-1.28.073-1.689.073-6.6s-.015-5.32-.073-6.6c-.062-1.433-.33-2.865-1.395-3.93-1.065-1.066-2.497-1.334-3.93-1.396C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.879 0z" />
                    </svg>
                </a>

                <a href="https://linkedin.com/in/keith-chan-89b8a6190" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0H5C2.25 0 0 2.25 0 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5V5c0-2.75-2.25-5-5-5zM8.14 19H5.09V9h3.05v10zM6.62 7.59C5.44 7.59 4.5 6.65 4.5 5.47c0-1.18.94-2.12 2.12-2.12 1.18 0 2.12.94 2.12 2.12 0 1.18-.94 2.12-2.12 2.12zM20 19h-3.05v-5.26c0-2.5-3-2.31-3 0V19h-3.05V9H14v1.54c1.39-2.56 6-2.77 6 2.45V19z" />
                    </svg>
                </a>

                <a href="https://github.com/keithchanxy" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .296C5.37.296 0 5.665 0 12.296c0 5.288 3.438 9.768 8.207 11.365.599.11.793-.261.793-.579v-2.047c-3.338.726-4.037-1.416-4.037-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.204.084 1.836 1.236 1.836 1.236 1.071 1.834 2.809 1.305 3.495.998.107-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.932 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.303 1.23a11.479 11.479 0 013.007-.404c1.02.004 2.045.138 3.006.404 2.293-1.553 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.805 5.625-5.477 5.921.43.372.823 1.103.823 2.222v3.293c0 .322.193.694.8.577 4.766-1.6 8.2-6.078 8.2-11.365C24 5.665 18.63.296 12 .296z" />
                    </svg>
                </a>
            </div>

            <p className="text-justify mb-4">Feel free to reach out via email:
                <a href="mailto:yourname@email.com" className="text-blue-500 hover:underline"> keithchanxy@gmail.com</a>
            </p>

            {/* Bottom spacer */}
            <div className="h-20" />
        </div>

    );
}