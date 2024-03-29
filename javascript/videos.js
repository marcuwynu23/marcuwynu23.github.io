const videoList = [
  {
    containerId: "videos-container",
    videoLink: "https://youtu.be/RszxsZAq0Ew",
    videoTitle:
      "Narciso - My PHP Open Source Web Framework Project influenced by Laravel and Codeigniter, and inspired by the Narcissus Mythology",
    videoDescription:
      "An artistic movement, this project is inspired by the contemporary cultural phenomenon of narcissism and its implications on society. By addressing themes related to self-absorption and self-obsession, Narciso seeks to raise awareness about mental health issues and promote a more balanced approach to technology and self-expression.",
  },
];

videoList.forEach((video) => {
  insertVideo(
    video.containerId,
    video.videoLink,
    video.videoTitle,
    video.videoDescription
  );
});
