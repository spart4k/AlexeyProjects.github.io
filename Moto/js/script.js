$(document).ready(function() {
				var menuBtn = $('.top-nav_btn');
				var menu = $('.top-nav_menu');
				var sidebarBtn = $('.left-sidebar_btn');
				var sidebarmenu = $('.left-sidebar_menu');

				menuBtn.on('click', function (event){
					event.preventDefault();
					menu.toggleClass('top-nav_menu__active');
			});
				sidebarBtn.on('click', function (event){
					event.preventDefault();
					sidebarmenu.toggleClass('left-sidebar_menu__active');
			});
		});