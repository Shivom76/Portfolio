export default function Projects(){
    return(
        <div className=" text-white rounded-lg m-5 p-4">
            <section className="py-12 relative">
        <div className="hidden md:block absolute inset-0 w-0.5 bg-gray-300 mx-auto mt-0" aria-hidden="true" ></div>

        <div className="relative max-w-6xl mx-auto flex justify-start sm:mb-6 z-10 mt-0" data-aos="fade-right">
            <div className="w-full md:w-1/2 md:pr-12 min-[354px]:mb-6">
                <div className="bg-white/10 p-6 shadow-xl rounded-lg border border-gray-100 relative">
                    <h3 className="text-2xl font-bold ">Escape-Atlas</h3>
                    <p className="text-sm mb-2">April 2025</p>

                    <div className="flex space-x-4 mt-4">
                        <a 
                            href="https://escape-atlas.onrender.com/listing" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 text-sm flex items-center"
                        >
                            Demo
                        </a>
                    </div>
                    <p className="">Escape-Atlas is a robust, full-stack application for browsing, posting, and managing unique accommodation listings and user reviews. The back-end is powered by Node.js and Express.js, utilizing MongoDB for data persistence and a RESTful API design. Core features include complete CRUD functionality and advanced security implementation using Passport.js for secure user authentication and session management. The responsive front-end was skillfully crafted using foundational HTML, CSS, and vanilla JavaScript.</p>
                    <div className="absolute top-1/2 right-[-2.75rem] transform -translate-y-1/2 w-10 h-0.5 bg-gray-300 hidden md:block"></div>
                    <div className="absolute top-1/2 right-[-3.56rem] transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-white shadow-md hidden md:block"></div>
                </div>
            </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto flex justify-end " data-aos="fade-left">
            <div className="w-full md:w-1/2 md:pl-12  sm:mb-6 min-[354px]:mb-6" >
                <div className="bg-white/10 p-6 shadow-xl rounded-lg border border-gray-100 relative">
                    <h3 className="text-2xl font-bold">ChatSocket</h3>
                    <p className="text-sm  mb-2">Sep 2025</p>
                    <p className="">This project is a multi-user, real-time chat application demonstrating synchronous communication across various clients. It leverages the Socket.IO library on a Node.js/Express.js backend to establish persistent, bidirectional WebSocket connections. The application handles secure socket management, message broadcasting, and user join/leave notifications. Built with a responsive HTML, CSS, and vanilla JavaScript frontend, it provides a scalable solution for instant messaging.</p>
                    <div className="absolute top-1/2 left-[-2.75rem] transform -translate-y-1/2 w-10 h-0.5 bg-gray-300 hidden md:block"></div>
                    <div className="absolute top-1/2 left-[-3.56rem] transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-white shadow-md hidden md:block"></div>
                </div>
            </div>
        </div>

        <div className="relative max-w-6xl mx-auto flex justify-start sm:mb-6" data-aos="fade-right">
            <div className="w-full md:w-1/2 md:pr-12 min-[354px]:mb-6">
                <div className="bg-white/10 p-6 shadow-xl rounded-lg border border-gray-100 relative">
                    <h3 className="text-2xl font-bold ">Project 3</h3>
                    <p className="text-sm mb-2">Nov 2025</p>
                    <p className="">Building it currently...</p>
                    <div className="absolute top-1/2 right-[-2.75rem] transform -translate-y-1/2 w-10 h-0.5 bg-gray-300 hidden md:block"></div>
                    <div className="absolute top-1/2 right-[-3.56rem] transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-white shadow-md hidden md:block"></div>
                </div>
            </div>
        </div>
        
        </section>
            </div>
    )
}