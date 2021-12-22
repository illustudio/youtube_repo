const wrapper = document.querySelector('.wrapper');
let count = 0;

const addSnow = () => {
  const snow = document.createElement('span');
  snow.classList.add('snow');
  snow.style.left = `${Math.random() * (window.innerWidth - 1) + 1}px`;
  snow.style.animationDuration = `${Math.random() * (20 - 8) + 8}s`;
  snow.style.animationDelay = `${Math.random() * (10 - 1) + 1}s`;
  snow.style.opacity = `${Math.random()}`;
  wrapper.append(snow);
  if (count < 300) {
    window.requestAnimationFrame(addSnow);
    count++;
  }
};

addSnow();
