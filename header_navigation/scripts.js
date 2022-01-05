const wrapper = document.querySelector('.site__header');
const toggleButton = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const menuItem = Array.from(menu.querySelectorAll('li a'));

toggleButton.addEventListener('click', (e) => {
  const target = e.currentTarget;
  if (!target.classList.contains('active')) {
    target.classList.add('active');
    wrapper.classList.add('darkmode');
  } else {
    target.classList.remove('active');
    wrapper.classList.remove('darkmode');
  }
});

menu.addEventListener('click', (e) => {
  let target = e.target;
  menuItem.forEach((item) => item.classList.remove('active'));
  target.classList.add('active');
});
