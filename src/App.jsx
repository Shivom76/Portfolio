import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Cards from "./components/Cards.jsx";
import Tools from "./components/Tools.jsx";
import Contact from "./components/Contact.jsx";
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';

const eduData = [
  {
    id: 1,
    title: "Jain University",
    content: "B.Tech in CSE (IoT) | Specializing in the intersection of hardware and full-stack MERN environments. Currently engineering real-time data visualization tools."
  },
  {
    id: 2,
    title: "Don Bosco School",
    content: "Higher Secondary Education in Science (PCM). Developed a strong foundation in logical problem solving."
  },
];

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#000814] text-slate-300 selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar />

      {/* Hero / Bio Section */}
      <section id="bio" className="pt-32 pb-24 px-6 relative">
        {/* Decorative Background "Glow" */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        
        <div 
          className="flex flex-col lg:flex-row justify-center items-center mx-auto max-w-6xl gap-16 p-10 md:p-16 bg-blue-950/10 backdrop-blur-2xl rounded-[2.5rem] border border-blue-500/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
          data-aos="fade-up"
        >
          {/* Profile Image with "Aura" */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-4 bg-gradient-to-b from-sky-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <img 
              src="/images/pic1.jpg" 
              alt="Shivom Paul" 
              className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full lg:rounded-3xl border-2 border-blue-500/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Bio Text */}
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-sky-400 font-mono text-sm mb-4 tracking-[0.3em] uppercase">MERN Stack • IoT Engineering</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
              Shivom <span className="bg-clip-text text-transparent bg-gradient-to-b from-sky-300 to-blue-600">Paul</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              I architect seamless digital experiences by merging <span className="text-sky-300 font-medium">Full Stack proficiency</span> with 
              <span className="text-blue-400 font-medium"> IoT hardware expertise</span>. 
              Transforming complex data into intuitive, real-time web solutions.
            </p>
            
            {/* Deep Sea Action Buttons */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <a href="#contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-900/40 active:scale-95">
                Start a Project
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener" 
                className="px-10 py-4 border-2 border-blue-500/30 text-blue-300 hover:border-blue-400 hover:bg-blue-400/5 rounded-2xl font-bold transition-all active:scale-95"
              >
                Resume.pdf
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="skills" className="py-24 px-6">
        <div className="flex flex-col items-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Technical Journey</h2>
          <div className="h-1.5 w-12 bg-sky-500 rounded-full"></div>
        </div>
        <div className="flex justify-center max-w-5xl mx-auto" data-aos="fade-up">
          <Cards text="Education" data={eduData} />
        </div>
      </section>

      {/* Tools Section (Inherits global theme) */}
      <Tools />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-blue-950/5">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white">Project Deep Dive</h2>
        </div>
        <Projects />
      </section>

      <section id="achievements" className="py-24 px-6 border-t border-blue-900/20">
        <Achievements />
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;