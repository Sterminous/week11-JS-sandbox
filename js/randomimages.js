const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    let random_images = images[randomIndex]
    image.src = "img/" + random_images;
}