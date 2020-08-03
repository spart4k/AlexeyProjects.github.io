$(document).ready(function() {
				var menuBtn = $('.block-end__btn-first');
				var menu = $('.block-end__menu-first');

				menuBtn.on('click', function (event){
					event.preventDefault();
					menu.toggleClass('block-end__menu-first__active');
			});
				
		});
$(document).ready(function() {
				var menuBtn = $('.block-end__btn-second');
				var menu = $('.block-end__menu-second');

				menuBtn.on('click', function (event){
					event.preventDefault();
					menu.toggleClass('block-end__menu-second__active');
			});
				
		});