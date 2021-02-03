const createImage = (imgPath) => {
	return new Promise((resolve, reject) => {
		const currentImg = document.querySelector('img');
		const newImg = document.createElement('img');
		newImg.src = imgPath;
		document.querySelector('.images').appendChild(newImg);
		console.log(newImg.src);
		newImg.addEventListener('load', () => {
			console.log('Image is loaded');
			resolve(2000);
		});
		newImg.addEventListener('error', () => {
			reject('File was not found');
		});
	});
};

const waitFor = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {}, ms);
	});
};

createImage('./images/img-1.jpg')
	.then((resolvedValue) => waitFor(resolvedValue))
	.then(() => createImage('./images/img-2.jpg'));

// const waitFor = (img) => {
// 	return new Promise((resolve, reject) => {
// 		if (img.src.includes('images/img-1.jpg')) {
// 			resolve(
// 				setTimeout(() => {
// 					img.style.display = 'none';
// 				}, 2000),
// 			);
// 		} else if (img.src.includes('images/img-2.jpg')) {
// 			resolve(
// 				setTimeout(() => {
// 					img.style.display = 'none';
// 				}, 2000),
// 			);
// 		}
// 	});
// };

// createImage('images/img-1.jpg')
// 	.then((resolvedValue) => waitFor(resolvedValue))
// 	.then(createImage('images/img-2.jpg'))
// 	.then((resolvedValue) => waitFor(resolvedValue))
// 	.then(createImage('images/img-3.jpg'))
// 	.then((resolvedValue) => waitFor(resolvedValue))
// 	.catch((error) => console.log(error));
