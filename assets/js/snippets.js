/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
$(document).ready(function () {
	const username = 'marcuwynu23';
	const column1 = document.querySelector('#column-1');
	const column2 = document.querySelector('#column-2');

	fetch(`https://api.github.com/users/${username}/gists`)
		.then(response => response.json())
		.then(data => {
			let count = 0;
			data.forEach(gist => {
				const { html_url, description } = gist;
				const div = document.createElement('div');
				if (description !== "") {
					div.classList.value = 'card m-2 p-2'
					div.innerHTML = `<a href="${html_url}">${description}</a>`;
					count % 2 === 0 ? column1.appendChild(div) : column2.appendChild(div);
					count++;
				}
			});
		});
})