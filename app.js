const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('[data-action = "action"]');
const hex1Ref = document.querySelector('.hex-1');
const hex2Ref = document.querySelector('.hex-2');

btnRef.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const randomHex1 = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  const randomHex2 = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  bodyRef.style.backgroundImage = `linear-gradient(to right, ${randomHex1}, ${randomHex2})`;
  hex1Ref.textContent = randomHex1;
  hex2Ref.textContent = randomHex2;
}