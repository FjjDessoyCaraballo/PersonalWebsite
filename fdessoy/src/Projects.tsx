import { type ProjectsProps } from './Types';
import { motion } from 'motion/react';
import { useState } from 'react'; 

export const Projects: React.FC<ProjectsProps> = ({ 
    project, 
    description1, 
    description2, 
    description3, 
    gifPath 
}) => {
    const [isZoomed, setIsZoomed] = useState(false);
    
    return (
        <motion.section 
            className="min-h-screen flex items-center justify-center py-16 lg:py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                    
                    {/* Text Content */}
                    <motion.div 
                        className="space-y-6 lg:space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Project Title */}
                        <motion.h2 
                            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3, once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {project}
                        </motion.h2>
                        
                        {/* Descriptions */}
                        <div className="space-y-4 lg:space-y-5">
                            {description1 && (
                                <motion.p 
                                    className="text-base lg:text-lg leading-relaxed text-gray-500 dark:text-gray-500"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ amount: 0.3, once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {description1}
                                </motion.p>
                            )}
                            
                            {description2 && (
                                <motion.p 
                                    className="text-base lg:text-lg leading-relaxed text-gray-500 dark:text-gray-500"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ amount: 0.3, once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {description2}
                                </motion.p>
                            )}
                            
                            {description3 && (
                                <motion.p 
                                    className="text-base lg:text-lg leading-relaxed text-gray-500 dark:text-gray-500"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ amount: 0.3, once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    {description3}
                                </motion.p>
                            )}
                        </div>
                    </motion.div>
                    
                    {/* Project Image/GIF */}
                    <motion.div 
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.div
                            className={`relative cursor-pointer rounded-lg overflow-hidden shadow-xl border-2 border-gray-200 dark:border-gray-700 ${
                                isZoomed 
                                    ? 'fixed inset-4 z-50 bg-black bg-opacity-90 flex items-center justify-center' 
                                    : 'w-full max-w-md lg:max-w-lg'
                            }`}
                            onClick={() => setIsZoomed(!isZoomed)}
                            animate={isZoomed ? {
                                scale: 1,
                                transition: { duration: 0.3 }
                            } : {
                                scale: 1,
                                transition: { duration: 0.3 }
                            }}
                            whileHover={!isZoomed ? { 
                                scale: 1.02,
                                y: -5,
                                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
                            } : {}}
                            transition={{ duration: 0.3 }}
                        >
                            {gifPath && (
                                <img 
                                    src={gifPath} 
                                    alt={`${project} demonstration`}
                                    className={`w-full ${
                                        isZoomed 
                                            ? 'max-h-full max-w-full object-contain' 
                                            : 'h-64 lg:h-80 object-cover'
                                    }`}
                                />
                            )}
                            
                            {/* Zoom indicator */}
                            {!isZoomed && (
                                <div className="absolute inset-0 bg-grey-700 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                    <div className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        Click to expand
                                    </div>
                                </div>
                            )}
                            
                            {/* Close button when zoomed */}
                            {isZoomed && (
                                <button className="absolute top-4 right-4 bg-white text-gray-800 hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg transition-colors duration-200">
                                    ×
                                </button>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            
            {/* Backdrop for zoomed image */}
            {isZoomed && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-80 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setIsZoomed(false)}
                />
            )}
        </motion.section>
    );
}