import felipePhoto1 from './assets/fdessoy-.jpg'
import felipePhoto2 from './assets/portfolio.gif'

export const Bio: React.FC = () => {
	return (
		<div className="p-15 space-y-4">
			<h1 className="flex items-center underline justify-center text-7xl mx-auto">Who?</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
			{/* 2-column grid */}
				{/* bio text */}
				<div className="space-y-4">
					<p className="text-2xl">
						My name is Felipe Justo José Dessoy Caraballo. I'm a Brazilian that speaks fluently 
						Portuguese, English, Spanish, and has a good grasp of Finnish. Aside from that, I'm
						a software engineer and political scientist (wow, right).<br/><br/>
						
						As a full stack engineer I am currently looking for my first role in the IT 
						industry. During 2023 and 2025 I studied in Hive Helsinki coding in C/C++ mostly.
						Before that I was a political scientist focused on quantitative methods using R 
						and Python.<br/><br/>
						
						After years of working with low and high-level languages, and increasing my stack,
						I've developed some projects that I am very proud of.<br/>
					</p>
				</div>
				{/* IMG OR GIF */}
				<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
					<img
						src={felipePhoto1 ? `${felipePhoto1}` : undefined}
						alt="Felipe"
						className="w-48 sm:w-64 h-60 sm:h-82 border object-cover rounded-lg shadow-lg"
					/>
					<img
						src={felipePhoto2 ? `${felipePhoto2}` : undefined}
						alt="Felipe@CruzandoConversas"
						className="w-48 sm:w-64 h-60 sm:h-82 border object-cover rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</div>
	)
}