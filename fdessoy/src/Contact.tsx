import { forwardRef } from 'react';
import type { ContactProps } from './Types';
import { motion } from 'motion/react';

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
                <div className="flex-1 justify-left px-10 items-center text-5xl ">
                    <div className="flex-1 justify-left py-5 px-10 items-center text-5xl ">
                        Felipe Dessoy Caraballo<br/><br/>
                        {title}
                    </div>
                </div>
                <footer className="flex justify-center text-sm bg-[#F0DCDC] py-4">
                        Created by Felipe Dessoy Caraballo 🔀
                </footer>
            </motion.section>          
        )
    }
)

Contact.displayName = 'Contact';