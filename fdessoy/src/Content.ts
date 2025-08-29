// bio

let bio1: string;
let bio2: string;
let bio3: string;

bio1 = "My name is Felipe Justo José Dessoy Caraballo. I'm a full stack engineer with a passion for helping."
bio2 = "Born in Brazil, I have been going against the odds and did some quite amazing things such as speak on live television, move to another continent, and meet two Finnish Prime Ministers! Ask me personally about that one."
bio3 = "In 2018 I decided to follow my dream to finally start programming, and that's when I completed a comprehensive C++ course in Udemy. Since then, I have been dreaming to become a professional software developer. "

// portfolio

let portfolio1: string;
let portfolio2: string;
let portfolio3: string;

portfolio1 = "In 2023 I was accepted to Hive Helsinki, where I started learning from their peer-to-peer model and I made a serious commitment to becoming a software developer.";
portfolio2 = "Most of my projects are a result of from learning together with my school peers. Some of these projects were made in collaboration with them, and others I planned, designed, and executed myself."
portfolio3 = "My portfolio below might not be surprising to some seasoned senior devs, but I take great pride in everything I have built. Including this website!";

export { bio1, bio2, bio3, portfolio1, portfolio2, portfolio3 }

// PROJECTS

import { type ProjectsCollection } from './Types'
import minishell from './assets/minishell.gif'
import transcendence from './assets/ft_transcendence.gif'
import irc from './assets/ft_irc.gif'
import ezra from './assets/ezra.png'
import webcrawler from './assets/webcrawler.gif'
import airguardian from './assets/airguardian.gif'

let ProjectsList: ProjectsCollection = {
	webcrawler: {
		project: "Webcrawler", 
        description1: "Written in python, the crawler bot retrieves companies' logos. It operates in a similar fashion as GPT, Google, and other crawler bots that indexate websites. This was done with minimal external libraries and depends mostly on built-in libraries.",
        description2: "This web crawler systematically extracts logos from websites using async HTTP requests and SQLite storage. The system includes intelligent scoring algorithms to evaluate logo detection confidence and respects robots.txt protocols. I implemented both crawler and fetcher components that work together to discover and download company logos from domain lists.",
		description3: "Libraries/frameworks/technologies used: nix virtual-environment, SQLite3, aiohttp, asyncio, poetry",
		gifPath: webcrawler,
		link: "https://www.github.com/fjjdessoycaraballo/webcrawler"
	},
	ft_transcendence: {
		project: "ft_transcendence",
		description1: "My team developed a full-stack multiplayer gaming platform featuring Pong and Block Battle games with real-time gameplay powered by Socket.IO. The backend uses Node.js with Fastify, JWT authentication, and SQLite storage, while the frontend is built with React, TypeScript, and HTML5 Canvas for game rendering. I implemented user authentication, UI/UX, and GDPR compliance features, all containerized with Docker.",
		description2: "My role was on UI/UX, connecting data pipelines, and GDPR compliance. The frontend was done in React. I established the datapilines through a background JS web worker, making XSS attack proof. Additionally, I designed the layout, UI/UX, and general user management aspects of the frontend. As for GDPR compliance, users can request data download, deletion, and anonymization.",
		description3: "Libraries/frameworks/technologies used: React, JWT, Node.js, SQLite3, Tailwind CSS, HTML5, WebSockets, Docker, Docker compose, Makefile, REST API, webpack, i18n, fastify.",
        gifPath: transcendence,
		link: "https://www.github.com/fjjdessoycaraballo/ft_transcendence"
	},
	airguardian: {
		project: "Air-guardian",
		description1: "The Air-guardian is a middleware done in collaboration with Zakaria Farah. This app collects data of drones in JSON format from https://drones-api.hive.fi and analyzes proximity of all drones from the epicenter of our No-Fly Zone (NFZ).",
		description2: "As the Air-guardian tracks and detects offending drones in the NFZ, we log their information into a lightweight database. For recurring offenses, we log the latest offense into the database. This app utilizes Celery for recurring tasks and RabbitMQ for queueing and scheduling tasks.",
		description3: "Libraries/frameworks/technologies used: RabbitMQ, FastAPI, logger, requests, SQLite3, Celery",
		gifPath: airguardian,
		link: "https://www.github.com/fjjdessoycaraballo/air-guardian"
	},
	minishell: {
		project: "Minishell", 
		description1: "Leo Storey and I recreated core bash shell functionality in C, implementing pipes, redirections, built-in commands (echo, cd, pwd, export, unset, env, exit), and proper signal handling for CTRL+C, CTRL+, and CTRL+D. I collaborated with a partner using structured Git workflows and achieved 100% completion on this systems programming project.",
        description2: "If you take a look at the technologies used, you will see that there are no major libraries of fancy frameworks being used here. The majority of functionalities were recreated from scratch. There were no memory-safety, no null-safety, nothing. Everything had to be written and checked manually. Notwithstanding, most of the other library tools used here were also written by us.",
		description3: "Libraries/frameworks/technologies used: readline, Makefile, signals.",
        gifPath: minishell,
		link: "https://www.github.com/fjjdessoycaraballo/minishell"
	},
	ft_irc: {
		project: "ft_irc",
		description1: "My team created an IRC server in C++ that's IRC client compliant, implementing network programming with TCP sockets. The server accepts port and password parameters and includes planned features for port validation, password policies, and encryption considerations. The project demonstrates low-level network programming and protocol implementation skills.",
		description2: "In less fancy words, this is how people chatted in the web in the old days.",
        description3: "Libraries/frameworks/technologies used: Internet Protocol (IP), webservers, sockets, signals, IRC Protocols and syntax",
        gifPath: irc,
		link: "https://www.github.com/arminkuburas/ft_irc"
		
	},
	ezra: {
		project: "Ezra",
		description1: "I created a Python GUI application using Tkinter for preserving educational content from the defunct BRL Center website through the Internet Archive's Wayback Machine. The tool systematically scrapes and downloads ZIP files while implementing respectful rate limiting and progress tracking with SQLite caching.",
		description2: "This particular project is not a great show of skill, but it shows my motivation and passion in coding: helping people with my skills.",
		description3: "Libraries/frameworks/technologies used: tkinter, HTTP requests, SQLite3, HTMLParser, HTML5",
		gifPath: ezra,
		link: "https://www.ezracenter.org"
	},
	}
	
export { ProjectsList }
	
	
// https://www.linkedin.com/in/zakariafarah/
	
	
	
	
	
	
		// cub3d: {
		// 	project: "cub3d",
		// 	description1: "A replication of Wolfenstein made in C. Here I did the parsing of the map, and Alexandra did the raycasting. This is another project in which we were highly constrained and could not use external libraries, except for the school's own graphics library.",
		//     description2: "As I mentioned, in this specific project I did the parsing, so I was responsible for cleaning and organizing the input in a way that our program would be able to process. It seems rather easy, except that the input file could've been tampered in almost any possible way, except for a few arbitrary exceptions.",
		// 	description3: "Libraries/frameworks/technologies used: graphics (MLX42) and ray-casting",
		//     gifPath: cub3d,
		// 	link: "https://www.github.com/fjjdessoycaraballo/cub3d"
		// },

	// import cub3d from './assets/cub3d.gif'