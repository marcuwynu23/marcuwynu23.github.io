$("#toggleBtn").on("click", function () {
  $("#menu").toggleClass("hidden");
});

function insertProject(containerId, project) {
  const projectContainer = $(containerId);
  const projectCard = $("<div>", {
    class:
      "card shadow-md overflow-hidden m-4 flex flex-col animate__animated animate__fadeIn",
  });

  const contentContainer = $("<div>", { class: "px-2 py-3" });
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
    class: " p-2 m-2 rounded-lg  inline border  text-xs text-gray-100 ",
    href: project.link,
    text: "Repository",
  });

  let repoIcon = document.createElement("i");
  repoIcon.className = "fas fa-link mr-2";
  repoElement.prepend(repoIcon);

  const docElement = $("<a>", {
    class: "border rounded-lg p-2 m-2  inline   text-xs text-gray-100 ",
    href: project.link,
    text: "Documentation",
  });

  let docIcon = document.createElement("i");
  docIcon.className = "fas fa-book-open mr-2";
  docElement.prepend(docIcon);

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
      "border-none",
      "shadow-xl",
      "cursor-pointer",
      "rounded-md"
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
      "bg-transparent",
      "text-white",
      "text-xs"
    );
    let icon = document.createElement("i");
    icon.classList.add("fas", "fa-eye");
    previewButton.appendChild(icon);
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
      "mt-2",
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
        "border-none",
        "rounded-md"
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

  projectCard.append(createImageGallery(project.screenshots));
  projectCard.append(contentContainer);

  projectCard.append(otherContainer);

  let topicsTitle = document.createElement("h5");
  topicsTitle.textContent = "Topics and keywords";
  topicsTitle.className = "text-lg font-bold text-gray-300 py-5";
  topicsTitle.classList.add("my-text-secondary-color");

  const topicsContainer = $("<div>", { class: "flex flex-wrap mt-2" });
  project.topics.forEach((topic) => {
    const topicElement = $("<span>", {
      class: "topic-item border rounded-lg  text-xs   mr-2 px-2 py-1 m-2",
      text: topic,
    });
    topicsContainer.append(topicElement);
  });

  projectCard.append(topicsTitle);
  projectCard.append(topicsContainer);
  projectContainer.append(projectCard);
}
