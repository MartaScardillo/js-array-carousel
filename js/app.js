const images = [
  '../img/01.webp',
  '../img/02.webp',
  '../img/03.webp',
  '../img/04.webp',
  '../img/05.webp',
];

const carouselDOMElement = document.querySelector('.carousel');
console.log(carouselDOMElement);

const leftButtonDOMElement = document.getElementById('leftButton')
leftButtonDOMElement
console.log(images);
for (let i = 0; i < images.length; i++) {
  let status = 'd-none';
  const currentSrc = images[i];
  console.log(currentSrc);

  if (i == 0) {
    status = 'd-inline-flex';
  }

  const htmlString = ` 
  <div class="image ${status}">
    <div class="carousel-inner">
        <div class="carousel-item d-flex flex-wrap justify-content-center align-items-center active">
            <img class="d-block" src="${currentSrc}">
        </div>
    </div>
    
        <button id="leftButton" class="carousel-control-prev translateplus bg-warning" type="button">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next translateless bg-warning" type="button">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
   
    
</div>`;
  console.log(htmlString);

  carouselDOMElement.innerHTML += htmlString;
}
