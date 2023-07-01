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
    class: "text-xl md:text-2xl  text-left mt-2 font-bold mb-2",
    text: project.title,
  });
  const descriptionElement = $("<p>", {
    class: "    text-left ",
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
    class: "p-2 m-2 rounded-lg  inline border  text-xs md:text-sm  ",
    href: project.link,
    text: "Repository",
  }).prepend($("<i>", { class: "fas fa-link mr-2" }));

  const docElement = $("<a>", {
    class: "border rounded-lg p-2 m-2  inline  text-xs md:text-sm  ",
    href: project.link,
    text: "Documentation",
  }).prepend($("<i>", { class: "fas fa-book-open mr-2" }));

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

  otherContainer.append(repoElement, docElement);

  const topicsTitle = $("<h5>", {
    text: "Topics and keywords",
    class:
      "text-base md:text-lg font-bold text-gray-300 px-1 my-text-quaternary-color",
  });

  const topicsContainer = $("<div>", { class: "flex flex-wrap mt-2" });

  project.topics.forEach((topic) => {
    const topicElement = $("<span>", {
      class:
        "topic-item border rounded-lg text-xs md:text-sm mr-2 px-2 py-1 m-2",
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
