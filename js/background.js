const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const showImage = images[Math.floor(Math.random() * images.length)];
const image = document.createElement("img");

image.src = `imgs/${showImage}`;

document.body.appendChild(image);

image.id = 'back-id';