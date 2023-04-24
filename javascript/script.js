
$('#toggleBtn').on('click', function () {
	$('#menu').toggleClass('hidden');
});


function insertProject(containerId, project) {
	const projectContainer = $(containerId);
	const projectCard = $("<div>", { "class": "card rounded-lg shadow-sm max-w-lg border-gray-100  overflow-hidden p-5 flex flex-col" });

	const imageContainer = $("<div>", { "class": "w-full flex justify-center " });
	const image = $("<img>", { "class": "object-cover max-w-md  rounded-md", "src": project.imageUrl, "alt": project.title });
	imageContainer.append(image);

	const contentContainer = $("<div>", { "class": "p-6" });
	const titleElement = $("<h3>", { "class": "text-lg font-semibold mb-2 my-text-secondary-color", "text": project.title });
	const descriptionElement = $("<p>", { "class": " text-base text-gray-200 text-justify ", "text": project.description });

	const languageElement = $("<span>", { "class": "text-xl text-gray-400", "text": project.language });

	contentContainer.append(titleElement);
	contentContainer.append(languageElement);
	contentContainer.append(descriptionElement);


	// topics here 
	const topicsContainer = $("<div>", { "class": "flex flex-wrap mt-2" });
	project.topics.forEach(topic => {
		const topicElement = $("<span>", { "class": "my-text-color my-bg-color text-white font-bold text-xs  rounded-full mr-2 px-2 py-1 m-2", "text": topic });
		topicsContainer.append(topicElement);
	});
	const otherContainer = $("<div>", { "class": "flex flex-wrap m-2" });

	const repoElement = $("<a>", { "class": "m-2  inline  rounded transition-all duration-200 ", "href": project.link, "text": "Repository" });
	const repoIcon = $("<span>", { "class": "bi bi-github me-1" });
	repoElement.prepend(repoIcon);

	const docElement = $("<a>", { "class": "m-2  inline rounded transition-all duration-200 ", "href": project.link, "text": "Documentation" });
	const docIcon = $("<span>", { "class": "bi bi-book me-1" });
	docElement.prepend(docIcon);

	otherContainer.append(repoElement);
	otherContainer.append(docElement);

	projectCard.append(imageContainer);
	projectCard.append(contentContainer);
	projectCard.append(otherContainer);
	projectCard.append(topicsContainer);
	projectContainer.append(projectCard);
}



const repoNames = ['sdir', 'what-port-is', 'stgen-cli', 'bahagi', 'just-utility', 'AutoCLI']; // list of repository names to filter by
function setProjects(repoNames, filter) {
	fetch('https://api.github.com/users/marcuwynu23/repos?sort=updated&direction=desc')
		.then(response => response.json())
		.then(data => {
			const filteredRepos = data.filter(repo => repoNames.includes(repo.name));
			console.log(data)
			data.forEach(repo => {
				// check if topics contains 'tool' and 'console'
				if (!repo.topics.includes(filter)) return
				let imageUrl = repo.html_url + "/blob/main/docs/images/1.jpg?raw=true"
				const project = {
					title: repo.name,
					description: repo.description,
					imageUrl: imageUrl,
					link: repo.html_url,
					language: repo.language,
					topics: repo.topics
				};
				insertProject("#console-tools-container", project);
			}
			);
		})
		.catch(error => console.error(error));
}

setProjects(repoNames, 'tool')





const simpleProjects = [
	// {
	// 	title: "Just Utility",
	// 	description: "A simple utility library for nodejs",
	// 	imageUrl: "assets/logo.jpg",
	// 	link: "",
	// 	language: "C++",
	// 	topics: ["utility", "nodejs"]
	// },
]
let simpleProjectContainerId = "#simple-programs-container";
simpleProjects.forEach(project => insertProject(simpleProjectContainerId, project))


//temporary data insertion in system Project
const systemProjects = [
	{
		title: "Kalapatid: Pigeon Raising and Sport Management System",
		description: "The Kalapatid Pigeon Raising and Sport Management System is a web-based application built using JavaScript that manages the pigeon raising and sport activities of the Kalapatid Pigeon Club. It enables members to manage their pigeon inventory, track breeding activities, register for racing events, and communicate with other members.",
		imageUrl: "assets/systems/kpsms.jpg",
		link: "",
		language: "Javascript",
		topics: ["pigeon-raising", "sport", "agriculture", "nodejs"]
	},
	{
		title: "Mini Store Management System",
		description: "A Mini Store Management System is a software application that allows store owners to manage their inventory effectively. It helps track the quantity of products available, sales made, and other details such as supplier information, purchase orders, and customer records. The system is built using JavaScript and Vue.js, making it a responsive and dynamic web application that can be accessed from any device with an internet connection. The interface is intuitive and user-friendly, allowing users to navigate through different features easily. With this system, store owners can make informed decisions, manage stock levels efficiently, and provide better customer service.",
		imageUrl: "assets/logo.jpg",
		link: "",
		language: "Javascript,Vue.js",
		topics: ["store", "management", "system", "mini-store"]
	},
	{
		title: "Agriculture Product and Commodities Information System",
		description: "This system is designed to manage the information related to agriculture products and commodities. It helps farmers and agricultural businesses keep track of their inventory, sales, and distribution. The system can also provide insights into market trends and crop yields, enabling better decision-making and improving efficiency in the agriculture industry.",
		imageUrl: "assets/logo.jpg",
		link: "",
		language: "Javascript,Vue.js",
		topics: ["agriculture", "commodities", "information", "system"]
	},
	{
		title: "Online Examination System",
		description: "This system is designed to manage online examinations for students. It allows teachers to create and administer tests, and students to take them remotely through a secure online platform. The system can automatically grade the tests and provide detailed reports on student performance, making it easier for teachers to evaluate and improve their teaching.",
		imageUrl: "assets/logo.jpg",
		link: "",
		language: "Javascript,Vue.js",
		topics: ["online-examination", "examination", "system"]
	},
	{
		title: "Blog Content Management System",
		description: "This system manages the content of a blog and handles the API data to the client-side. It enables bloggers to create, edit and publish their posts through an easy-to-use interface. Additionally, it fetches data from external APIs and displays it on the client-side, allowing bloggers to supplement their content with additional information.",
		imageUrl: "assets/logo.jpg",
		link: "",
		language: "Javascript,Vue.js",
		topics: ["blog", "content-management", "system", "headless"]
	}
]
let systemProjectContainerId = "#system-projects-container";
systemProjects.forEach(project => insertProject(systemProjectContainerId, project))