
const body = document.body;
const menuBurger = document.querySelector('.item-header__burger');
const menu = document.querySelector('.menus-item-header');
const clickMen = document.querySelector('.dragon');
const menuGragon = document.querySelector('.menu-dragondrop');
if(menuBurger && menu){
    menuBurger.addEventListener('click', function(e){
        menuBurger.classList.toggle('_active');
        menu.classList.toggle('_active');
		if(menuBurger.classList.contains('_active')){
			body.style.overflow = 'hidden';
		}
		if(!menuBurger.classList.contains('_active')){
			body.style.overflow = 'visible';
		}
    });
	if(clickMen){
		clickMen.addEventListener('click', function(){
			clickMen.classList.toggle('active');
			if(clickMen.classList.contains('active')){
				if(document.documentElement.clientWidth < 768){
					clickMen.style.margin = '0px 0 120px 0';
					menuGragon.style.cssText = '        transform: scaleY(1);opacity: 1;visibility: visible;';
				}
			}
			else{
				if(document.documentElement.clientWidth < 768){
				clickMen.style.margin = '0px 0 5px 0';
				menuGragon.style.cssText = '    transform-origin: 0 0;     transform: scaleY(0); opacity: 0; visibility: hidden;';
			}
			}
		});
	}
	
}











  var swiper = new Swiper(".mySwiper", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });



