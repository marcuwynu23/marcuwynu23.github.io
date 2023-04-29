const simpleProjects = [
	{
		title: "Mushroom Webshop Website",
		description: "The Kalapatid Pigeon Raising and Sport Management System is a web-based application built using JavaScript that manages the pigeon raising and sport activities of the Kalapatid Pigeon Club. It enables members to manage their pigeon inventory, track breeding activities, register for racing events, and communicate with other members.",
		link: "https://github.com/marcuwynu23/mushroom-website.git",
		language: "Flask and Jinja Template Engine",
		topics: ["pigeon-raising", "sport", "agriculture", "nodejs"],
		screenshots: [
			"assets/screenshots/simples/mushroom/0.jpg",
			"assets/screenshots/simples/mushroom/1.jpg",
			"assets/screenshots/simples/mushroom/0.jpg",
			"assets/screenshots/simples/mushroom/1.jpg",
		]
	},
	{
		title: "Dummy Text Generator",
		description: "A Browser Extension help generate random words, sentences, or paragraph",
		link: "https://github.com/marcuwynu23/Dummy-Text-Generator.git",
		language: "Javascript",
		topics: ["browser-extension", "chrome-extension", "firefox-extension", "dummy-text", "text-generator", "random-text", "random-words", "random-sentences", "random-paragraph"],
		screenshots: [
			"assets/screenshots/simples/dummy-text-generator/0.jpg",
			"assets/screenshots/simples/dummy-text-generator/0.jpg",
			"assets/screenshots/simples/dummy-text-generator/0.jpg",
			"assets/screenshots/simples/dummy-text-generator/0.jpg",
		]

	},
	{
		title: "Web QR Code Generator",
		description: "A Sample QR Code Generator Web Application",
		link: "https://github.com/marcuwynu23/qr-code-generator.gits",
		language: "Javascript",
		topics: ["node.js", "qr", "qr-code", "qr-code-generator", "qr-code-generator-web", "qr-code-generator-web-application", "qr-code-generator-web-app"],
		screenshots: [
			"assets/screenshots/simples/qr-generator/0.jpg",
			"assets/screenshots/simples/qr-generator/0.jpg",
			"assets/screenshots/simples/qr-generator/0.jpg",
			"assets/screenshots/simples/qr-generator/0.jpg",
		]
	}, {
		title: "Quiz App",
		description: "A Sample Quiz App",
		link: "https://github.com/marcuwynu23/quiz-app.git",
		language: "Javascript, HTML, CSS,Angular and Bootstrap",
		topics: ["quiz", "quiz-app", "quiz-app-web", "angular", "angular-quiz-app"],
		screenshots: []
	}
]
let simpleProjectContainerId = "#simple-programs-container";
simpleProjects.forEach(project => insertProject(simpleProjectContainerId, project))
