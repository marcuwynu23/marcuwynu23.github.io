
$('#toggleBtn').on('click', function () {
	$('#menu').toggleClass('hidden');
	console.log("hello world!")
});


function insertProject(containerId, project) {
	const projectContainer = $(containerId);
	const projectCard = $("<div>", { "class": "rounded-lg bg-gray-100 overflow-hidden p-3 flex flex-col" });

	const imageContainer = $("<div>", { "class": "h-90 w-full" });
	const image = $("<img>", { "class": "object-cover w-full rounded-md", "src": project.imageUrl, "alt": project.title });
	imageContainer.append(image);

	const contentContainer = $("<div>", { "class": "p-6" });
	const titleElement = $("<h3>", { "class": "text-lg font-semibold mb-2 my-text-secondary-color", "text": project.title });
	const descriptionElement = $("<p>", { "class": "text-gray-700 text-base text-gray-600 ", "text": project.description });

	const languageElement = $("<span>", { "class": "text-xl text-gray-600", "text": project.language });

	contentContainer.append(titleElement);
	contentContainer.append(languageElement);
	contentContainer.append(descriptionElement);


	// topics here 
	const topicsContainer = $("<div>", { "class": "flex flex-wrap mt-2" });
	project.topics.forEach(topic => {
		const topicElement = $("<span>", { "class": "my-bg-color text-white text-xs  rounded-full mr-2 px-2 py-1 m-2", "text": topic });
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
	{
		title: "Just Utility",
		description: "A simple utility library for nodejs",
		imageUrl: "assets/logo.jpg",
		link: "",
		language: "C++",
		topics: ["utility", "nodejs"]
	},
]
let simpleProjectContainerId = "#simple-programs-container";
simpleProjects.forEach(project => insertProject(simpleProjectContainerId, project))


//temporary data insertion in system Project
const systemProjects = [
	{
		title: "Kalapatid: Pigeon Raising and Sport Management System",
		description: "A system that manages the pigeon raising and sport of the Kalapatid Pigeon Club",
		imageUrl: "assets/systems/kpsms.jpg",
		link: "",
		language: "Javascript",
		topics: ["pigeon-raising", "sport", "agriculture", "nodejs"]
	},
	{
		title: "Mini Store Management System",
		description: "A system that manages the inventory of a mini store",
		imageUrl: "assets/logo.jpg",
		link: "",
		language: "Javascript,Vue.js",
		topics: ["store", "management", "system", "mini-store"]
	},
	{
		title: "Agriculture Product and Commodities Information System",
		description: "A system that manages the information of the agriculture products and commodities",
		imageUrl: "assets/logo.jpg",
		link: "",
		language: "Javascript,Vue.js",
		topics: ["agriculture", "commodities", "information", "system"]
	},
	{
		title: "Online Examination System",
		description: "A system that manages the online examination of the students",
		imageUrl: "assets/logo.jpg",
		link: "",
		language: "Javascript,Vue.js",
		topics: ["online-examination", "examination", "system"]
	},
	{
		title: "Blog Content Management System",
		description: "A system that manages the content of the blog handles the api data to client side",
		imageUrl: "assets/logo.jpg",
		link: "",
		language: "Javascript,Vue.js",
		topics: ["blog", "content-management", "system", "headless"]
	}
]
let systemProjectContainerId = "#system-projects-container";
systemProjects.forEach(project => insertProject(systemProjectContainerId, project))