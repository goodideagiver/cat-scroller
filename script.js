let catCount = 0;
function scrollHandler() {
	const distanceToBottom = document.body.getBoundingClientRect().bottom;
	// console.log(document.documentElement.clientHeight, distanceToBottom);
	if (distanceToBottom < document.documentElement.clientHeight + 150) {
		fetch('https://api.thecatapi.com/v1/images/search')
			.then(response => response.json())
			.then(data => {
				const newDataElement = document.createElement('div');
				newDataElement.classList = 'cat-container';
				console.log(data);
				catCount = catCount + 1;
				newDataElement.innerHTML = `<img src="${data[0].url}">
                <p>Cat number ${catCount}</p>`;
				document.body.append(newDataElement);
			});
	}
}

window.addEventListener('scroll', scrollHandler);
