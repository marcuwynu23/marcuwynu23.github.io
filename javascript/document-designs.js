const designs = [
  {
    containerId: "document-design-container",
    imageSrc: "./assets/screenshots/designs/document/movie-analysis/1.jpg",
    smallerImagesSrc: [
      "./assets/screenshots/designs/document/movie-analysis/1.jpg",
      "./assets/screenshots/designs/document/movie-analysis/2.jpg",
      "./assets/screenshots/designs/document/movie-analysis/3.jpg",
      "./assets/screenshots/designs/document/movie-analysis/4.jpg",
      "./assets/screenshots/designs/document/movie-analysis/5.jpg",
      "./assets/screenshots/designs/document/movie-analysis/6.jpg",
      "./assets/screenshots/designs/document/movie-analysis/7.jpg",
      "./assets/screenshots/designs/document/movie-analysis/8.jpg",
    ],
    cardTitle: "Movie Analysis Cover Design and Layout",
    cardDescription: "A cover design and layout for a movie analysis.",
  },
];

designs.forEach((design) => {
  insertDesign(
    design.containerId,
    design.imageSrc,
    design.smallerImagesSrc,
    design.cardTitle,
    design.cardDescription
  );
});
