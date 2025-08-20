export interface ProjectsProps {
	project: string,
	description: string,
}

interface ProjectData {
	project: string;
	description: string;
}

interface ProjectsCollection {
	[key: string]: ProjectData
}

let ProjectsList: ProjectsCollection = {
	webcrawler: {
		project: "webcrawler", 
		description: "I built a Python-based web crawler that systematically extracts logos from websites using async HTTP requests and SQLite storage. The system includes intelligent scoring algorithms to evaluate logo detection confidence and respects robots.txt protocols. I implemented both crawler and fetcher components that work together to discover and download company logos from domain lists."
	},
	ft_transcendence: {
		project: "ft_transcendence",
		description: "My team developed a full-stack multiplayer gaming platform featuring Pong and Block Battle games with real-time gameplay powered by Socket.IO. The backend uses Node.js with Fastify, JWT authentication, and SQLite storage, while the frontend is built with React, TypeScript, and HTML5 Canvas for game rendering. I implemented user authentication, UI/UX, and GDPR compliance features, all containerized with Docker."
	},
	minishell: {
		project: "minishell", 
		description: "Me and Leo Storey recreated core bash shell functionality in C, implementing pipes, redirections, built-in commands (echo, cd, pwd, export, unset, env, exit), and proper signal handling for CTRL+C, CTRL+, and CTRL+D. I collaborated with a partner using structured Git workflows and achieved 100% completion on this systems programming project."
	},
	ft_irc: {
		project: "ft_irc",
		description: "My team created an IRC server in C++ that's IRC client compliant, implementing network programming with TCP sockets. The server accepts port and password parameters and includes planned features for port validation, password policies, and encryption considerations. The project demonstrates low-level network programming and protocol implementation skills."
	},
	ezra: {
		project: "ezra",
		description: " I created a Python GUI application using Tkinter for preserving educational content from the defunct BRL Center website through the Internet Archive's Wayback Machine. The tool systematically scrapes and downloads ZIP files while implementing respectful rate limiting and progress tracking with SQLite caching."
	},
}

export { ProjectsList }