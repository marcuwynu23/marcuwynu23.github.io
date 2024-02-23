const videoList = [
  {
    containerId: "videos-container",
    videoLink: "https://www.youtube.com/watch?v=9zILhYACQHw&t=54s",
    videoTitle:
      "Video Tutorial - Paano magadd ng sublime Text or kahit anong window application sa right click menu or context menu?",
    videoDescription:
      "This video tutorial is about how to add sublime text or any window application to the right click menu or context menu",
  },
  {
    containerId: "videos-container",
    videoLink: "https://www.youtube.com/watch?v=F512D7hiPVk&t=173s",
    videoTitle:
      "Video Tutorial - Paano nga ba magstore ng data sa file ng hindi gumagamit ng database or json?",
    videoDescription:
      "This video tutorial is about how to store data in a file without using a database or json",
  },
  {
    containerId: "videos-container",
    videoLink: "https://www.youtube.com/watch?v=UVLh5u06Yyg&t=2s",
    videoTitle:
      "Video Tutorial - Paano nga ba gumawa ng Java Frame Program sa Window Commandline?",
    videoDescription:
      "This video tutorial is about how to create a Java Frame Program in the Window Commandline",
  },
  {
    containerId: "videos-container",
    videoLink: "https://www.youtube.com/watch?v=S-uSnCrXlL4",
    videoTitle: "Video Tutorial - Swing Series : GridLayout in Java",
    videoDescription: "This video tutorial is about GridLayout in Java",
  },
  {
    containerId: "videos-container",
    videoLink: "https://www.youtube.com/watch?v=OYvLDeoL6DY&t=21s",
    videoTitle: "Video Tutorial - Swing Series : BorderLayout in Java",
    videoDescription: "This video tutorial is about BorderLayout in Java",
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
