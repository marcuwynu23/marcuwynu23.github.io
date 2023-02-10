/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

$(document).ready(function () {
	const username = 'marcuwynu23';
	fetch(`https://api.github.com/users/${username}/repos`)
		.then(response => response.json())
		.then(repos => {
			// Filter out the forked repos
			const myRepos = repos.filter(repo => !repo.fork);

			// Sort the repos by the latest update date
			myRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

			// Divide the repos into two columns
			const col1Repos = myRepos.slice(0, myRepos.length / 2);
			const col2Repos = myRepos.slice(myRepos.length / 2);

			// Render the repos in the first column
			col1Repos.forEach(repo => {
				if (repo.is_template) {
					document.getElementById('repo-container-1').innerHTML += `
					<div class="project-item card mt-3">
						<div class="card-body">
							<h5 class="card-title fw-bold">${repo.name}</h5>
							<p class="card-text">Project Template</p>
							<p class="card-text">${repo.description}</p>
							<a href="${repo.html_url}" class="card-link">Source</a>
							<div>
							<img class="img-fluid w-50 h-50 rounded" src="https://media.sproutsocial.com/uploads/2022/12/Project-management-software.svg" />
							</div>
						</div>
					
					</div>
				`;
				} else {
					document.getElementById('repo-container-1').innerHTML += `
				<div class=" project-item card mt-3">
					<div class="card-body">
						<h5 class="card-title fw-bold">${repo.name}</h5>
						<p class="card-text">${repo.description}</p>
						<a href="${repo.html_url}" class="card-link">Source</a>
						<div>
						<img class="img-fluid w-50 h-50 rounded" src="https://media.sproutsocial.com/uploads/2022/12/Project-management-software.svg" />
						</div>
					</div>
				</div>
			`;
				}
			});

			// Render the repos in the second column
			col2Repos.forEach(repo => {
				if (repo.is_template) {
					document.getElementById('repo-container-2').innerHTML += `
				<div class="project-item card mt-3">
					<div class="card-body">
						<h5 class="card-title fw-bold">${repo.name}</h5>
						<p class="card-text">Project Template</p>
						<p class="card-text">${repo.description}</p>
						<a href="${repo.html_url}" class="card-link">Source</a>
							<div>
							<img class="img-fluid w-50 h-50 rounded" src="https://media.sproutsocial.com/uploads/2022/12/Project-management-software.svg" />
							</div>
					</div>
				</div>
			`;
				} else {
					document.getElementById('repo-container-2').innerHTML += `
						<div class="project-item card mt-3">
							<div class="card-body">
								<h5 class="card-title fw-bold">${repo.name}</h5>
								<p class="card-text">${repo.description}</p>
								<a href="${repo.html_url}" class="card-link">Source</a>
									<div>
							<img class="img-fluid w-50 h-50 rounded" src="https://media.sproutsocial.com/uploads/2022/12/Project-management-software.svg" />
							</div>
							</div>
						</div>
					`;
				}
			});
		});



});
