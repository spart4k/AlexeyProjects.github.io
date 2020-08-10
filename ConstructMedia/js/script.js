$(document).ready(function() {
				var menufirstBtn = $('.blockanswer-dropdown-first');
				var menufirst = $('.blockanswer-dropdown-first-menu');
				var menusecondBtn = $('.blockanswer-dropdown-second');
				var menusecond = $('.blockanswer-dropdown-second-menu');
				var menuthirdBtn = $('.blockanswer-dropdown-third');
				var menuthird = $('.blockanswer-dropdown-third-menu');
				var menufourthBtn = $('.blockanswer-dropdown-fourth');
				var menufourth = $('.blockanswer-dropdown-fourth-menu');

				menufirstBtn.on('click', function (event){
					event.preventDefault();
					menufirst.toggleClass('blockanswer-dropdown-first-menu__active');
			});
				menusecondBtn.on('click', function (event){
					event.preventDefault();
					menusecond.toggleClass('blockanswer-dropdown-second-menu__active');
			});
				menuthirdBtn.on('click', function (event){
					event.preventDefault();
					menuthird.toggleClass('blockanswer-dropdown-third-menu__active');
			});
				menufourthBtn.on('click', function (event){
					event.preventDefault();
					menufourth.toggleClass('blockanswer-dropdown-fourth-menu__active');
			});
		});