const createImage = (imgPath) => {
	return new Promise((resolve, reject) => {
		if (imgPath) {
			const newImg = document.createElement('img');
			newImg.src = imgPath;
			document.querySelector('.images').appendChild(newImg);
			resolve('Image Loaded');
		} else {
			reject(Error);
		}
	});
};
