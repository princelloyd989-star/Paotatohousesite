const menuButton = document.getElementById('nav-toggle');
const nav = document.getElementById('navigation');
menuButton.addEventListener('click',()=>{
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded',String(open));
  nav.classList.toggle('open',open);
});
nav.addEventListener('click', event=>{
  if(event.target.closest('a')){
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
  }
});
document.getElementById('year').textContent=String(new Date().getFullYear());
