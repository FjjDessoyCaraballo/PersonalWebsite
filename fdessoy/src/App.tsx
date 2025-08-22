// import { Header } from './Header'
import { Bio } from './Bio'
import { Projects, WallOfText } from './Projects'
import { motion } from "motion/react"
import { ProjectsList, intro } from './Types';

function App() {
  return (
    <div className="p4">
      
      {/* BIO */}
      <motion.section className="h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.9 }}
        >
        <Bio />
      </motion.section>

      {/* INTRO TO PROJECTS SECTION */}
      <motion.section 
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.8 }}
        >
        <WallOfText text={intro} />
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section 
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.8 }}
        >
        <Projects 
          project={ProjectsList.ezra.project} 
          description={ProjectsList.ezra.description}
          gifPath={ProjectsList.ezra.gifPath}
        />
      </motion.section>

      <motion.section 
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.8 }}
        >
        <Projects 
          project={ProjectsList.ft_transcendence.project} 
          description={ProjectsList.ft_transcendence.description}
          gifPath={ProjectsList.ft_transcendence.gifPath}
        />
      </motion.section>

            <motion.section 
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.8 }}
        >
        <Projects 
          project={ProjectsList.ft_irc.project} 
          description={ProjectsList.ft_irc.description}
          gifPath={ProjectsList.ft_irc.gifPath}
        />
      </motion.section>

      <motion.section 
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.8 }}
        >
        <Projects 
          project={ProjectsList.webcrawler.project} 
          description={ProjectsList.webcrawler.description}
          gifPath={ProjectsList.webcrawler.gifPath}
        />
      </motion.section>


      <motion.section 
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.8 }}
        >
        <Projects 
          project={ProjectsList.minishell.project} 
          description={ProjectsList.minishell.description}
          gifPath={ProjectsList.minishell.gifPath}
        />
      </motion.section>

    </div>
  )
}

export default App