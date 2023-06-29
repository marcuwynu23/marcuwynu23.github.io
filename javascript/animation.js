// function createImageGallery(images) {
//   const container = $("<div>", {
//     class: "w-full max-w-lg mx-auto",
//   });

//   const previewContainer = $("<div>", {
//     class: "relative overflow-hidden border border-gray-300",
//   });

//   const previewImage = $("<img>", {
//     class: "object-cover h-64 w-full border-none cursor-pointer rounded-md",
//     src: images[0] || "../assets/placeholder.jpg",
//     alt: "Preview Image",
//   });

//   const previewButton = $("<button>", {
//     class:
//       "absolute top-0 right-0 p-2 bg-transparent text-white text-xs md:text-sm",
//   })
//     .append($("<i>", { class: "fas fa-eye" }))
//     .on("click", () => {
//       window.open(images[0] || "../assets/placeholder.jpg", "_blank");
//     });

//   previewContainer.append(previewImage, previewButton);

//   const slideContainer = $("<div>", {
//     class: "flex space-x-2 overflow-x-auto mt-2 justify-center",
//   });

//   images.forEach((imageUrl, index) => {
//     const slideImage = $("<img>", {
//       class:
//         "object-cover h-16 w-16 cursor-pointer shadow-xl border-none rounded-md",
//       src: imageUrl || "../assets/placeholder.jpg",
//       alt: `Slide Image ${index + 1}`,
//     }).on("click", () => {
//       previewImage.attr("src", imageUrl || "../assets/placeholder.jpg");

//       slideContainer.find("img").removeClass("border-red-500");
//       slideImage.addClass("border-red-500");
//     });

//     slideContainer.append(slideImage);
//   });

//   container.append(previewContainer, slideContainer);

//   return container;
// }
