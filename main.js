const accItems = document.querySelectorAll('.acc__item');
 // let span = document.querySelector('.span')



accItems.forEach(accItem => accItem.addEventListener('click', () => {
  let accContent = accItem.querySelector('.acc-item__content');

  let active = document.querySelector('.active');
  let rotate = document.querySelector('.rotate');
  let span = accItem.querySelector('span')

  
  open(accContent, span, rotate, active)
}));

function open(accContent, span, rotate, active) 
  

{
 
  if (active && rotate) {
    rotate.classList.remove('rotate')
    active.classList.remove('active');
    active.style.height = 0;
   
  }
  if (accContent !== active)
  {
    accContent.classList.add('active')
    accContent.style.height = accContent.scrollHeight + 'px'
   span.classList.add('rotate')
  }
}