const video = Array.from(document.querySelectorAll('.video'));
video.forEach((item) => {
  const videoItem = item.querySelector('video');

  item.addEventListener('click', () => {
    item.classList.add('active');
    !videoItem.play() ? videoItem.play() : '';
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('active');
    videoItem.play() ? videoItem.pause() : '';
  });
});
