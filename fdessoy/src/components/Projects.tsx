import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconBrandGithub, IconExternalLink, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { type ProjectsCarouselProps } from '../lib/Types';

export const Projects: React.FC<ProjectsCarouselProps> = ({ projects }) => {
    const projectList = Object.values(projects);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isZoomed, setIsZoomed] = useState(false);

    const navigate = (dir: number) => {
        setDirection(dir);
        setCurrentIndex(prev => (prev + dir + projectList.length) % projectList.length);
        setIsZoomed(false);
    };

    const goTo = (i: number) => {
        setDirection(i > currentIndex ? 1 : -1);
        setCurrentIndex(i);
        setIsZoomed(false);
    };

    const current = projectList[currentIndex];

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
    };

    return (
        <section className="min-h-screen flex items-center justify-center py-16 lg:py-20">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">

                {/* Carousel row: arrow | content | arrow */}
                <div className="flex items-center gap-4 lg:gap-6">

                    {/* Left arrow */}
                    <button
                        onClick={() => navigate(-1)}
                        className="flex-shrink-0 bg-[#F0DCDC] hover:bg-pink-200 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors duration-200"
                        aria-label="Previous project"
                    >
                        <IconChevronLeft size={20} />
                    </button>

                    {/* Animated content */}
                    <div className="flex-1 min-w-0 overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
                            >
                                {/* Text content */}
                                <div className="space-y-6 lg:space-y-8">
                                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 dark:text-gray-700">
                                        {current.project}
                                    </h2>

                                    <div className="space-y-4 lg:space-y-5">
                                        {current.description1 && (
                                            <p
                                                className="text-base lg:text-lg leading-relaxed text-gray-500"
                                                dangerouslySetInnerHTML={{ __html: current.description1 }}
                                            />
                                        )}
                                        {current.description2 && (
                                            <p className="text-base lg:text-lg leading-relaxed text-gray-500">
                                                {current.description2}
                                            </p>
                                        )}
                                        {current.description3 && (
                                            <p className="text-base lg:text-lg leading-relaxed text-gray-500">
                                                {current.description3}
                                            </p>
                                        )}
                                    </div>

                                    {current.link && (
                                        <div className="pt-4">
                                            <motion.a
                                                href={current.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 hover:from-pink-200 hover:to-rose-200 text-gray-700 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                                                whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <IconBrandGithub size={20} />
                                                <span>View project</span>
                                                <IconExternalLink size={16} className="opacity-70" />
                                            </motion.a>
                                        </div>
                                    )}
                                </div>

                                {/* GIF / Image */}
                                <div className="flex justify-center lg:justify-end">
                                    <motion.div
                                        className={`relative cursor-pointer rounded-lg overflow-hidden shadow-xl border-2 border-gray-200 dark:border-gray-700 ${
                                            isZoomed
                                                ? 'fixed inset-4 z-50 bg-black bg-opacity-90 flex items-center justify-center'
                                                : 'w-full max-w-md lg:max-w-lg'
                                        }`}
                                        onClick={() => setIsZoomed(!isZoomed)}
                                        whileHover={!isZoomed ? {
                                            scale: 1.02,
                                            y: -5,
                                            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
                                        } : {}}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {current.gifPath && (
                                            <img
                                                src={current.gifPath}
                                                alt={`${current.project} demonstration`}
                                                className={`w-full ${
                                                    isZoomed
                                                        ? 'max-h-full max-w-full object-contain'
                                                        : 'h-64 lg:h-80 object-cover'
                                                }`}
                                            />
                                        )}

                                        {!isZoomed && (
                                            <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                                <div className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                    Click to expand
                                                </div>
                                            </div>
                                        )}

                                        {isZoomed && (
                                            <button className="absolute top-4 right-4 bg-white text-gray-800 hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg transition-colors duration-200">
                                                ×
                                            </button>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={() => navigate(1)}
                        className="flex-shrink-0 bg-[#F0DCDC] hover:bg-pink-200 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors duration-200"
                        aria-label="Next project"
                    >
                        <IconChevronRight size={20} />
                    </button>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-10">
                    {projectList.map((p, i) => (
                        <button
                            key={p.project}
                            onClick={() => goTo(i)}
                            aria-label={`Go to ${p.project}`}
                            className={`rounded-full transition-all duration-200 ${
                                i === currentIndex
                                    ? 'w-6 h-2.5 bg-gray-500'
                                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
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
        </section>
    );
};