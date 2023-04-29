const apiProjects = [
	{
		title: "PH-Address API",
		description: "Data API of Regions,Provinces, CityMunicipalities, and Barangay of the Philippines",
		link: "",
		language: "Json,Express,NodeJS and Nunjucks Template Engine",
		topics: ["api", "json", "express", "nodejs", "nunjucks", "philippines", "address", "phaddress", "ph-address"],
		screenshots: [
			"assets/screenshots/apis/phaddress/0.jpg",
			"assets/screenshots/apis/phaddress/1.jpg",
			"assets/screenshots/apis/phaddress/2.jpg",
			"assets/screenshots/apis/phaddress/2.jpg",
		]
	}
]
let apiProjectContainerId = "#api-projects-container";
apiProjects.forEach(project => insertProject(apiProjectContainerId, project))
