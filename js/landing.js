// landing page tryptich container
//
//
//
//
const left = document.querySelector('.left');
const center = document.querySelector('.center');
const right = document.querySelector('.right');
const landingContainer = document.querySelector('.landing-container');

left.addEventListener('mouseenter', () =>
  landingContainer.classList.add('hover-left')
);
left.addEventListener('mouseleave', () =>
  landingContainer.classList.remove('hover-left')
);

center.addEventListener('mouseenter', () =>
  landingContainer.classList.add('hover-center')
);
center.addEventListener('mouseleave', () =>
  landingContainer.classList.remove('hover-center')
);

right.addEventListener('mouseenter', () =>
  landingContainer.classList.add('hover-right')
);
right.addEventListener('mouseleave', () =>
  landingContainer.classList.remove('hover-right')
);
