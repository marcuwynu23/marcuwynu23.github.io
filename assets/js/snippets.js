/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
$(document).ready(function () {
	const username = 'marcuwynu23';
	const column1 = document.querySelector('#column-1');

	fetch(`https://api.github.com/users/${username}/gists`)
		.then(response => response.json())
		.then(data => {
			let count = 0;
			data.forEach(gist => {
				const { html_url, description, files } = gist;
				const div = document.createElement('div');
				if (description !== "") {
					div.classList.value = 'card m-2 p-2'
					div.innerHTML = `
					<p class="card-title fw-bold">${description}</p>
					<p>Filename: ${files[Object.keys(files)[0]].filename}</p>
					<p>Language: ${files[Object.keys(files)[0]].language}</p>
					<a href="${files[Object.keys(files)[0]].raw_url}">Raw Source</a>
					`;
					column1.appendChild(div)
					count++;
				}
			});
		});
})