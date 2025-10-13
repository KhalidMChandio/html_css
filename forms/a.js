const zoomImage = document.getElementById('zoomImage');
let currentImage = 'image1.jpg'; // Default image

zoomImage.style.backgroundImage = `url(${currentImage})`;
zoomImage.style.backgroundSize = 'cover'; // Initial size

zoomImage.addEventListener('mouseenter', () => {
  zoomImage.style.backgroundSize = '200%'; // Zoom on hover
});

zoomImage.addEventListener('mousemove', (e) => {
  const rect = zoomImage.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = x / rect.width;
  const yPercent = y / rect.height;

  const bgX = 100 - xPercent * 100;
  const bgY = 100 - yPercent * 100;

  zoomImage.style.backgroundPosition = `${bgX}% ${bgY}%`;
});

zoomImage.addEventListener('mouseleave', () => {
  zoomImage.style.backgroundSize = 'cover'; // Reset zoom
  zoomImage.style.backgroundPosition = 'center'; // Reset position
});

function changeMainImage(src) {
  currentImage = src;
  zoomImage.style.backgroundImage = `url(${src})`;
  zoomImage.style.backgroundSize = 'cover';
  zoomImage.style.backgroundPosition = 'center';
}
window.addEventListener('DOMContentLoaded', () => {
  const firstThumbnail = document.querySelector('#thumbnails img');
  if (firstThumbnail) {
    const src = firstThumbnail.src;
    changeMainImage(src);
  }
});

function scrollThumbnails(direction) {
  const container = document.getElementById('thumbnails');
  const scrollAmount = 120;
  container.scrollLeft += direction * scrollAmount;
}
