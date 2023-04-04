
$('#toggleBtn').on('click', function () {
	$('#menu').toggleClass('hidden');
	console.log("hello world!")
});


function insertProject(project) {
	const projectContainer = $("#console-tools-container");
	const projectCard = $("<div>", { "class": " bg-white rounded-lg overflow-hidden p-3 flex flex-col" });

	const imageContainer = $("<div>", { "class": "h-90 w-full" });
	const image = $("<img>", { "class": "object-cover rounded-lg w-full h-full", "src": project.imageUrl, "alt": project.title });
	imageContainer.append(image);

	const contentContainer = $("<div>", { "class": "p-6" });
	const titleElement = $("<h3>", { "class": "text-lg font-semibold mb-2 my-text-secondary-color", "text": project.title });
	const descriptionElement = $("<p>", { "class": "text-gray-700 text-base text-gray-600 ", "text": project.description });
	contentContainer.append(titleElement);
	contentContainer.append(descriptionElement);

	// topics here 
	const topicsContainer = $("<div>", { "class": "flex flex-wrap mt-4" });
	project.topics.forEach(topic => {
		const topicElement = $("<span>", { "class": "my-bg-color text-white text-xs  rounded-full mr-2 px-2 py-1 ", "text": topic });
		topicsContainer.append(topicElement);
	});

	const linkElement = $("<a>", { "class": "mt-4 py-2 px-4 underline rounded transition-all duration-200 text-mute", "href": project.link, "text": "learn more..." });

	projectCard.append(imageContainer);
	projectCard.append(contentContainer);
	projectCard.append(linkElement);
	projectCard.append(topicsContainer);
	projectContainer.append(projectCard);
}



const repoNames = ['just-utility', 'AutoCLI', 'sdir']; // list of repository names to filter by
fetch('https://api.github.com/users/marcuwynu23/repos')
	.then(response => response.json())
	.then(data => {
		const filteredRepos = data.filter(repo => repoNames.includes(repo.name));

		filteredRepos.forEach(repo => {
			let imageUrl = repo.html_url + "/blob/main/docs/images/1.jpg?raw=true"
			let altImageUrl = "https://placehold.co/400";
			const project = {
				title: repo.name,
				description: repo.description,
				imageUrl: imageUrl,
				link: repo.html_url,
				topics: repo.topics
			};
			insertProject(project);
		}
		);

	})
	.catch(error => console.error(error));
