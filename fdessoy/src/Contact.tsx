import { forwardRef } from 'react';
import type { ContactProps } from './Types';
import { motion } from 'motion/react';
import { FaLinkedin } from 'react-icons/fa';

export const Contact = forwardRef<HTMLDivElement, ContactProps>(
    ({title}, ref) => {
        return (
            <motion.section
            ref={ref}
            className="min-h-[50vh] flex flex-col justify-between bg-[#F0DCDC]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.7 }}
            >
                <div className="flex-1 justify-between items-center text-5xl ">
                    <div className="py-5 px-10 text-5xl ">
                        Felipe Dessoy Caraballo
                        <div>{title}</div>
                        
                    </div>
                <a href="https://linkedin.com/in/fdessoy" className="text-gray-400 border hover:[#E8B5B5]">
                    <FaLinkedin size={30} />
                </a>
                </div>
                <footer className="flex justify-center text-sm bg-[#F0DCDC] py-4">
                        Created by Felipe Dessoy Caraballo 🔀
                </footer>
            </motion.section>          
        )
    }
)

Contact.displayName = 'Contact';