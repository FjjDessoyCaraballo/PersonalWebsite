
import { Projects, TextBox } from './Projects'
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
        <motion.section 
          className="h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          >
          <Projects 
            project={ProjectsList.ezra.project} 
            description1={ProjectsList.ezra.description1}
            description2={ProjectsList.ezra.description2}
            description3={ProjectsList.ezra.description2}
            gifPath={ProjectsList.ezra.gifPath}
          />
        </motion.section>

        <motion.section 
          className="h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          >
          <Projects 
            project={ProjectsList.ft_transcendence.project} 
            description1={ProjectsList.ft_transcendence.description1}
            description2={ProjectsList.ft_transcendence.description2}
            description3={ProjectsList.ft_transcendence.description2}
            gifPath={ProjectsList.ft_transcendence.gifPath}
          />
        </motion.section>

        <motion.section 
          className="h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          >
          <Projects 
            project={ProjectsList.cub3d.project} 
            description1={ProjectsList.cub3d.description1}
            description2={ProjectsList.cub3d.description2}
            description3={ProjectsList.cub3d.description2}
            gifPath={ProjectsList.cub3d.gifPath}
          />
        </motion.section>

        <motion.section 
          className="h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          >
          <Projects 
            project={ProjectsList.ft_irc.project} 
            description1={ProjectsList.ft_irc.description1}
            description2={ProjectsList.ft_irc.description2}
            description3={ProjectsList.ft_irc.description2}
            gifPath={ProjectsList.ft_irc.gifPath}
          />
        </motion.section>

        <motion.section 
          className="h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          >
          <Projects 
            project={ProjectsList.webcrawler.project} 
            description1={ProjectsList.webcrawler.description1}
            description2={ProjectsList.webcrawler.description2}
            description3={ProjectsList.webcrawler.description2}
            gifPath={ProjectsList.webcrawler.gifPath}
          />
        </motion.section>

        <motion.section 
          className="h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          >
          <Projects 
            project={ProjectsList.minishell.project} 
            description1={ProjectsList.minishell.description1}
            description2={ProjectsList.minishell.description2}
            description3={ProjectsList.minishell.description2}
            gifPath={ProjectsList.minishell.gifPath}
          />
        </motion.section>

      </div>
    </div>
  )
}

export default App