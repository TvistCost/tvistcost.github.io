/* hidden block warning */ 

let hider = document.getElementById('hider');
let warningMenu = document.getElementById('warning-menu');
let warning  = document.querySelector('.warning');
let warningButton = document.querySelector('.warning-button');
hider.onclick = function() {
  warningMenu.hidden = true;
  hider.hidden = true;
  warning.hidden = true;
  warningButton.hidden = true;
}

/* burger menu use jQuery */


function burgerMenu (selector) {
  let menu = $(selector);
  let button = menu.find('.header-menu-button');
  let links = menu.find('.ml-3');
  let dropLinks = menu.find('.menu-link-drop');
  let overlay = menu.find('.header-menu-overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  dropLinks.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('header-menu-active');

    if (menu.hasClass('header-menu-active')) {
      $('body').css('overflow', 'hidden');
    }else{
      $('body').css('overflow', 'visible');
    }
  }
}

burgerMenu('.header-menu');








