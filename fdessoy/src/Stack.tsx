import { motion } from 'motion/react';

export const Stack = () => {
    const stackCategories = [
        {
            title: "Languages",
            technologies: ["JavaScript/TypeScript", "C", "C++", "Python", "SQL"]
        },
        {
            title: "Frameworks & Libraries", 
            technologies: ["React", "pytest", "pydantic", "FastAPI"]
        },
        {
            title: "Runtime Environments",
            technologies: ["Docker", "Node.js"]
        }
    ];
        
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
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 lg:mb-16 underline decoration-2 underline-offset-8 text-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    My Stack
                </motion.h1>
                
                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
                    
                    {/* Description Text */}
                    <motion.div 
                        className="space-y-6 lg:space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-lg lg:text-xl leading-relaxed text-gray-500">
                            This is my current stack. As previously mentioned, I started studying C++ in 2018, but it was only in 2023 at Hive that I finally started producing professional-grade software.
                        </p>
                        <p className="text-lg lg:text-xl leading-relaxed text-gray-500 font-medium">
                            You heard me, I said professional-grade.
                        </p>
                        <p className="text-base lg:text-lg text-gray-500 italic">
                            Each technology listed represents real project experience and expertise gained through hands-on development.
                        </p>
                    </motion.div>
                    
                    {/* Technology Stack */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {stackCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                className="bg-[#F0DCDC] rounded-xl p-6 shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.3, once: true }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.7 + (categoryIndex * 0.1) 
                                }}
                            >
                                {/* Category Title */}
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-500 mb-4 pb-2 border-b border-gray-300 dark:border-gray-300">
                                    {category.title}
                                </h3>
                                
                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-2 lg:gap-3">
                                    {category.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={tech}
                                            className="bg-gradient-to-r from-pink-100 to-rose-100 text-gray-500  px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:from-pink-200 hover:to-rose-200 font-medium"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ amount: 0.3, once: true }}
                                            transition={{ 
                                                duration: 0.4, 
                                                delay: 0.8 + (categoryIndex * 0.1) + (techIndex * 0.05) 
                                            }}
                                            whileHover={{ 
                                                scale: 1.05,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

Stack.displayName = 'Stack';