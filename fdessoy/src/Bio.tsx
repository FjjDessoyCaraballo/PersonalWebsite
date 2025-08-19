import felipePhoto from './assets/fdessoy-.jpg'

export const Bio: React.FC = () => {
	return (
		<div className="p-6 space-y-4">
			<h1 className="flex items-center justify-center text-7xl mx-auto">Who?</h1>
			{/* 2-column grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start space-y-4">
				{/* bio text */}
				<div className="space-y-4">
					<p className="text-2xl">
						My name is Felipe Justo José Dessoy Caraballo. I'm a Brazilian that speaks fluently
						Portuguese, English, Spanish, and has a good grasp of Finnish. Aside from that, I'm
						a software engineer and political scientist (wow, right).
					</p>
					<p className="text-2xl">
						As a full stack engineer I am currently looking for my first role in the IT 
						industry. During 2023 and 2025 I studied in Hive Helsinki coding in C/C++ mostly.
						Before that I was a political scientist focused on quantitative methods using R 
						and Python.
					</p>
					<p className="text-2xl">
						After years of working with low and high-level languages, and increasing my stack,
						I've developed some projects that I am very proud of.
					</p>
				</div>
				{/* photo */}
				<div className="flex justify-center py-25">
					<img
						src={felipePhoto}
						alt="Felipe"
					className="w-64 h-82 border object-cover rounded-lg shadow-lg"
					/>
				</div>	
			</div>
		</div>
	)
}