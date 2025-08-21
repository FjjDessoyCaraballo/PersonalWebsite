// import { Header } from './Header'
import { Bio } from './Bio'
import { Portfolio } from './Projects'
import { motion } from "motion/react"

function App() {
  return (
    <div className="p4">
      {/* <Header /> */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.7 }}
      >
        <Bio />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.4 }}
      >
        <Portfolio />
      </motion.section>
    </div>
  )
}

export default App