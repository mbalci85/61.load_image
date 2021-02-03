const createImage = (imgPath) => {
	return new Promise((resolve, reject) => {
		const newImg = document.createElement('img');
		newImg.src = imgPath;
		document.querySelector('.images').appendChild(newImg);
		newImg.addEventListener('load', () => {
			console.log('Image is loaded');
			resolve(newImg);
		});
		newImg.addEventListener('error', () => {
			reject('File was not found');
		});
	});
};

const waitFor = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
};

let currentImg;

createImage('./images/img-1.jpg')
	.then((resolvedValue) => {
		currentImg = resolvedValue;
		return waitFor(2000);
	})
	.then(() => {
		currentImg.style.display = 'none';
		return createImage('./images/img-2.jpg');
	})
	.then((resolvedValue) => {
		currentImg = resolvedValue;
		return waitFor(2000);
	})
	.then(() => {
		currentImg.style.display = 'none';
		return createImage('./images/img-3.jpg');
	})
	.then((resolvedValue) => {
		currentImg = resolvedValue;
		return waitFor(2000);
	})
	.then(() => {
		currentImg.style.display = 'none';
		document.body.innerHTML = '<h1>Refresh Page</h1>';
	});
