const apiProjects = [
  {
    title: 'PH-Address API',
    description:
      'Data API of Regions,Provinces, CityMunicipalities, and Barangay of the Philippines',
    link: 'https://github.com/marcuwynu23/ph-address.git',
    language: 'Json,Express,NodeJS and Nunjucks Template Engine',
    topics: [
      'api',
      'json',
      'express',
      'nodejs',
      'nunjucks',
      'philippines',
      'address',
      'phaddress',
      'ph-address',
    ],
    screenshots: [
      'assets/screenshots/apis/phaddress/0.jpg',
      'assets/screenshots/apis/phaddress/1.jpg',
      'assets/screenshots/apis/phaddress/2.jpg',
      'assets/screenshots/apis/phaddress/2.jpg',
    ],
  },
  {
    title: 'IP Checker API',
    description: 'Check if the IP ping status,os information, common ports and services',
    link: 'https://github.com/marcuwynu23/ip-checker-api.git',
    language: 'Json,Flask,Python',
    topics: ['api', 'json', 'flask', 'python', 'ip', 'checker'],
    screenshots: ['assets/screenshots/apis/ipchecker/0.jpg'],
  },
]
let apiProjectContainerId = '#api-projects-container'
apiProjects.forEach((project) => insertProject(apiProjectContainerId, project))
