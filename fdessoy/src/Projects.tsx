import { type ProjectsProps, type ProjectData, ProjectsList } from './ListOfProjects';

export const Portfolio: React.FC = () => {
	return (
		<div className="p-6 space-y-4">
			<h1 className="flex items-center underline justify-center text-7xl mx-auto">What?</h1>
			<p className="flex items-center justify-center text-2xl mx-auto">
				This is my magical portfolio! Wooosh! But seriously, all these projects represented
				a milestone in my professional growth as a software developer. Even if some look a
				bit quirky. That's kinda just how I am.
			</p>
			{/* 2-column grid: title plus description to the left and gif to the right */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
				{Object.values(ProjectsList).map((projectData, index) => (
					<Projects
					key={index} 
					project={projectData.project} 
					description={projectData.description}
					/>
				))}
			</div>
		</div>
	)
}

const Projects: React.FC<ProjectsProps> = ({project, description}) => {
	return (
		<div className="space-y-4">
			<h4>{project}</h4>
			<p>{description}</p>
		</div>
	)
}