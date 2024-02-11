const videoList = [
  {
    containerId: "videos-container",
    videoLink: "https://www.youtube.com/embed/yourvideoid2",
    videoTitle: "Video Title 1",
    videoDescription: "Short description of Video 1.",
  },
  // Add more video objects as needed
];

videoList.forEach((video) => {
  insertVideo(
    video.containerId,
    video.videoLink,
    video.videoTitle,
    video.videoDescription
  );
});