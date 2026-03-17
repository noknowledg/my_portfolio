import React, { useState, useEffect, useRef } from 'react';
import myphoto from './assets/me.png'

// --- Icons ---
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"/></svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
);

const SkillBranch = ({ title, skills, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.5 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div ref={domRef} className="relative flex items-center justify-center mb-16 min-h-[120px]">
      <div className="absolute h-full w-[2px] bg-slate-200 left-1/2 -translate-x-1/2 z-0"></div>
      <div className={`absolute w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-500 ${isVisible ? 'bg-blue-600 scale-125' : 'bg-slate-300 scale-100'}`}></div>

      <div className={`flex w-full items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`w-1/2 px-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (isEven ? '-translate-x-10' : 'translate-x-10')}`}>
          <div className={`${isEven ? 'text-right' : 'text-left'}`}>
            <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">{title}</h3>
            <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
              {skills.map(skill => (
                <span key={skill} className="bg-white border border-slate-100 px-3 py-1 rounded-lg text-xs font-bold text-slate-700 shadow-sm hover:border-blue-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillTree = [
    { title: "AI & Deep Learning", skills: ["CNN", "YOLOv8", "TensorFlow", "keras", "openCV"] },
    { title: "Machine Learning", skills: ["Data Collection","Data Preprocessing", "Feature Engineering", "Python-liraries: numpy, panda, scikit-learn"] },
    { title: "Full stack", skills: ["React.js", "Node.js", "Express.js","css", "MySQL"] },
    { title: "Programming & workflow", skills: ["Python", "Git & GitHub", "Jupyter Notebook"] },
    { 
    title: "Professional Experience", 
    skills: [
      "16-week internship at The Gems Tech – Chicken Behavior Detection ",
      "3-month internship at SynthBit – Research on Model development and NLP techniques for PTE system",
     
    ] 
  }
  ];

  

  return (
    <div className="bg-[#fafafb] min-h-screen text-slate-900 selection:bg-blue-100 font-sans scroll-smooth">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
         <a href='#home'> <div className="text-xl font-black tracking-tighter"> ANURADHA <span className="text-blue-600">. </span> </div> </a>
          <div className="hidden md:flex gap-10 items-center">
            {[ 'About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </div>
         
        </div>
      </nav>

     {/* Hero */}
<section id="home" className="relative pt-36 pb-20 px-8 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="max-w-4xl">
      
      {/* Availability Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[15px] font-black uppercase tracking-widest mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
        </span>
        Available for AI/ML Opportunities
      </div>

      {/* Name */}
      <h1 className="text-7xl md:text-[7rem] font-black tracking-tighter leading-[0.85] mb-20">
        Anuradha <br />  <span className="text-slate-300">Shukla.</span>
      </h1>

    
      {/* Icons + CV Button */}
      <div className="flex items-center gap-12 mb-12 px-20">
        {/* GitHub */}
        <a
          href="https://github.com/noknowledg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-700 hover:text-blue-600 transition text-5xl "
        >
          <GithubIcon />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/anuradha-shukla-26997330a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-700 hover:text-blue-600 transition text-5xl"
        >
          <LinkedinIcon />
        </a>

        {/* View CV */}
        <a
          href="/Anuradha_Shukla_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#2A9D8F] px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300"
        >
          View CV
        </a>
      </div>

    </div>
  </div>
</section>

      {/* About Me */}
      <section id="about" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="w-90 h-85 bg-slate-100 rounded-[4rem] overflow-hidden gray-300">
              <img src={myphoto} alt="Anuradha Shukla" className="w-full h-full object-cover  height-100 gray-300  "  />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl hidden lg:block">
              <p className="text-4xl font-black mb-1">BSc.IT</p>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">AI/ML Enthusiast</p>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-6">About Me</h2>
            
            <p className="text-slate-500 leading-relaxed mb-6">
             BSc.IT graduate passionate about AI, Machine Learning, and Deep Learning, with hands-on experience in computer vision projects, smart automation, and full-stack applications. I build models and applications that bridge research with real-world impact.
            </p>
            <p className="text-slate-500 leading-relaxed">
              I am dedicated to learning how to build high-accuracy models using ML techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Tree */}
      <section id="skills" className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter mb-4 text-slate-900">Technical Stack</h2>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em]">Expertise Map</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {skillTree.map((item, index) => (
              <SkillBranch key={item.title} title={item.title} skills={item.skills} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects: Original Horizontal Layout */}
     <section id="projects" className="py-28 px-8 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="mb-20 text-center">
      <h2 className="text-6xl font-black tracking-tighter mb-4">
        Core <br /> <span className="text-blue-600">Projects.</span>
      </h2>
      <p className="text-slate-500 font-medium">Highlighting key AI, ML, and Full-Stack projects</p>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Chicken Monitoring Project */}
      <div className="border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Deep Learning / Computer Vision
        </div>
        <h3 className="text-2xl font-black mb-4">Chicken detection and behaviour analysis</h3>
        <p className="text-slate-500 mb-4">
          Real-time detection and monitoring of poultry behavior using YOLOv8. Built to improve efficiency in livestock farms and reduce manual monitoring.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">Python</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">OpenCV</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">YOLOv8</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">Roboflow</span>
        </div>
      </div>

      {/* Waste Detection Project */}
      <div className="border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          AI / ML
        </div>
        <h3 className="text-2xl font-black mb-4">Smart Waste Classification</h3>
        <p className="text-slate-500 mb-4">
          Automated waste classification using a CNN built from scratch. Categorizes waste into biodegradable, non-biodegradable, and hazardous for recycling and sustainability solutions.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">Python</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">TensorFlow</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">Keras</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">Roboflow</span>
        </div>
      </div>

      {/* AI Solution Portfolio */}
      <div className="border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Full-Stack / AI
        </div>
        <h3 className="text-2xl font-black mb-4">AI Solutions Portfolio Website</h3>
        <p className="text-slate-500 mb-4">
          Built a professional portfolio website showcasing AI/ML projects. Includes CRUD features, project gallery, authentication, and chatbot for query management.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">React.js</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">Node.js</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">MySQL</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">CSS</span>
        </div>
      </div>

      {/* Credit Scoring / Logistic Regression */}
      <div className="border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Machine Learning
        </div>
        <h3 className="text-2xl font-black mb-4">Credit Scoring Prediction</h3>
        <p className="text-slate-500 mb-4">
          Developed a logistic regression model to assess loan eligibility. Handled data collection, preprocessing, feature selection, and model evaluation for accurate predictions.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">Python</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">Pandas</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">NumPy</span>
          <span className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-lg">Scikit-Learn</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer
  id="contact"
  className="w-full bg-slate-700 text-white rounded-t-[5rem] flex flex-col items-center relative overflow-hidden py-16"
>
  <div className="max-w-4xl w-full flex flex-col items-center px-6">

    {/* Hero / CV Button */}
    <div className="flex justify-center mb-16">
      <a
        href="/Anuradha_Shukla_cv.pdf"
        download
        className="flex items-center gap-3 bg-white text-slate-900 px-12 py-5 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1"
      >
        <DownloadIcon /> Download Full CV
      </a>
    </div>

    {/* Contact Info + Location + Socials */}
    <div className="grid md:grid-cols-3 gap-12 w-full border-t border-white/10 pt-12">
      <div className="text-center md:text-left">
        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-3">
          Contact
        </p>
        <p className="text-xl font-bold mb-1 hover:text-blue-400 cursor-pointer">
          shuklaanu309@gmail.com
        </p>
        <p className="text-xl font-bold">+977 9816435462</p>
      </div>

      <div className="text-center md:text-left">
        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-3">
          Location
        </p>
        <p className="text-xl font-bold">Butwal, Nepal</p>
        <p className="text-slate-400">Available Globally</p>
      </div>

      <div className="flex justify-center md:justify-end items-center gap-4">
        <a
          href="https://github.com/noknowledg"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-colors text-white"
        >
          <GithubIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/anuradha-shukla-26997330a/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-colors text-white"
        >
          <LinkedinIcon className="w-6 h-6" />
        </a>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div className="mt-16 border-t border-white/5 w-full pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-widest text-white/20 uppercase">
      <p>© 2024 ANURADHA SHUKLA</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#home" className="hover:text-white transition-colors">Top</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default App;