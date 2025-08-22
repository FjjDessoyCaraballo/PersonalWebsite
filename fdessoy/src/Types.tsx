export interface ProjectsProps {
	project: string;
	description1: string;
	description2?: string
	description3?: string
	gifPath?: string;
}

interface ProjectData {
	project: string;
	description1: string;
	description2?: string
	description3?: string
	gifPath: string;
}

interface ProjectsCollection {
	[key: string]: ProjectData
}

export interface TextProps {
	text: string
	gif?: string
}

let intro: string;
intro = "This is my magical portfolio! Wooosh! But seriously, all these projects represented a milestone in my professional growth as a software developer. Even if some look a	bit quirky. That's kinda just how I am.";

import cub3d from './assets/cub3d.gif'
import minishell from './assets/minishell.gif'
import transcendence from './assets/ft_transcendence.gif'
import irc from './assets/ft_irc.gif'
import ezra from './assets/ezra.png'


let ProjectsList: ProjectsCollection = {
	webcrawler: {
		project: "Webcrawler", 
		description1: "I built a Python-based web crawler that systematically extracts logos from websites using async HTTP requests and SQLite storage. The system includes intelligent scoring algorithms to evaluate logo detection confidence and respects robots.txt protocols. I implemented both crawler and fetcher components that work together to discover and download company logos from domain lists.",
		gifPath: "./assets/"
	},
	ft_transcendence: {
		project: "ft_transcendence",
		description1: "My team developed a full-stack multiplayer gaming platform featuring Pong and Block Battle games with real-time gameplay powered by Socket.IO. The backend uses Node.js with Fastify, JWT authentication, and SQLite storage, while the frontend is built with React, TypeScript, and HTML5 Canvas for game rendering. I implemented user authentication, UI/UX, and GDPR compliance features, all containerized with Docker.",
		gifPath: transcendence

	},
	minishell: {
		project: "Minishell", 
		description1: "Me and Leo Storey recreated core bash shell functionality in C, implementing pipes, redirections, built-in commands (echo, cd, pwd, export, unset, env, exit), and proper signal handling for CTRL+C, CTRL+, and CTRL+D. I collaborated with a partner using structured Git workflows and achieved 100% completion on this systems programming project.",
		gifPath: minishell

	},
	ft_irc: {
		project: "ft_irc",
		description1: "My team created an IRC server in C++ that's IRC client compliant, implementing network programming with TCP sockets. The server accepts port and password parameters and includes planned features for port validation, password policies, and encryption considerations. The project demonstrates low-level network programming and protocol implementation skills.",
		gifPath: irc

	},
	cub3d: {
		project: "cub3d",
		description1: "A replication of Wolfenstein made in C. Here I did the parsing of the map, and my classmate Alexandra did the Raycasting",
		gifPath: cub3d
	},
	ezra: {
		project: "Ezra",
		description1: " I created a Python GUI application using Tkinter for preserving educational content from the defunct BRL Center website through the Internet Archive's Wayback Machine. The tool systematically scrapes and downloads ZIP files while implementing respectful rate limiting and progress tracking with SQLite caching.",
		gifPath: ezra

	},
}

export { ProjectsList, intro }