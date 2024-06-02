const block = document.getElementsByClassName('timeline-item__title');
[...block].forEach(block => {
  block.addEventListener('click', function() {
    if (this.tagName === 'DIV') {
      this.classList.toggle('active');
    }
  })
});

function toggleImage() {
  const imageContainer = document.getElementById('imageContainer');
  const button = document.getElementById('toggleButton');
  if (imageContainer.style.display === 'none' || imageContainer.style.display === '') {
    imageContainer.style.display = 'block';
    button.textContent = 'Close ):';
  } else {
    imageContainer.style.display = 'none';
    button.textContent = 'Open :)';
  }
}

function toggleCryingCat() {
  const imageContainer = document.getElementById('imageCryCatContainer');
  const button = document.getElementById('toggleCryCatButton');
  if (imageContainer.style.display === 'none' || imageContainer.style.display === '') {
    imageContainer.style.display = 'block';
    button.textContent = 'Close ):';
  } else {
    imageContainer.style.display = 'none';
    button.textContent = 'Open :)';
  }
}