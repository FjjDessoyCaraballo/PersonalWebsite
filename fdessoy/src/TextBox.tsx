import { type TextProps } from './Types';
import { motion } from 'motion/react';
import { forwardRef } from 'react';

export const TextBox = forwardRef<HTMLDivElement, TextProps>( 
    ({title, text1, text2, text3, image1, image2, side }, ref) => {
        const isImageLeft = side !== true;
        
        return (
            <motion.section
                ref={ref}
                className="min-h-screen flex items-center justify-center py-16 lg:py-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    {/* Title */}
                    <motion.h1 
                        className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 lg:mb-16 underline decoration-2 underline-offset-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {title}
                    </motion.h1>
                    
                    {/* Content Grid */}
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${isImageLeft ? 'lg:grid-flow-col-dense' : ''}`}>
                        {/* Text Content */}
                        <motion.div 
                            className={`space-y-6 ${isImageLeft ? 'lg:col-start-2' : ''}`}
                            initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ amount: 0.3, once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {text1 && (
                                <p className="text-lg lg:text-2xl leading-relaxed text-gray-700 dark:text-gray-700">
                                    {text1}
                                </p>
                            )}
                            {text2 && (
                                <p className="text-lg lg:text-2xl leading-relaxed text-gray-700 dark:text-gray-700">
                                    {text2}
                                </p>
                            )}
                            {text3 && (
                                <p className="text-lg lg:text-2xl leading-relaxed text-gray-700 dark:text-gray-700">
                                    {text3}
                                </p>
                            )}
                        </motion.div>
                        
                        {/* Images */}
                        <motion.div 
                            className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center ${isImageLeft ? 'lg:col-start-1' : ''}`}
                            initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ amount: 0.3, once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {image1 && (
                                <motion.img
                                    src={image1}
                                    alt="Portfolio image 1"
                                    className="w-full sm:w-48 lg:w-56 xl:w-64 h-56 lg:h-64 xl:h-72 object-cover rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700"
                                    whileHover={{ scale: 1.05, rotate: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                            {image2 && (
                                <motion.img
                                    src={image2}
                                    alt="Portfolio image 2"
                                    className="w-full sm:w-48 lg:w-56 xl:w-64 h-56 lg:h-64 xl:h-72 object-cover rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700"
                                    whileHover={{ scale: 1.05, rotate: -1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        );
    }
);

TextBox.displayName = 'TextBox';