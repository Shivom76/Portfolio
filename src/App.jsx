// import './App.css'
import Navbar  from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Cards from "./components/Cards.jsx"
import Tools from "./components/Tools.jsx"
import Contact from "./components/Contact.jsx"
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
// import pic from "./src/assets/pic1";

import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const eduData=[
  { id: 1, title: "Jain University", content: "Bachelor in CSE-IoT" },
  { id: 2, title: "Don Bosco", content: "5-12" },
]

const proffData=[
  { id: 1, title: "Company 1", content: "Bachelor in CSE-IoT" },
  { id: 2, title: "Company 2", content: "Bachelor in CSE-IoT" },
  { id: 3, title: "Company 3", content: "Bachelor in CSE-IoT" },
]

function App() {
// bg-blue-950

useEffect(() => {
  AOS.init({
      duration: 800, // control the animation speed
      once: true,    // animate only once
  });
}, []);


return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-gray-900 text-white">
    
      <Navbar />

      <h1 className='text-center text-6xl font-extrabold tracking-tight 
    bg-clip-text text-transparent 
    bg-gradient-to-r from-indigo-400 to-cyan-400 leading-relaxed  min-[375px]:text-4xl'>My Portfolio</h1>

    <div className="flex flex-col mx-auto lg:flex-row justify-center items-center p-6 m-3 max-w-5xl gap-8 bg-gray-900/50 rounded-xl shadow-2xl">
      <div className="flex-shrink-0">
        <img src="/images/pic1.jpg" alt="pic" className="w-72 h-72 object-cover rounded-full lg:rounded-lg border-4 border-indigo-400 shadow-xl"/>
      </div>
      <div>
        <p className="text-white text-lg lg:text-left text-center leading-relaxed">I'm Shivom Paul, a budding Full Stack MERN Developer committed to mastering modern web development. While building projects with MongoDB, Express, React, and Node.js, I also maintain flexibility with languages like Python. I believe in daily skill growth and am currently transitioning from student to professional. I am actively pursuing opportunities to collaborate on freelance projects and seeking internships where I can contribute my skills to a dedicated team or startup environment.</p>
      </div>
    </div>



      <h2 className="text-center mt-3 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-700 to-blue-800">My Academic & Professional Journey</h2>
      <div className="Box flex justify-center lg:justify-evenly">
        <Cards text="Education" data={eduData}/>

        {/* <Cards text="Professional Experience"  data={proffData}/> */}
        
      </div>
      <div className='text-center mt-3'>Projects</div>
      <Projects />
      <Tools/>

      <Achievements />

      <Contact />

      <Footer/>
    </div>
  )
}

export default App


// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch