import { type ProjectsProps } from './Types';
import { motion } from 'motion/react';
import { useState } from 'react'; 

export const Projects: React.FC<ProjectsProps> = ({ project, description1, description2, description3, gifPath }) => {
	const [isZoomed, setIsZoomed] = useState(false)
	
	return (
        <motion.section 
          className="h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          >
			<div className="p-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
				<div className="space-y-4">
					<motion.h4 
						className="text-2xl font-bold"
						initial={{ y: -200 }}
						whileInView={{ y: 0 }}
						transition={{ delay: 0.2 }}
						>
							{project}
					</motion.h4>
						<motion.p 
							className="text-gray-700 text-xl leading-relaxed"
							initial={{ x: -100 }}
							whileInView={{ x: 0 }}
							transition={{ delay: 0.1 }}
							>
								{description1}<br/>
						</motion.p>
						<motion.p 
							className="text-gray-700 text-xl leading-relaxed"
							initial={{ x: -100 }}
							whileInView={{ x: 0 }}
							transition={{ delay: 0.2 }}
							>
								{description2}<br/>
						</motion.p>
						<motion.p 
							className="text-gray-700 text-xl leading-relaxed"
							initial={{ x: -100 }}
							whileInView={{ x: 0 }}
							transition={{ delay: 0.3 }}
							>
								{description3}<br/>
						</motion.p>
				</div>
				<motion.div 
					className="h-80 w-full bg-gray-100 rounded-lg shadow-lg overflow-hiddden"
					onClick={() => setIsZoomed(!isZoomed)}
					animate={{ 
						scale: isZoomed ? 2 : 1, 
						y: isZoomed ? "-10%": 0, 
						x: isZoomed ? "-50%": 0 
					}}
					>
					<img src={gifPath} className="w-full h-full object-cover rounded-lg"/>
				</motion.div>
			</div>
		</motion.section>
	)
}