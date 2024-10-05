var images = [
    'images/carousel/IMG_1888_20240929_124144.jpg',
    'images/carousel/IMG_7803.jpg',
    'images/carousel/IMG_0213.jpg',
    'images/carousel/IMG_0050_20240929_121628.jpg',
    'images/carousel/IMG_6457_20240929_121238.jpg',
    'images/carousel/IMG_7654.jpg',
    'images/carousel/IMG_6781_20240929_122424.jpg',
    'images/carousel/IMG_6742_20240929_121238.jpg',
    'images/carousel/IMG_0802_20240929_123828.jpg',
    'images/carousel/FallSetting.jpg',
    'images/carousel/IMG_7624.jpg',
    'images/carousel/IMG_0383.jpg',
    'images/carousel/IMG_0210.jpg',
    'images/carousel/IMG_3137_20240929_114812.jpg',
    'images/carousel/Farm_Vegs_Dave.jpg',
    'images/carousel/IMG_1542_20240929_093126.jpg',
    'images/carousel/IMG_3383_20241003_064959.jpg',
    'images/carousel/Farm_hands_vegs.jpg',
    'images/carousel/IMG_2805_20241003_065156.jpg',
    'images/carousel/IMG_8080_20240929_115318.jpg',
    'images/carousel/IMG_1864_20240929_093503.jpg',
    'images/carousel/Farm_orchard_planting.jpg',
    'images/carousel/IMG_5516_20240929_115021.jpg',
    'images/carousel/IMG_7151.jpg',
    'images/carousel/IMG_1008_20240929_124015.jpg',
    'images/carousel/sprouts.jpg',
    'images/carousel/IMG_6681_20240929_121238.jpg',
    'images/carousel/IMG_1863_20240929_093517.jpg',
    'images/carousel/IMG_1036_20240929_120444.jpg'
];
console.log('Carousel script is running');
var carouselInner = document.querySelector('.carousel-inner');

images.forEach(function (image, index) {
    console.log(image)
    var activeClass = index === 0 ? 'active' : '';
    var carouselItem = `
      <div class="carousel-item ${activeClass}">
        <img class="d-block w-100" src="${image}" alt="Slide ${index + 1}">
      </div>
    `;
    carouselInner.innerHTML += carouselItem;
});
// Initialize the carousel with a 3000ms interval
$('.carousel').carousel({
    interval: false
});

$('#carouselExampleIndicators').carousel();