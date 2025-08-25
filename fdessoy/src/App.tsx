
import { Projects } from './Projects'
import { TextBox } from './TextBox'
import { motion } from "motion/react"
import { introWhat, introWho1, introWho2, introWho3 } from './Content';
import { ProjectsList } from './ProjectsList'
import image1 from './assets/me1.png'
import image2 from './assets/me2.png'
import felipePhoto1 from './assets/fdessoy-.jpg'
import felipePhoto2 from './assets/portfolio.gif'

function App() {
  return (
    <div className="min-h-screen border-l-14 border-r-14 border-[#F0DCDC]">
      <div className="p4">
        
        {/* BIO */}
        <motion.section className="h-screen items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.7 }}
          >
          <TextBox
            title="Who?"
            text1={introWho1}
            text2={introWho2}
            text3={introWho3}
            image1={felipePhoto1}
            image2={felipePhoto2}
            />
        </motion.section>

        {/* INTRO TO PROJECTS SECTION */}
        <motion.section 
          className="h-screen items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.7 }}
          >
          <TextBox 
            title="What?"
            text1={introWhat} 
            image1={image1} 
            image2={image2}
            side={true}
          />
        </motion.section>

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
      </div>
    </div>
  )
}

export default App