const simpleProjects = [
  {
    title: "Mushroom Shop Website",
    description:
      "With a user-friendly interface, it offers a diverse range of fresh, dried, and powdered mushrooms sourced from trusted suppliers. Explore an extensive selection of mushroom products, including supplements, tinctures, and skincare items. Dive into a wealth of educational resources and expert advice to expand your knowledge and appreciation for mushrooms. Engage with a passionate community of mushroom enthusiasts, share experiences, and discover new culinary adventures. Experience the Mushroom Shop Website and embark on a journey into the fascinating realm of fungi.",
    link: "https://github.com/marcuwynu23/mushroom-website.git",
    language: "Flask and Jinja Template Engine",
    topics: ["pigeon-raising", "sport", "agriculture", "nodejs"],
    screenshots: [
      "assets/screenshots/simples/mushroom/0.jpg",
      "assets/screenshots/simples/mushroom/1.jpg",
      "assets/screenshots/simples/mushroom/0.jpg",
      "assets/screenshots/simples/mushroom/1.jpg",
    ],
  },
  {
    title: "Dummy Text Generator",
    description:
      "A Browser Extension help generate random words, sentences, or paragraph",
    link: "https://github.com/marcuwynu23/Dummy-Text-Generator.git",
    language: "Javascript",
    topics: [
      "browser-extension",
      "chrome-extension",
      "firefox-extension",
      "dummy-text",
      "text-generator",
      "random-text",
      "random-words",
      "random-sentences",
      "random-paragraph",
    ],
    screenshots: [
      "assets/screenshots/simples/dummy-text-generator/0.jpg",
      "assets/screenshots/simples/dummy-text-generator/0.jpg",
      "assets/screenshots/simples/dummy-text-generator/0.jpg",
      "assets/screenshots/simples/dummy-text-generator/0.jpg",
    ],
  },
  {
    title: "Web QR Code Generator",
    description: "A Sample QR Code Generator Web Application",
    link: "https://github.com/marcuwynu23/qr-code-generator.gits",
    language: "Javascript",
    topics: [
      "node.js",
      "qr",
      "qr-code",
      "qr-code-generator",
      "qr-code-generator-web",
      "qr-code-generator-web-application",
      "qr-code-generator-web-app",
    ],
    screenshots: [
      "assets/screenshots/simples/qr-generator/0.jpg",
      "assets/screenshots/simples/qr-generator/0.jpg",
      "assets/screenshots/simples/qr-generator/0.jpg",
      "assets/screenshots/simples/qr-generator/0.jpg",
    ],
  },
  // {
  //   title: "Quiz App",
  //   description: "A Sample Quiz App",
  //   link: "https://github.com/marcuwynu23/quiz-app.git",
  //   language: "Javascript, HTML, CSS,Angular and Bootstrap",
  //   topics: ["quiz", "quiz-app", "quiz-app-web", "angular", "angular-quiz-app"],
  //   screenshots: [
  //     "assets/placeholder.jpg",
  //     "assets/placeholder.jpg",
  //     "assets/placeholder.jpg",
  //     "assets/placeholder.jpg",
  //   ],
  // },
  {
    title: "Subject Management Tool",
    description: "A Simple Subject Management Tool for Teachers",
    link: "https://github.com/marcuwynu23/quiz-app.git",
    language: "Javascript, HTML, CSS,Node.js and Bootstrap",
    topics: ["subject", "subject-management", "subject-management-tool"],
    screenshots: [
      "assets/screenshots/simples/subject-management-tool/9.jpg",
      "assets/screenshots/simples/subject-management-tool/7.jpg",
      "assets/screenshots/simples/subject-management-tool/8.jpg",
      "assets/screenshots/simples/subject-management-tool/1.jpg",
    ],
  },
  {
    title: "Map Linker",
    description:
      "A simple map linker app that pass coordinate(x and y) to a map app and display the location on the map and link to your current location in a straight line. it can give you the short distance between two points.",
    link: "https://github.com/marcuwynu23/map-linker",
    language: "Javascript, HTML, CSS,Node.js and Bootstrap",
    topics: [
      "map",
      "map-linker",
      "map-linker-app",
      "bing-map",
      "google-map",
      "mapbox",
      "mapbox-map",
      "mapbox-map-linker",
      "mapbox-map-linker-app",
    ],
    screenshots: [
      "assets/screenshots/simples/map-linker/0.jpg",
      "assets/screenshots/simples/map-linker/1.jpg",
      "assets/screenshots/simples/map-linker/2.jpg",
      "assets/screenshots/simples/map-linker/3.jpg",
    ],
  },
  {
    title: "Job Application Emailer",
    description:
      "A simple command line app that automate the process of sending job application email to a company",
    link: "https://github.com/marcuwynu23/job-application-emailer",
    language: "Python",
    topics: [
      "job-application",
      "job-application-emailer",
      "Automate",
      "Automation",
      "scripting",
    ],
    screenshots: [
      "assets/screenshots/simples/job-application-emailer/image.jpg",
    ],
  },
  {
    title: "Document Maker Automation Tool",
    description:
      "A simple command line app that automate the process of editing a document like qrcode, certificate,etc",
    language: "Javascript",
    topics: [
      "cli",
      "qrcode",
      "certificate",
      "document",
      "scripting",
      "automate",
      "automation",
    ],
    screenshots: [
      "assets/screenshots/simples/document-maker-automation/image.jpg",
    ],
  },
  {
    title: "AI Assistant Chat App",
    description:
      "A simple chat app that uses ai assistant to reply to messages",
    language: "Javascript,Bootstrap.css",
    topics: ["chat-app", "ai-assistant", "ai-assistant-chat-app"],
    screenshots: ["assets/screenshots/simples/ai-assistant-chat-app/image.jpg"],
  },
  {
    title: "Task Manager",
    description:
      "Task Manager is a simple web application for managing tasks. It allows users to create, view, edit, and delete tasks.",
    link: "https://github.com/marcuwynu23/TaskManager",
    language: "C#, ASP.NET Core, Razor, Entity Framework Core, MySQL",
    topics: ["task", "task-manager", "task-manager-web"],
    screenshots: ["assets/screenshots/simples/task-manager/0.jpg"],
  },
];
let simpleProjectContainerId = "#simple-programs-container";
simpleProjects.forEach((project) =>
  insertProject(simpleProjectContainerId, project)
);
