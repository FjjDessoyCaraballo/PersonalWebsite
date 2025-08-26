import { forwardRef } from 'react';
import type { ContactProps } from './Types';
import { motion } from 'motion/react';
import { IconBrandLinkedin, IconBrandGithub, IconBrandLinktree, IconMail } from '@tabler/icons-react';

export const Contact = forwardRef<HTMLDivElement, ContactProps>(
    ({ title }, ref) => {
        const socialLinks = [
            {
                href: "https://linkedin.com/in/fdessoy",
                icon: IconBrandLinkedin,
                label: "LinkedIn",
                hoverColor: "hover:text-blue-500 dark:hover:text-blue-400"
            },
            {
                href: "https://github.com/fjjdessoycaraballo", 
                icon: IconBrandGithub,
                label: "GitHub",
                hoverColor: "hover:text-gray-700 dark:hover:text-gray-300"
            },
            {
                href: "https://linktr.ee/fdessoy",
                icon: IconBrandLinktree,
                label: "Linktree", 
                hoverColor: "hover:text-green-500 dark:hover:text-green-400"
            },
            {
                href: "mailto:fdessoycaraballo@gmail.com",
                icon: IconMail,
                label: "Email",
                hoverColor: "hover:text-red-500 dark:hover:text-red-400"
            }
        ];

        return (
            <motion.section
                ref={ref}
                className="bg-gradient-to-br from-[#F0DCDC] to-[#E8B5B5]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-6 py-12 lg:py-16">
                    
                    {/* Title */}
                    <motion.div 
                        className="text-center mb-8 lg:mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Connect with me
                        </p>
                    </motion.div>
                    
                    {/* Social Links */}
                    <motion.div 
                        className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3, once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {socialLinks.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex flex-col items-center p-4 rounded-xl bg-white dark:bg-[#F0DCDC] shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-[#E8B5B5] ${link.hoverColor}`}
                                    whileHover={{ 
                                        scale: 1.05,
                                        y: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ amount: 0.3, once: true }}
                                    transition={{ 
                                        duration: 0.4, 
                                        delay: 0.3 + (index * 0.1) 
                                    }}
                                >
                                    <IconComponent 
                                        size={40} 
                                        className="mb-2 transition-colors duration-300"
                                    />
                                    <span className="text-sm font-medium group-hover:font-semibold transition-all duration-300">
                                        {link.label}
                                    </span>
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
                
                {/* Footer */}
                <motion.footer 
                    className="border-t border-gray-200 dark:border-pink-50 bg-[#F0DCDC] dark:[#E8B5B5] backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 text-center sm:text-left">
                                Created with ❤️ by Felipe Dessoy Caraballo
                            </p>
                            <div className="flex items-center gap-4 text-xs lg:text-sm text-gray-500 dark:text-gray-500">
                                <span>© 2025</span>
                                <span>•</span>
                                <span>Built with React, Tailwind & love (:</span>
                            </div>
                        </div>
                    </div>
                </motion.footer>
            </motion.section>          
        );
    }
);

Contact.displayName = 'Contact';