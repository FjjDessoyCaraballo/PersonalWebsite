import { type ProjectsProps, type TextProps } from './Types';
import felipePhoto1 from './assets/me1.png'
import felipePhoto2 from './assets/me2.png'

export const WallOfText: React.FC<TextProps> = ( {text} ) => {
	return (
		<div className="p-15 space-y-4">
			<h1 className="flex items-center underline justify-center text-7xl mx-auto">What?</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
				<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
					<img
						src={felipePhoto2}
						className="w-48 sm:w-64 h-60 sm:h-82 border object-cover rounded-lg shadow-lg"
					/>
					<img
						src={felipePhoto1}
						className="w-48 sm:w-64 h-60 sm:h-82 border object-cover rounded-lg shadow-lg"
					/>

				</div>
				<div className="space-y-4">
					<p className="flex items-center justify-left text-2xl mx-auto">{text}</p>
				</div>
			
			</div>
		</div>
	)
}

export const Projects: React.FC<ProjectsProps> = ({ project, description1, description2, description3, gifPath }) => {
	return (
		<div className="p-12 grid grid-cols-1 md:grid-cols-2 gap-6 flex items-center justify-center">
				<div className="space-y-4">
					<h4 className="text-2xl font-bold">{project}</h4>
					<p className="text-gray-700 text-xl leading-relaxed">
						{description1}
					</p>
					<p className="text-gray-700 text-xl leading-relaxed">
						{description2}
					</p>
					<p className="text-gray-700 text-xl leading-relaxed">
						{description3}
					</p>

				</div>
				<div className="bg-gray-100 object-cover h-48 flex items-center justify-center rounded-lg shadow-lg">
					<img src={gifPath ? `${gifPath}` : undefined}/>
				</div>
		</div>
	)
}