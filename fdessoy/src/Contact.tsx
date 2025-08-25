import { forwardRef } from 'react';
import type { ContactProps } from './Types';
import { motion } from 'motion/react';
import { IconBrandLinkedin, IconBrandGithub, IconBrandLinktree, IconMail, IconBrandDiscord } from '@tabler/icons-react';

export const Contact = forwardRef<HTMLDivElement, ContactProps>(
    ({title}, ref) => {
        return (
            <motion.section
            ref={ref}
            className="min-h-[20vh] flex flex-col justify-between bg-[#F0DCDC]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.7 }}
            >
                <div className="flex justify-center py-5 space-x-10 text-5xl">
                    {title}
                </div>
                <div className="flex justify-center space-x-10">
                    <motion.a
                        href="https://linkedin.com/in/fdessoy"
                        className="text-[#E8B5B5]"
                        whileHover={{ scale: 1.1, color: "#D4b5b5" }}
                        whileTap={{ scale: 0.9 }}
                        >
                            <IconBrandLinkedin size={60}/>
                    </motion.a>
                    <motion.a
                        href="https://github.com/fjjdessoycaraballo"
                        className="text-[#E8B5B5]"
                        whileHover={{ scale: 1.1, color: "#D4b5b5" }}
                        whileTap={{ scale: 0.9 }}
                        >
                            <IconBrandGithub size={60}/>
                    </motion.a>
                    <motion.a
                        href="https://linktr.ee/fdessoy"
                        className="text-[#E8B5B5]"
                        whileHover={{ scale: 1.1, color: "#D4b5b5" }}
                        whileTap={{ scale: 0.9 }}
                        >
                            <IconBrandLinktree size={60}/>
                    </motion.a>
                    <motion.a
                        href="mailto:fdessoycaraballo@gmail.com"
                        className="text-[#E8B5B5]"
                        whileHover={{ scale: 1.1, color: "#D4b5b5" }}
                        whileTap={{ scale: 0.9 }}
                        >
                            <IconMail size={60} />
                    </motion.a>
                </div>
                <footer className="flex justify-center text-sm bg-[#F0DCDC] py-1">
                        Created by Felipe Dessoy Caraballo 🔀
                </footer>
            </motion.section>          
        )
    }
)

Contact.displayName = 'Contact';