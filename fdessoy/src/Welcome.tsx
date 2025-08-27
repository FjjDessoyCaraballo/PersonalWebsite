import { motion } from 'motion/react'

export const Welcome = () => {
    return (
        <motion.section
        className="min-h-screen flex items-center justify-center py-16 lg:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    {/* Title */}
                    <motion.h1 
                        className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 lg:mb-16 decoration-2 underline-offset-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        >
                        Greetings and welcome to my portfolio!
                    </motion.h1>
                    <motion.h2 
                        className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 lg:mb-16 decoration-2 underline-offset-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        >
                        🡇
                    </motion.h2>
                </div>
            </motion.section>

        )
}