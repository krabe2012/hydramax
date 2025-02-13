//window.onload = createMenu
const wrapper = document.querySelector('.wrapper');
const btnMenus = document.querySelectorAll(".header__btn");


//const menu = document.querySelector('.menu');

//btnMenus.forEach((btnMenu) => btnMenu.addEventListener('click', createMenu));

//function createMenu(param) {
  
  
  const menuBlock = `
      <div class="menu">
        <div class="menu__container">
          <div class="menu__nav nav">
            <ul class="nav__list">
              <li class="nav__item">
                <a href="/company.html" class="nav__link"> О компании </a>
              </li>

              <li class="nav__item">
                <a href="/service.html" class="nav__link"> Услуги </a>
              </li>

              <li class="nav__item">
                <a href="" class="nav__link"> Консультации </a>
              </li>

              <li class="nav__item">
                <a href="" class="nav__link"> </a>
              </li>
            </ul>
          </div>

          <div class="menu__contacts contacts">
            <ul class="contacts__list">
              <li class="contacts__item">
                <a href="" class="contacts__link">+123-4567-89-10 </a>
              </li>

              <li class="contacts__item">
                <a href="" class="contacts__link">lol@kek.cheburek </a>
              </li>

              <li class="contacts__item">
                <a href="" class="contacts__link">Заводское шоссе </a>
              </li>
            </ul>
          </div>

          <div class="menu__social soc">
            <ul class="soc__list">
              <li class="soc__item">
                <a href="" class="soc__link"> VKONTAKTE
                </a>
              </li>
              <li class="soc__item">
                <a href="" class="soc__link"> TELEGRAM 
                </a>
              </li>
              <li class="soc__item">
                <a href="" class="soc__link">INSTAGRAM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>`
      
      wrapper.insertAdjacentHTML('afterend', menuBlock);
    //  openMenu(menu)
//}

//const btnMenu = document.querySelector(".header__btn");
//

btnMenus.forEach(btnMenu => btnMenu.addEventListener("click", openMenu));
//btnMenu.addEventListener('click', openMenu)
function openMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("open");
if (menu.classList.contains("open")) {
  btnMenu.textContent = "назад";
} else {
  btnMenu.textContent = "меню";
}

event.preventDefault()
}