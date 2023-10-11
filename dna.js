const bars = 20;

function getColor() {
  return 'hsl(' + (Math.floor(Math.random() * 5)) * 72 + 'deg, 100%, 50%)';
}

for (let i = 0; i < bars; i++) {
  const b = document.createElement('div');
  b.style.animationDelay = i / 10 + 's';
  b.style.background = 'linear-gradient(to bottom, ' + getColor() + ' 50%, ' + getColor() + ' 50%)';
  document.body.appendChild(b);
}
