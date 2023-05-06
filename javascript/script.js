$("#toggleBtn").on("click", function () {
	$("#menu").toggleClass("hidden");
});

function insertProject(containerId, project) {
	const projectContainer = $(containerId);
	const projectCard = $("<div>", {
		class:
			"card rounded-lg shadow-sm border-none overflow-hidden p-5 m-4 flex flex-col animate__animated animate__fadeIn",
	});

	let titleUppercase = project.title.toUpperCase();
	const contentContainer = $("<div>", { class: "p-6" });
	const titleElement = $("<h3>", {
		class: "text-lg font-semibold mb-2 my-text-secondary-color",
		text: titleUppercase,
	});
	const descriptionElement = $("<p>", {
		class: " text-gray-200 text-justify ",
		text: project.description,
	});

	const languageElement = $("<span>", {
		class: "text-sm text-gray-400 py-5",
		text: project.language,
	});

	contentContainer.append(titleElement);
	contentContainer.append(languageElement);
	contentContainer.append(descriptionElement);

	// topics here
	const topicsContainer = $("<div>", { class: "flex flex-wrap mt-2" });
	project.topics.forEach((topic) => {
		const topicElement = $("<span>", {
			class:
				"my-bg-secondary-color my-text-secondary-color shadow-sm text-xs  rounded-full mr-2 px-2 py-1 m-2",
			text: topic,
		});
		topicsContainer.append(topicElement);
	});

	const otherContainer = $("<div>", {
		class: "flex flex-wrap m-2 text-center",
	});

	const repoElement = $("<a>", {
		class: "m-2  inline  rounded ",
		href: project.link,
		text: "Repository",
	});
	const repoIcon = $("<span>", { class: "fas fa-file-code me-1" });
	repoElement.prepend(repoIcon);

	const docElement = $("<a>", {
		class: "m-2  inline rounded",
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
			"my-2"
		);

		images.forEach((imageUrl) => {
			const div = document.createElement("div");
			const img = document.createElement("img");
			const link = document.createElement("a");
			link.setAttribute("href", imageUrl);
			link.setAttribute("target", "_blank");
			img.classList.add(
				"h-auto",
				"max-w-full",
				"rounded-lg",
				"border-2",
				"border-gray-800"
			);
			img.setAttribute("src", imageUrl);
			img.setAttribute("alt", "");
			link.appendChild(img);

			div.appendChild(link);
			container.appendChild(div);
		});
		return container;
	}

	const imageGrid = createImageGrid(project.screenshots);

	const videoContainer = $("<div>", {
		class: "flex justify-center w-full m-2",
	});
	const videoElement = $("<iframe>", {
		class: "m-2 inline rounded",
		src: "https://www.youtube.com/embed/vCzhn-pHvGg",
		text: "Repository",
		allowfullscreen: true,
	});

	videoContainer.append(videoElement);

	otherContainer.append(repoElement);
	otherContainer.append(docElement);

	projectCard.append(otherContainer);
	projectCard.append(contentContainer);

	projectCard.append(imageGrid);
	let topicsTitle = document.createElement("h5");
	topicsTitle.textContent = "Topics and keywords";
	topicsTitle.classList.add("my-3", "my-text-secondary-color");
	projectCard.append(topicsTitle);
	projectCard.append(topicsContainer);
	projectContainer.append(projectCard);
}
