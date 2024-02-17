const webs = [
  // {
  //   containerId: "web-design-container",
  //   imageSrc: "./assets/placeholder.jpg",
  //   smallerImagesSrc: [
  //     "./assets/placeholder.jpg",
  //     "./assets/placeholder.jpg",
  //     "./assets/placeholder.jpg",
  //     "./assets/placeholder.jpg",
  //     "./assets/placeholder.jpg",
  //   ],
  //   cardTitle: "Document Assistance Management System Design (DAMS)",
  //   cardDescription:
  //     "A web application for the management of a document assistance center.",
  // },
];

webs.forEach((web) => {
  insertDesign(
    web.containerId,
    web.imageSrc,
    web.smallerImagesSrc,
    web.cardTitle,
    web.cardDescription
  );
});
