
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










function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// document.getElementById("defaultOpen").click();












const native = document.querySelector('.content-native-platform__content');
const nativeGlobal = document.querySelector('.native-platform__content');
const nativeElems = document.querySelectorAll('.content-native-platform__item');
if (document.documentElement.clientWidth < 1300) {
	if(native){
		native.classList.add('swiper-wrapper');
		nativeGlobal.classList.add('swiperkit');
		nativeElems.forEach(element => {
			element.classList.add('swiper-slide');
		});
	}
}
const swiperkit = new Swiper('.swiperkit', {
	// Optional parameters
	direction: 'horizontal',

  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	effect: 'fade',
	fadeEffect: {
	  crossFade: true
	},
  });

const swiper = new Swiper('.swipersins', {
	// Optional parameters
	direction: 'horizontal',

  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	effect: 'fade',
	fadeEffect: {
	  crossFade: true
	},
  });












const swipers = new Swiper('.swipers', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// Navigation arrows
	navigation: {
	  nextEl: '.reviews-slide__swiper-button-next',
	  prevEl: '.reviews-slide__swiper-button-prev',
	},
	effect: 'fade',
	fadeEffect: {
	  crossFade: true
	},
  });







$(document).ready(function(){
	$('.spollers-section__title').click(function(event){
		if($('.spollers-section__content').hasClass('one')){
			$('.spollers-section__title').not($(this)).removeClass('active');
			$('.spollers-section__subtitle').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});




$(document).ready(function(){
	$('.spollers-section__titles').click(function(event){
		if($('.spollers-section__contents').hasClass('one')){
			$('.spollers-section__titles').not($(this)).removeClass('active');
			$('.spollers-section__subtitles').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
const spollersSubtitlePage = document.querySelectorAll('.spollers-section__titles');
const spollersItemSub = document.querySelectorAll('.item-reviews-page');
if(spollersSubtitlePage ){
	spollersSubtitlePage.forEach(element => {
		element.addEventListener('click', function(){
			const parents = element.parentElement;
			console.log(parents);
			element.style.cssText = '    color: #FFED49;' ;
			parents.style.cssText = 'background  :#1D9A9F; color:#fff;' ;
		});
	});

}
const itemSpollers = document.querySelectorAll('.item-reviews-page');
	if(itemSpollers){
		itemSpollers.forEach(element => {
			element.addEventListener('click', function(e){
				const textSpollersText = element.querySelector('.titles-spollers-section-text');
				const textSpollersVideo = element.querySelector('.titles-spollers-section-video');
				if(textSpollersText){
					const textSpollersActiveText = textSpollersText.parentElement;
					if(textSpollersActiveText.classList.contains('active')){
						textSpollersText.innerHTML = 'Скрыть';
					}
					else if(!textSpollersActiveText.classList.contains('active')){
						textSpollersText.innerHTML = 'Читать полностью';
					}
				}
				if(textSpollersVideo){
					const textSpollersActiveVideo = textSpollersVideo.parentElement;
					if(textSpollersActiveVideo.classList.contains('active')){
						textSpollersVideo.innerHTML = 'Скрыть';
					}
					else if(!textSpollersActiveVideo.classList.contains('active')){
						textSpollersVideo.innerHTML = 'Смотреть видеоотзыв';
					}
				}

				
			});
		});
	}










const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_actives');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_actives');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}







const slideTwoSwiperOne = document.querySelector('.content-native-platform__item-one');
const slideTwoSwiperTwo = document.querySelector('.content-native-platform__item-two');
const slideTwoSwiperThree = document.querySelector('.content-native-platform__item-three');
const slideTwoSwiperFour = document.querySelector('.content-native-platform__item-four');
const slideTwoSwiperFive = document.querySelector('.content-native-platform__item-five');
const slideTwoSwiperSix = document.querySelector('.content-native-platform__item-six');
const slideTwoSwiperSeven = document.querySelector('.content-native-platform__item-seven');
const slideTwoSwiperEght = document.querySelector('.content-native-platform__item-eght');
const slideTwoSwiperNine = document.querySelector('.content-native-platform__item-nine');


if (document.documentElement.clientWidth < 1300) {
	if(slideTwoSwiperOne){
		slideTwoSwiperOne.classList.remove('content-native-platform__item-one');
	}
	if(slideTwoSwiperTwo){
		slideTwoSwiperTwo.classList.remove('content-native-platform__item-two');
	}
	if(slideTwoSwiperThree){
		slideTwoSwiperThree.classList.remove('content-native-platform__item-three');
	}
	if(slideTwoSwiperFour){
		slideTwoSwiperFour.classList.remove('content-native-platform__item-four');
	}
	if(slideTwoSwiperFive){
		slideTwoSwiperFive.classList.remove('content-native-platform__item-five');
	}
	if(slideTwoSwiperSix){
		slideTwoSwiperSix.classList.remove('content-native-platform__item-six');
	}
	if(slideTwoSwiperSeven){
		slideTwoSwiperSeven.classList.remove('content-native-platform__item-seven');
	}
	if(slideTwoSwiperEght){
		slideTwoSwiperEght.classList.remove('content-native-platform__item-eght');
	}
	if(slideTwoSwiperNine){
		slideTwoSwiperNine.classList.remove('content-native-platform__item-nine');
	}
}










const videos = document.querySelectorAll('.videos'),
videosPlay = document.querySelectorAll('.video__play'),
videosPlays = document.querySelectorAll('.img-item-teachers__play'),
videosdoshed = document.querySelectorAll('.img-item-teachers__doshed'),
videosTeachers = document.querySelectorAll('.img-item-teachers');


videosTeachers.forEach(element => {
	
	element.addEventListener('click', function(){
		const firstElemChild = element.firstElementChild;
		const firstElemChildOneVideo = firstElemChild.firstElementChild;
		const firstElemChildOnePlay = element.lastElementChild;
		const firstElemChildOnePlayPlay = firstElemChildOnePlay.lastElementChild;
	
		if(firstElemChildOneVideo.paused){
			console.log(firstElemChildOneVideo);
			firstElemChildOneVideo.play();
			if(firstElemChildOnePlay.classList.contains('img-item-teachers__play')){
				firstElemChildOnePlayPlay.src = './img/tutors/items/pause.png'
			}
		}
		else{
			console.log(firstElemChildOneVideo);
			firstElemChildOneVideo.pause();
			if(firstElemChildOnePlay.classList.contains('img-item-teachers__play')){
				firstElemChildOnePlayPlay.src = './img/tutors/items/play.png';
			}
			
		}	
	});

});














const popupLinks = document.querySelectorAll('.popup-link');

const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}


	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

const infoBlogsColumn = document.querySelector('.blogs__cust');
const infoBlogsColumnTwo = document.querySelector('.blogs__column');
const infoBlogsColumnSlide = document.querySelectorAll('.blogs__item');

if (document.documentElement.clientWidth < 768) {
	if(infoBlogsColumn){
		infoBlogsColumnTwo.classList.add('swiper-wrapper');
		infoBlogsColumn.classList.add('swiperbloginfo');
		infoBlogsColumnSlide.forEach(element => {
			element.classList.add('swiper-slide');
		});
	}
}
const swiperInfo = new Swiper('.swiperbloginfo', {
	// Optional parameters
	direction: 'horizontal',

  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination-info',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next-info',
	  prevEl: '.swiper-button-prev-info',
	},
	effect: 'slide',
	slidesPerView: 1,
	
  });
  const stepPayments = document.querySelectorAll('.steps-payment__column');
  
  if(stepPayments){
	 stepPayments.forEach(item =>{ 
	
		 item.addEventListener('click', (e) =>{
			 stepPayments.forEach(els=>{

			 els.classList.remove('active'); });
		 
			 item.classList.add('active');
	 });
 });
  }


  const btnPayments = document.querySelectorAll('.payment__btn-column');
 if(btnPayments){
	btnPayments.forEach(item =>{ 
		const elem = item.firstElementChild;
		item.addEventListener('click', (e) =>{
		btnPayments.forEach(el=>{
			const elems = el.firstElementChild;
			elems.classList.remove('active'); });
		
		elem.classList.add('active');
	});
});
 }

 const btnclickPaymentTwo = document.querySelectorAll('.click-column-two-payment');
 if(btnclickPaymentTwo){
	btnclickPaymentTwo.forEach(item =>{ 
		
		item.addEventListener('click', (e) =>{
			
		
			item.classList.toggle('active');
	});
});
 }
 
  const infoBlogsColumnTwwo = document.querySelector('.blogs__custs');
const infoBlogsColumnTwwos = document.querySelector('.blogs__columns');
const infoBlogsColumnSlideTwos = document.querySelectorAll('.blogs__items');

if (document.documentElement.clientWidth < 768) {
	if(infoBlogsColumn){
		infoBlogsColumnTwwos.classList.add('swiper-wrapper');
		infoBlogsColumnTwwo.classList.add('swiperbloginfoTwo');
		infoBlogsColumnSlideTwos.forEach(element => {
			element.classList.add('swiper-slide');
		});
	}
}
const swiperInfoTwo = new Swiper('.swiperbloginfoTwo', {
	// Optional parameters
	direction: 'horizontal',

  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination-info-two',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next-info-two',
	  prevEl: '.swiper-button-prev-info-two',
	},
	effect: 'slide',
	slidesPerView: 1,
	
  });




  var initPhotoSwipeFromDOM = function(gallerySelector) {
	// parse slide data (url, title, size ...) from DOM elements
	// (children of gallerySelector)
	var parseThumbnailElements = function(el) {
	  var thumbElements = el.childNodes,
		  numNodes = thumbElements.length,
		  items = [],
		  figureEl,
		  linkEl,
		  size,
		  item;
  
	  for (var i = 0; i < numNodes; i++) {
		figureEl = thumbElements[i]; // <figure> element
  
		// include only element nodes
		if (figureEl.nodeType !== 1) {
		  continue;
		}
  
		linkEl = figureEl.children[0]; // <a> element
  
		size = linkEl.getAttribute("data-size").split("x");
  
		// create slide object
		item = {
		  src: linkEl.getAttribute("href"),
		  w: parseInt(size[0], 10),
		  h: parseInt(size[1], 10)
		};
  
		if (figureEl.children.length > 1) {
		  // <figcaption> content
		  item.title = figureEl.children[1].innerHTML;
		}
  
		if (linkEl.children.length > 0) {
		  // <img> thumbnail element, retrieving thumbnail url
		  item.msrc = linkEl.children[0].getAttribute("src");
		}
  
		item.el = figureEl; // save link to element for getThumbBoundsFn
		items.push(item);
	  }
  
	  return items;
	};
  
	// find nearest parent element
	var closest = function closest(el, fn) {
	  return el && (fn(el) ? el : closest(el.parentNode, fn));
	};
  
	// triggers when user clicks on thumbnail
	var onThumbnailsClick = function(e) {
	  e = e || window.event;
	  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  
	  var eTarget = e.target || e.srcElement;
  
	  // find root element of slide
	  var clickedListItem = closest(eTarget, function(el) {
		return el.tagName && el.tagName.toUpperCase() === "LI";
	  });
  
	  if (!clickedListItem) {
		return;
	  }
  
	  // find index of clicked item by looping through all child nodes
	  // alternatively, you may define index via data- attribute
	  var clickedGallery = clickedListItem.parentNode,
		  childNodes = clickedListItem.parentNode.childNodes,
		  numChildNodes = childNodes.length,
		  nodeIndex = 0,
		  index;
  
	  for (var i = 0; i < numChildNodes; i++) {
		if (childNodes[i].nodeType !== 1) {
		  continue;
		}
  
		if (childNodes[i] === clickedListItem) {
		  index = nodeIndex;
		  break;
		}
		nodeIndex++;
	  }
  
	  if (index >= 0) {
		// open PhotoSwipe if valid index found
		openPhotoSwipe(index, clickedGallery);
	  }
	  return false;
	};
  
	// parse picture index and gallery index from URL (#&pid=1&gid=2)
	var photoswipeParseHash = function() {
	  var hash = window.location.hash.substring(1),
		  params = {};
  
	  if (hash.length < 5) {
		return params;
	  }
  
	  var vars = hash.split("&");
	  for (var i = 0; i < vars.length; i++) {
		if (!vars[i]) {
		  continue;
		}
		var pair = vars[i].split("=");
		if (pair.length < 2) {
		  continue;
		}
		params[pair[0]] = pair[1];
	  }
  
	  if (params.gid) {
		params.gid = parseInt(params.gid, 10);
	  }
  
	  return params;
	};
  
	var openPhotoSwipe = function(
	  index,
	  galleryElement,
	  disableAnimation,
	  fromURL
	) {
	  var pswpElement = document.querySelectorAll(".pswp")[0],
		  gallery,
		  options,
		  items;
  
	  items = parseThumbnailElements(galleryElement);
  
	  // #################### 3/4 define photoswipe options (if needed) #################### 
	  // https://photoswipe.com/documentation/options.html //
	  options = {
		/* "showHideOpacity" uncomment this If dimensions of your small thumbnail don't match dimensions of large image */
		//showHideOpacity:true,
  
		// Buttons/elements
		closeEl: true,
		captionEl: true,
		fullscreenEl: true,
		zoomEl: true,
		shareEl: false,
		counterEl: false,
		arrowEl: true,
		preloaderEl: true,
		// define gallery index (for URL)
		galleryUID: galleryElement.getAttribute("data-pswp-uid"),
		getThumbBoundsFn: function(index) {
		  // See Options -> getThumbBoundsFn section of documentation for more info
		  var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
			  pageYScroll =
			  window.pageYOffset || document.documentElement.scrollTop,
			  rect = thumbnail.getBoundingClientRect();
  
		  return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
		}
	  };
  
	  // PhotoSwipe opened from URL
	  if (fromURL) {
		if (options.galleryPIDs) {
		  // parse real index when custom PIDs are used
		  // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
		  for (var j = 0; j < items.length; j++) {
			if (items[j].pid == index) {
			  options.index = j;
			  break;
			}
		  }
		} else {
		  // in URL indexes start from 1
		  options.index = parseInt(index, 10) - 1;
		}
	  } else {
		options.index = parseInt(index, 10);
	  }
  
	  // exit if index not found
	  if (isNaN(options.index)) {
		return;
	  }
  
	  if (disableAnimation) {
		options.showAnimationDuration = 0;
	  }
  
	  // Pass data to PhotoSwipe and initialize it
	  gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	  gallery.init();
  
	  /* ########### PART 4 - EXTRA CODE  ########### */
	  /* EXTRA CODE (NOT FROM photoswipe CORE) - 
	  1/2. UPDATE SWIPER POSITION TO THE "CURRENT" ZOOM_IN IMAGE (BETTER UI) */
	  // photoswipe event: Gallery unbinds events
	  // (triggers before closing animation)
	  gallery.listen("unbindEvents", function() {
		// The index of the current photoswipe slide
		let getCurrentIndex = gallery.getCurrentIndex();
		// Update position of the slider
		mySwiper.slideTo(getCurrentIndex, 0, false);
		// 2/2. Start swiper autoplay (on close - if swiper autoplay is true)
		if(mySwiper.params.autoplay.enabled){
		  mySwiper.autoplay.start();      
		}
  
	  });
	  // 2/2. Extra Code (Not from photoswipe) - swiper autoplay stop when image in zoom mode (When lightbox is open) */
	  gallery.listen('initialZoomIn', function() {
		if(mySwiper.autoplay.running){
		  mySwiper.autoplay.stop();
		}
	  });
	};
  
	// loop through all gallery elements and bind events
	var galleryElements = document.querySelectorAll(gallerySelector);
  
	for (var i = 0, l = galleryElements.length; i < l; i++) {
	  galleryElements[i].setAttribute("data-pswp-uid", i + 1);
	  galleryElements[i].onclick = onThumbnailsClick;
	}
  
	// Parse URL and open gallery if it contains #&pid=3&gid=1
	var hashData = photoswipeParseHash();
	if (hashData.pid && hashData.gid) {
	  openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
	}
  };
  
  // execute above function
  initPhotoSwipeFromDOM(".my-gallery");

  const mySwiper = new Swiper(".swiper", {
	 // If swiper loop is true set photoswipe counterEl: false (line 175 her)
	loop: true,
	/* slidesPerView || auto - if you want to set width by css - 
	in this case width:80% */
	slidesPerView: 4,
	spaceBetween: 10,
	slideToClickedSlide: false,
	autoplay: { /* remove/comment to stop autoplay  */
	  delay: 3000,
	  disableOnInteraction: false /* true by deafult */
	},
	// If we need pagination
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 2,
	
		},
		500: {
			slidesPerView: 3,
	  
		  },
		// when window width is >= 480px

		// when window width is >= 640px
		750: {
		  slidesPerView: 4,
		
		}
	  },
	// keyboard control
	keyboard: {
	  enabled: true,
	}
  });
  
  
  // 2 of 4 : PHOTOSWIPE #######################################
  // https://photoswipe.com/documentation/getting-started.html //
  



$(window).keyup(function(e){
	var target = $('.checkbox-ios input:focus');
	if (e.keyCode == 9 && $(target).length){
		$(target).parent().addClass('focused');
	}
});
 
$('.checkbox-ios input').focusout(function(){
	$(this).parent().removeClass('focused');
});


const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

// Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// "Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
	// Возможность указать оценку 
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// Обновление переменных
				initRatingVars(rating);
				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				// Обновление переменных
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					// "Отправить" на сервер
					setRatingValue(ratingItem.value, rating);
				} else {
					// Отобразить указанную оцнку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}

	async function setRatingValue(value, rating) {
		if (!rating.classList.contains('rating_sending')) {
			rating.classList.add('rating_sending');

			// Отправика данных (value) на сервер
			let response = await fetch('rating.json', {
				method: 'GET',

				//body: JSON.stringify({
				//	userRating: value
				//}),
				//headers: {
				//	'content-type': 'application/json'
				//}

			});
			if (response.ok) {
				const result = await response.json();

				// Получаем новый рейтинг
				const newRating = result.newRating;

				// Вывод нового среднего результата
				ratingValue.innerHTML = newRating;

				// Обновление активных звезд
				setRatingActiveWidth();

				rating.classList.remove('rating_sending');
			} else {
				alert("Ошибка");

				rating.classList.remove('rating_sending');
			}
		}
	}
}