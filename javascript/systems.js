// //temporary data insertion in system Project
const systemProjects = [
  {
    title: "Kalapatid: Pigeon Raising and Sport Management System",
    description:
      "The Kalapatid Pigeon Raising and Sport Management System is a web-based application built using JavaScript that manages the pigeon raising and sport activities of the Kalapatid Pigeon Club. It enables members to manage their pigeon inventory, track breeding activities, register for racing events, and communicate with other members.",
    link: "https://github.com/marcuwynu23/kalapatid-pigeon-raising-and-sport-management-system.git",
    language: "ExpressJS, Mongodb,NodeJS and Nunjucks Template Engine",
    topics: ["pigeon-raising", "sport", "agriculture", "nodejs"],
    screenshots: [
      "assets/screenshots/systems/kpsms/0.jpg",
      "assets/screenshots/systems/kpsms/1.jpg",
      "assets/screenshots/systems/kpsms/2.jpg",
      "assets/screenshots/systems/kpsms/3.jpg",
      "assets/screenshots/systems/kpsms/4.jpg",
    ],
  },
  {
    title: "Book Collection Management System",
    description:
      "The Book Collection Management System is a web application that allows users to manage their book collection. It provides features such as adding, editing, and deleting books, as well as searching for books by title, author, or genre. The system is built using codeigniter. The interface is intuitive and user-friendly, allowing users to navigate through different features easily. With this system, book collectors can organize their collection effectively and keep track of their reading habits.",
    link: "https://github.com/marcuwynu23/bcms.git",
    language: "Codeigniter, Mysql, PHP",
    topics: ["book", "collection", "management", "system"],
    screenshots: ["assets/screenshots/systems/bcms/0.jpg"],
  },
  {
    title: "TicketSquad: Ticket Management System",
    description:
      "TicketSquad is a web-based ticketing management system that helps organizations manage their ticketing processes efficiently.",
    link: "https://github.com/marcuwynu23/ticketsquad.git",
    language:
      "ASP.NET, C#, Postgresql, Razor, Bootstrap,MDBootstrap,CSS,HTML,Material Icons",
    topics: [
      "ticket",
      "management",
      "system",
      "ticketing",
      "ticketing-management",
      "web-based",
    ],
    screenshots: ["assets/screenshots/systems/tms/0.jpg"],
  },
  // {
  // 	title: "Mini Store Management System",
  // 	description:
  // 		"A Mini Store Management System is a software application that allows store owners to manage their inventory effectively. It helps track the quantity of products available, sales made, and other details such as supplier information, purchase orders, and customer records. The system is built using JavaScript and Vue.js, making it a responsive and dynamic web application that can be accessed from any device with an internet connection. The interface is intuitive and user-friendly, allowing users to navigate through different features easily. With this system, store owners can make informed decisions, manage stock levels efficiently, and provide better customer service.",
  // 	link: "",
  // 	language: "MEVN stack",
  // 	topics: ["store", "management", "system", "mini-store"],
  // 	screenshots: [
  // 		// "assets/screenshots/systems/msms/0.jpg",
  // 		// "assets/screenshots/systems/msms/1.jpg",
  // 		// "assets/screenshots/systems/msms/2.jpg",
  // 		// "assets/screenshots/systems/msms/3.jpg",
  // 		// "assets/screenshots/systems/msms/4.jpg",
  // 	],
  // },
  // {
  // 	title: "Online Examination System",
  // 	description: "This system is designed to manage online examinations for students. It allows teachers to create and administer tests, and students to take them remotely through a secure online platform. The system can automatically grade the tests and provide detailed reports on student performance, making it easier for teachers to evaluate and improve their teaching.",
  // 	link: "",
  // 	language: "MEAN stack",
  // 	topics: ["online-examination", "examination", "system"],
  // 	screenshots: [
  // 		// "assets/screenshots/systems/oes/0.jpg",
  // 		// "assets/screenshots/systems/oes/1.jpg",
  // 		// "assets/screenshots/systems/oes/2.jpg",
  // 		// "assets/screenshots/systems/oes/3.jpg",
  // 		// "assets/screenshots/systems/oes/4.jpg",
  // 	]
  // },
  // {
  // 	title: "Blog Content Management System",
  // 	description: "This system manages the content of a blog and handles the API data to the client-side. It enables bloggers to create, edit and publish their posts through an easy-to-use interface. Additionally, it fetches data from external APIs and displays it on the client-side, allowing bloggers to supplement their content with additional information.",
  // 	link: "",
  // 	language: "MEVN stack",
  // 	topics: ["blog", "content-management", "system", "headless"],
  // 	screenshots: [
  // 		// "assets/screenshots/systems/bcms/0.jpg",
  // 		// "assets/screenshots/systems/bcms/1.jpg",
  // 		// "assets/screenshots/systems/bcms/2.jpg",
  // 		// "assets/screenshots/systems/bcms/3.jpg",
  // 		// "assets/screenshots/systems/bcms/4.jpg",
  // 	]
  // }
];
let systemProjectContainerId = "#system-projects-container";
systemProjects.forEach((project) =>
  insertProject(systemProjectContainerId, project)
);
