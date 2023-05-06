const toolProjects = [
	{
		title: "Auto-CLI",
		description:
			"AutoCLI is a user-friendly command-line automation tool for Windows users. It allows you to create scripts that automate repetitive tasks by executing one or multiple commands in a new terminal instance. The tool is easy to use and supports a wide range of executable commands, which can be customized to fit your specific needs and making it easy to automate tasks on a recurring basis. Overall, AutoCLI is a great tool for anyone who wants to streamline their command-line workflows and save time on repetitive tasks.",
		link: "https://github.com/marcuwynu23/AutoCLI.git",
		language: "C++",
		topics: [
			"windows",
			"shell",
			"console",
			"commandline",
			"tool",
			"automation",
			"cli",
			"commandline automation",
			"windows automation",
			"windows cli",
			"batch",
			"multi-instance",
			"cmd",
		],
		screenshots: [
			"assets/screenshots/tools/autocli/0.jpg",
			"assets/screenshots/tools/autocli/0.jpg",
			"assets/screenshots/tools/autocli/0.jpg",
			"assets/screenshots/tools/autocli/0.jpg",
		],
	},
	{
		title: "Just Utility",
		description:
			"A commandline Utilities and Tools in window written c++ and uses window buildin utilities and other 3rd party tools automated, compacted and cascaded in a simple command. It is use for easy navigating in the terminal and for learning and developing simple projects, doing experiments,simple networking,etc.",
		link: "https://github.com/marcuwynu23/just-utility.git",
		language: "ExpressJS, Mongodb,NodeJS and Nunjucks Template Engine",
		topics: [
			"console",
			"cmd",
			"commandline-tool",
			"c++",
			"makefile",
			"terminal development",
			"windows",
			"shell",
		],
		screenshots: [
			"assets/screenshots/tools/justutil/0.jpg",
			"assets/screenshots/tools/justutil/1.jpg",
			"assets/screenshots/tools/justutil/2.jpg",
			"assets/screenshots/tools/justutil/3.jpg",
		],
	},
	{
		title: "stgen-cli",
		description:
			"a commandline tool or a program use to generate static html file",
		link: "https://github.com/marcuwynu23/stgen-cli.git",
		language: "html, css, javascript,python",
		topics: ["html", "console", "tool", "includes", "static", "html generator"],
		screenshots: [
			"assets/screenshots/tools/stgen/0.jpg",
			"assets/screenshots/tools/stgen/0.jpg",
			"assets/screenshots/tools/stgen/0.jpg",
			"assets/screenshots/tools/stgen/0.jpg",
		],
	},
	{
		title: "bahagi",
		description: "a python scraping tool to get website table data",
		link: "https://github.com/marcuwynu23/bahagi.git",
		language: "html, css, javascript,python",
		topics: [
			"html",
			"console",
			"tool",
			"requests",
			"data",
			"datasets",
			"scraping",
			"python",
			"python scraping",
		],
		screenshots: [
			"assets/screenshots/tools/bahagi/1.jpg",
			"assets/screenshots/tools/bahagi/1.jpg",
			"assets/screenshots/tools/bahagi/1.jpg",
			"assets/screenshots/tools/bahagi/1.jpg",
		],
	},
];
let toolProjectContainerId = "#console-tools-container";
toolProjects.forEach((project) =>
	insertProject(toolProjectContainerId, project)
);
