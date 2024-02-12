$("#toggleBtn").on("click", function () {
  $("#menu").toggleClass("hidden");
});

function insertProject(containerId, project) {
  const projectContainer = $(containerId);
  const projectCard = $("<div>", {
    class:
      "card  shadow-sm overflow-hidden m-4 flex flex-col animate__animated animate__fadeIn",
  });

  const contentContainer = $("<div>", { class: "px-2 py-3" });
  const titleElement = $("<h3>", {
    class: "text-xl md:text-2xl  text-left mt-2 font-bold mb-2 ",
    text: project.title,
  });
  const descriptionElement = $("<p>", {
    class: "text-justify mt-5",
    text: project.description,
  });

  const languageElement = $("<span>", {
    class: "text-xs md:text-sm  py-5",
    text: project.language,
  });

  contentContainer.append(titleElement, languageElement, descriptionElement);

  const otherContainer = $("<div>", {
    class: "flex flex-wrap m-2 text-center text-xs md:text-sm",
  });

  const repoElement = $("<a>", {
    class: " mx-3 inline   text-xs md:text-sm  ",
    href: project.link,
    text: "Repository",
  }).prepend($("<i>", { class: "fas fa-link mr-2" }));

  const docElement = $("<a>", {
    class: "mx-3 inline  text-xs md:text-sm  ",
    href: project.link,
    text: "Documentation",
  }).prepend($("<i>", { class: "fas fa-book-open mr-2" }));

  const demoElement = $("<a>", {
    class: "mx-3 inline  text-xs md:text-sm  ",
    href: project.link,
    text: "Demo",
  }).prepend($("<i>", { class: "fas fa-video mr-2" }));

  function createFullWidthImage(imageUrl) {
    const imageContainer = $("<div>", {});

    const image = $("<img>", {
      class: "w-full h-auto border-none hidden md:block",
      src: imageUrl,
      alt: "Full Width Image",
    });

    imageContainer.append(image);

    return imageContainer;
  }

  otherContainer.append(repoElement, docElement, demoElement);

  const topicsTitle = $("<h5>", {
    text: "Topics and keywords",
    class: "text-base md:text-lg font-bold text-gray-300 px-1 ",
  });

  const topicsContainer = $("<div>", { class: "flex flex-wrap mt-2" });

  project.topics.forEach((topic) => {
    const topicElement = $("<span>", {
      class:
        "topic-item  text-xs md:text-sm mr-2 px-2 py-1 m-2 my-bg-quaternary-color ",
      text: topic,
    });

    topicsContainer.append(topicElement);
  });

  // projectCard.append(createImageGallery(project.screenshots));
  projectCard.append(createFullWidthImage(project.screenshots[0]));
  let container = $("<div>", {
    class: "p-4",
  });
  container.append(contentContainer);
  container.append(otherContainer);
  container.append(topicsTitle, topicsContainer);
  projectCard.append(container);
  projectContainer.append(projectCard);
}

function insertDesign(
  containerId,
  imageSrc,
  smallerImages,
  title,
  description
) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add(
    "card",
    "rounded-lg",
    "overflow-hidden",
    "shadow-sm",
    "flex",
    "flex-col",
    "mx-4"
  );

  const largerImageLink = document.createElement("a");
  largerImageLink.href = imageSrc;
  largerImageLink.target = "_blank"; // Open in a new tab
  largerImageLink.rel = "noopener noreferrer"; // Security best practices

  const largerImageElement = document.createElement("img");
  largerImageElement.src = imageSrc;
  largerImageElement.alt = "Video 1";
  largerImageElement.classList.add("w-full", "h-30", "object-cover", "mb-2");

  largerImageLink.appendChild(largerImageElement);
  cardContainer.appendChild(largerImageLink);

  const smallerImagesContainer = document.createElement("div");
  smallerImagesContainer.classList.add(
    "flex-grow",
    "flex",
    "flex-row",
    "overflow-x-auto",
    "scroll-container",
    "justify-center"
  );

  const smallerImagesFlexContainer = document.createElement("div");
  smallerImagesFlexContainer.classList.add("flex", "flex-row");

  smallerImages.forEach((smallerImageSrc) => {
    const smallerImageLink = document.createElement("a");
    smallerImageLink.href = smallerImageSrc;
    smallerImageLink.target = "_blank"; // Open in a new tab
    smallerImageLink.rel = "noopener noreferrer"; // Security best practices

    const smallerImageElement = document.createElement("img");
    smallerImageElement.src = smallerImageSrc;
    smallerImageElement.alt = "Video";
    smallerImageElement.classList.add("w-24", "h-24", "mr-2", "object-cover");

    smallerImageLink.appendChild(smallerImageElement);
    smallerImagesFlexContainer.appendChild(smallerImageLink);
  });

  smallerImagesContainer.appendChild(smallerImagesFlexContainer);
  cardContainer.appendChild(smallerImagesContainer);

  const descriptionSection = document.createElement("div");
  descriptionSection.classList.add("p-4", "my-bg-secondary-color");

  const titleElement = document.createElement("h3");
  titleElement.classList.add("text-lg", "font-bold", "mb-2");
  titleElement.textContent = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("text-gray-700", "text-sm");
  descriptionElement.textContent = description;

  descriptionSection.appendChild(titleElement);
  descriptionSection.appendChild(descriptionElement);

  cardContainer.appendChild(descriptionSection);

  const targetContainer = document.getElementById(containerId);
  if (targetContainer) {
    targetContainer.appendChild(cardContainer);
  } else {
    console.error(`Container with ID "${containerId}" not found.`);
  }
}

function insertVideo(containerId, videoLink, title, description) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add(
    "card",
    "rounded-lg",
    "overflow-hidden",
    "shadow-sm",
    "mx-4"
  );

  const videoEmbed = document.createElement("iframe");
  videoEmbed.src = videoLink;
  videoEmbed.width = "100%";
  videoEmbed.height = "315";
  videoEmbed.frameBorder = "0";
  videoEmbed.allowFullscreen = true;
  videoEmbed.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  );

  const cardContent = document.createElement("div");
  cardContent.classList.add("p-4", "my-bg-secondary-color");

  const videoTitle = document.createElement("h3");
  videoTitle.classList.add("text-lg", "font-bold", "mb-2");
  videoTitle.textContent = title;

  const videoDescription = document.createElement("p");
  videoDescription.classList.add("text-gray-700", "text-sm");
  videoDescription.textContent = description;

  // Append elements to their respective parent containers
  cardContent.appendChild(videoTitle);
  cardContent.appendChild(videoDescription);

  cardContainer.appendChild(videoEmbed);
  cardContainer.appendChild(cardContent);

  // Append the card to the specified container by ID
  const targetContainer = document.getElementById(containerId);
  if (targetContainer) {
    targetContainer.appendChild(cardContainer);
  } else {
    console.error(`Container with ID "${containerId}" not found.`);
  }
}
