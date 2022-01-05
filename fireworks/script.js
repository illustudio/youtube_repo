// 숫자 랜덤 생성
const randomNumberRange = (min, max, init) => {
  return Math.floor(Math.random() * (max - min) + init);
};

// 파티클 생성
const addParticle = (status, index) => {
  const wrapper = document.createElement('div');
  const particle = document.createElement('span');
  const degree = 360 / status.particles;

  wrapper.classList.add('particle');
  particle.classList.add('particle__item');
  particle.style.backgroundColor = `hsla(${status.hue},100%,50%,${status.opacity})`;
  particle.style.animationDuration = `${status.timer}ms`;
  wrapper.style.transform = `rotate(${degree * index}deg)`;
  wrapper.append(particle);
  return wrapper;
};

// 불꽃놀이 생성
const addFireworks = (bodyClass, event, timer) => {
  let status = {
    hue: randomNumberRange(0, 360, 0),
    opacity: Math.random() + 0.5,
    particles: randomNumberRange(6, 32, 8),
    timer: timer,
  };

  const body = document.querySelector(`.${bodyClass}`);
  const fireworks = document.createElement('div');
  fireworks.classList.add('fireworks');

  for (let index = 0; status.particles > index; index++) {
    fireworks.append(addParticle(status, index));
  }

  body.append(fireworks);
  fireworks.style.top = `${event.clientY - fireworks.offsetWidth / 2}px`;
  fireworks.style.left = `${event.clientX - fireworks.offsetHeight / 2}px`;
  return fireworks;
};

// 사운드 재생
const playSound = () => {
  const audio = new Audio('./fire.mp3');
  audio.play();
};

// 불꽃 놀이 핸들러
const fireworksHandler = (event) => {
  let timer = randomNumberRange(500, 3000, 500);
  addFireworks('background', event, timer);
  playSound();
  setTimeout(() => {
    document.querySelector('.fireworks').remove();
  }, timer);
};

// 초기화
const init = () => {
  const page = document.querySelector('.background');
  page.addEventListener('click', (e) => fireworksHandler(e));
};

document.addEventListener('load', init());
