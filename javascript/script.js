$("#toggleBtn").on("click", function () {
	$("#menu").toggleClass("hidden");
});

function insertProject(containerId, project) {
	const projectContainer = $(containerId);
	const projectCard = $("<div>", {
		class:
			"card border  bg-gray-50 overflow-hidden p-5 m-4 flex flex-col animate__animated animate__fadeIn",
	});

	const contentContainer = $("<div>", { class: "px-5 py-2" });
	const titleElement = $("<h3>", {
		class: "text-2xl font-bold mb-2 my-text-special-color",
		text: project.title,
	});
	const descriptionElement = $("<p>", {
		class: " text-gray-800 text-justify ",
		text: project.description,
	});

	const languageElement = $("<span>", {
		class: "text-sm text-gray-600 py-5",
		text: project.language,
	});

	contentContainer.append(titleElement);
	contentContainer.append(document.createElement("hr"));
	contentContainer.append(languageElement);
	contentContainer.append(document.createElement("hr"));
	contentContainer.append(descriptionElement);

	// topics here
	const topicsContainer = $("<div>", { class: "flex flex-wrap mt-2" });
	project.topics.forEach((topic) => {
		const topicElement = $("<span>", {
			class:
				"my-bg-special-color my-text-color text-xs bold  mr-2 px-2 py-1 m-2",
			text: topic,
		});
		topicsContainer.append(topicElement);
	});

	const otherContainer = $("<div>", {
		class: "flex flex-wrap m-2 text-center text-sm",
	});

	const repoElement = $("<a>", {
		class: "m-2  inline  rounded text-xs",
		href: project.link,
		text: "Repository",
	});
	const repoIcon = $("<span>", { class: "fas fa-file-code me-1" });
	repoElement.prepend(repoIcon);

	const docElement = $("<a>", {
		class: "m-2  inline rounded text-xs",
		href: project.link,
		text: "Documentation",
	});
	const docIcon = $("<span>", { class: "fas fa-file-pdf me-1" });
	docElement.prepend(docIcon);

	function createImageGrid(images) {
		const container = document.createElement("div");
		container.classList.add(
			"grid",
			"grid-cols-2",
			"md:grid-cols-3",
			"gap-4",
			"my-2",
			"p-4"
		);

		images.forEach((imageUrl) => {
			const div = document.createElement("div");
			const img = document.createElement("img");
			const link = document.createElement("a");
			link.setAttribute("href", imageUrl);
			link.setAttribute("target", "_blank");
			img.classList.add("h-auto", "max-w-full", "shadow");
			img.setAttribute("src", imageUrl);
			img.setAttribute("alt", "");
			link.appendChild(img);

			div.appendChild(link);
			container.appendChild(div);
		});
		return container;
	}

	const imageGrid = createImageGrid(project.screenshots);

	otherContainer.append(repoElement);
	otherContainer.append(docElement);

	projectCard.append(contentContainer);
	projectCard.append(otherContainer);

	projectCard.append(imageGrid);
	let topicsTitle = document.createElement("h5");
	topicsTitle.textContent = "Topics and keywords";
	topicsTitle.classList.add("my-text-secondary-color");
	projectCard.append(topicsTitle);
	projectCard.append(topicsContainer);
	projectContainer.append(projectCard);
}
