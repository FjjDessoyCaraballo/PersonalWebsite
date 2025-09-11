import { motion } from 'motion/react';

export const Stack = () => {
    const stackCategories = [
        {
            title: "Programming languages",
            technologies: ["JavaScript/TypeScript", "C", "C++", "Python", "SQL"]
        },
        {
            title: "Backend Development", 
            technologies: ["FastAPI", "Flask", "Fastify", "Express.js", "RESTful APIs", "JWT"]
        },
        {
            title: "Frontend Development",
            technologies: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Webpack", "Vite", "Node.js", "Framer Motion"]
        },
        {
            title: "Databases",
            technologies: ["SQLite", "PostgreSQL", "MariaDB", "Database Design"]
        },
        {
            title: "DevOps & Tools",
            technologies: ["Docker", "Docker Compose", "Git", "GitHub", "Linux", "Makefile", "Poetry"]
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
                        className="space-y-4 lg:space-y-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-lg lg:text-xl leading-relaxed text-gray-500 font-medium">
                            This is my current stack. As previously mentioned, I started studying C++ in 2018, but it was only in 2023 at Hive that I finally started producing professional-grade software.
                        </p>
                        <p className="text-lg lg:text-xl leading-relaxed text-gray-500 font-medium">
                            I have built a strong foundation in computer science with C/C++. That same foundation got me interested in working with the backend, but it was my love for networking and its protocols that led me to full stack development. Even though I have quite an eye for design and UI/UX <i>(I mean, check out this beauty of a website)</i>, what really inspires me is creating data pipelines: building APIs and seeing data flow from a form in the frontend to the backend, and finally getting that data nicely stored in a tidy database. That is what I love about full stack development.
                        </p>
                        <p className="text-lg lg:text-xl leading-relaxed text-gray-500 font-medium">
                            I am currently studying <u><a href="https://fullstackopen.com/en/">Full Stack Open</a></u> from Helsinki University to deepen my knowledge in full stack development while also doing <u><a href="https://www.upwork.com/freelancers/~0146fdd85b1fa783a9?mp_source=share">freelance work</a></u>. If you are a prospective employer, let's get in touch through <u><a href="https://linkedin.com/in/fdessoy">Linkedin</a></u>!
                        </p>
                        <p className="text-lg lg:text-m leading-relaxed text-gray-500 font-medium">
                            <i>Each technology listed represents real project experience and expertise gained through hands-on development.</i>
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