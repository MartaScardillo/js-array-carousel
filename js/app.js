const imagesSrc = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp',
];

const carouselDOMElement = document.querySelector('.carousel');
console.log(carouselDOMElement, imagesSrc);

for (let i = 0; i < imagesSrc.length; i++) {
  console.log(imagesSrc[i]);
  const src = imagesSrc[i];

  const html = ` <img src="${src}" alt="" class="carousel_item"> `;

  carouselDOMElement.innerHTML += html;
  // console.log(carouselDOMElement)
}

const itemsDOMElements = document.querySelectorAll('.carousel_item')
console.log(itemsDOMElements)

let currentIndex = 0

let currentSlide = itemsDOMElements[currentIndex]
currentSlide.classList.add('active')

const arrowTop = document.querySelector('.carousel .arrow--top')
const arrowBottom = document.querySelector('.carousel .arrow--bottom')

arrowTop.addEventListener('click', function () {
  console.log('click top')
  console.log(itemsDOMElements[currentIndex])
  itemsDOMElements[currentIndex].classList.remove('active')
  currentIndex = (currentIndex - 1 + itemsDOMElements.length) % itemsDOMElements.length
  itemsDOMElements[currentIndex].classList.add('active')
  console.log(itemsDOMElements)

})

arrowBottom.addEventListener('click', function () {
  console.log('click bottom')
  console.log(itemsDOMElements[currentIndex])
  itemsDOMElements[currentIndex].classList.remove('active')
  currentIndex = (currentIndex + 1) % itemsDOMElements.length
  itemsDOMElements[currentIndex].classList.add('active')
  console.log(itemsDOMElements)

})