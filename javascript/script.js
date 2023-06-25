$("#toggleBtn").on("click", function () {
	$("#menu").toggleClass("hidden");
});

function insertProject(containerId, project) {
	const projectContainer = $(containerId);
	const projectCard = $("<div>", {
		class:
			"card overflow-hidden p-5 m-4 flex flex-col animate__animated animate__fadeIn",
	});

	const contentContainer = $("<div>", { class: "px-5 py-2" });
	const titleElement = $("<h3>", {
		class: "text-2xl font-bold mb-2",
		text: project.title,
	});
	const descriptionElement = $("<p>", {
		class: " text-gray-200 text-justify ",
		text: project.description,
	});

	const languageElement = $("<span>", {
		class: "text-sm text-gray-300 py-5",
		text: project.language,
	});

	contentContainer.append(titleElement);
	contentContainer.append(languageElement);
	contentContainer.append(descriptionElement);

	const otherContainer = $("<div>", {
		class: "flex flex-wrap m-2 text-center text-sm",
	});

	const repoElement = $("<a>", {
		class: " p-2 m-2  inline border rounded text-xs text-gray-100 ",
		href: project.link,
		text: "Repository",
	});

	const docElement = $("<a>", {
		class: "border p-2 m-2  inline  rounded text-xs text-gray-100 ",
		href: project.link,
		text: "Documentation",
	});

	function createImageGallery(images) {
		const container = document.createElement("div");
		container.classList.add("w-full", "max-w-lg", "mx-auto");

		const previewContainer = document.createElement("div");
		previewContainer.classList.add("relative", "overflow-hidden", "h-64");

		const previewImage = document.createElement("img");
		previewImage.classList.add(
			"object-cover",
			"h-full",
			"w-full",
			"border",
			"border-gray-700",
			"rounded"
		);
		previewImage.setAttribute("src", images[0] || "../assets/placeholder.jpg");
		previewImage.setAttribute("alt", "Preview Image");

		previewContainer.appendChild(previewImage);

		// Create a preview button
		const previewButton = document.createElement("button");
		previewButton.classList.add(
			"absolute",
			"top-0",
			"right-0",
			"p-2",
			"bg-gray-700",
			"text-white",
			"text-xs"
		);
		previewButton.textContent = "Preview";
		previewButton.addEventListener("click", () => {
			// Open a new window or popup to show the full image
			window.open(images[0] || "../assets/placeholder.jpg", "_blank");
		});
		previewContainer.appendChild(previewButton);

		const slideContainer = document.createElement("div");
		slideContainer.classList.add(
			"flex",
			"space-x-2",
			"overflow-x-auto",
			"mt-4",
			"justify-center"
		);

		images.forEach((imageUrl, index) => {
			const slideImage = document.createElement("img");
			slideImage.classList.add(
				"object-cover",
				"h-16",
				"w-16",
				"cursor-pointer",
				"shadow-xl",
				"border",
				"border-gray-700",
				"rounded"
			);
			slideImage.setAttribute("src", imageUrl || "../assets/placeholder.jpg");
			slideImage.setAttribute("alt", `Slide Image ${index + 1}`);

			slideImage.addEventListener("click", () => {
				previewImage.setAttribute(
					"src",
					imageUrl || "../assets/placeholder.jpg"
				);

				// Remove the highlight class from all slide images
				const slideImages = slideContainer.querySelectorAll("img");
				slideImages.forEach((img) => {
					img.classList.remove("border-red-500");
				});

				// Add the highlight class to the selected slide image
				slideImage.classList.add("border-red-500");
			});

			slideContainer.appendChild(slideImage);
		});

		container.appendChild(previewContainer);
		container.appendChild(slideContainer);

		return container;
	}

	otherContainer.append(repoElement);
	otherContainer.append(docElement);

	projectCard.append(contentContainer);

	projectCard.append(otherContainer);

	projectCard.append(createImageGallery(project.screenshots));

	let topicsTitle = document.createElement("h5");
	topicsTitle.textContent = "Topics and keywords";
	topicsTitle.className = "text-lg font-bold text-gray-300 py-5";
	topicsTitle.classList.add("my-text-secondary-color");

	const topicsContainer = $("<div>", { class: "flex flex-wrap mt-2" });
	project.topics.forEach((topic) => {
		const topicElement = $("<span>", {
			class: "topic-item border rounded  text-xs   mr-2 px-2 py-1 m-2",
			text: topic,
		});
		topicsContainer.append(topicElement);
	});

	projectCard.append(topicsTitle);
	projectCard.append(topicsContainer);
	projectContainer.append(projectCard);
}
