export interface ProjectsProps {
	project: string,
	description: string,
}

let webcrawler: ProjectsProps, 
minishell: ProjectsProps, 
ft_transcendence: ProjectsProps,
ft_irc: ProjectsProps,
ezra: ProjectsProps;

let ProjectsList: Array<ProjectsProps> = [
	webcrawler = {project: "webcrawler", description: "I built a Python-based web crawler that systematically extracts logos from websites using async HTTP requests and SQLite storage. The system includes intelligent scoring algorithms to evaluate logo detection confidence and respects robots.txt protocols. I implemented both crawler and fetcher components that work together to discover and download company logos from domain lists."},
	ft_transcendence = {project: "ft_transcendence", description: "I built a Python-based web crawler that systematically extracts logos from websites using async HTTP requests and SQLite storage. The system includes intelligent scoring algorithms to evaluate logo detection confidence and respects robots.txt protocols. I implemented both crawler and fetcher components that work together to discover and download company logos from domain lists."},
	minishell = {project: "minishell", description: "I recreated core bash shell functionality in C, implementing pipes, redirections, built-in commands (echo, cd, pwd, export, unset, env, exit), and proper signal handling for CTRL+C, CTRL+, and CTRL+D. I collaborated with a partner using structured Git workflows and achieved 100% completion on this systems programming project."},
	ft_irc = {project: "ft_irc", description: "I created an IRC server in C++ that's IRC client compliant, implementing network programming with TCP sockets. The server accepts port and password parameters and includes planned features for port validation, password policies, and encryption considerations. The project demonstrates low-level network programming and protocol implementation skills."},
	ezra = {project: "ezra", description: " I created a Python GUI application using Tkinter for preserving educational content from the defunct BRL Center website through the Internet Archive's Wayback Machine. The tool systematically scrapes and downloads ZIP files while implementing respectful rate limiting and progress tracking with SQLite caching."},
]

export { ProjectsList }