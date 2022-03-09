let catCount = 0;
let canCountPlacement = 0;
function scrollHandler() {
	const distanceToBottom = document.body.getBoundingClientRect().bottom;
	if (distanceToBottom < document.documentElement.clientHeight + 1200) {
		fetch('https://api.thecatapi.com/v1/images/search')
			.then(response => response.json())
			.then(data => {
				if (canCountPlacement < 3) {
					const newDataElement = document.createElement('div');
					newDataElement.classList = 'cat-container';
					// console.log(data);
					catCount = catCount + 1;
					canCountPlacement = canCountPlacement + 1;
					newDataElement.innerHTML = `<img src="${data[0].url}">
                                    <p>Cat number ${catCount}</p>`;
					document.body.append(newDataElement);
				} else if (
					distanceToBottom <
					document.documentElement.clientHeight + 1200
				) {
					canCountPlacement = 0;
					console.log('reset', distanceToBottom);
				}
			});
	}
}

window.addEventListener('scroll', scrollHandler);
