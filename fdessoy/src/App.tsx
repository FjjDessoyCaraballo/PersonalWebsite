
import { Projects } from './Projects';
import { TextBox } from './TextBox';
import { Contact } from './Contact'
import { introWhat1, introWho1, introWho2, introWho3, introWhere1 } from './Content';
import { ProjectsList } from './ProjectsList'
import { useRef } from 'react';
import { Welcome } from './Welcome'
import { motion } from 'motion/react'
import image1 from './assets/me1.png';
import image2 from './assets/me2.png';
import felipePhoto1 from './assets/fdessoy-.jpg';
import felipePhoto2 from './assets/portfolio.gif';

function App() {
  const bioRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen border-l-14 border-r-14 border-[#F0DCDC]">

      {/* QUICK NAVIGATION BUTTONS [NOT DONE] */}
      {/* <motion.div 
        >
      <button className="fixed bottom-30 right-6 bg-[#F0DCDC] transition-colors ease-in-out duration-600 hover:bg-white z-50 text-gray-400 border px-4 py-2 rounded-lg shadow-lg"
        onClick={() => bioRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
        Bio
      </button>
      
      <button className="fixed bottom-18 right-6 bg-[#F0DCDC] transition-colors ease-in-out duration-600 hover:bg-white z-50 text-gray-400 border px-4 py-2 rounded-lg shadow-lg "
        onClick={() => portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
        Portfolio
      </button>
      
      <button className="fixed bottom-6 right-6 bg-[#F0DCDC] transition-colors ease-in-out duration-600 hover:bg-white z-50 text-gray-400 border px-4 py-2 rounded-lg shadow-lg "
        onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
        Contact
      </button>
      </motion.div> */}

      <div className="p4">
        {/* WELCOME MAT */}
        <Welcome />

        {/* BIO */}
        <TextBox
          ref={bioRef}
          title="Bio"
          text1={introWho1}
          text2={introWho2}
          text3={introWho3}
          image1={felipePhoto1}
          image2={felipePhoto2}
          />

        {/* INTRO TO PROJECTS SECTION */}
        <TextBox 
          ref={portfolioRef}
          title="Portfolio"
          text1={introWhat1} 
          image1={image1} 
          image2={image2}
          side={true}
        />

        {/* PROJECTS SECTION */}
        {Object.values(ProjectsList).map((projectData) => ( 
          <Projects 
            key={projectData.project}
            project={projectData.project}
            description1={projectData.description1}
            description2={projectData.description2}
            description3={projectData.description3}
            gifPath={projectData.gifPath}
          />
        ))}

        {/* CONTACT SECTION */}
        <Contact 
          ref={contactRef}
          title="Felipe Dessoy Caraballo"
        />
      </div>
    </div>
  )
}

export default App