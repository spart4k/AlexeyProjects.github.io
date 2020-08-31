$(document).ready(function() {
		var menuBtn = $('.blockstart-header__nav-btn');
		var menu = $('.blockstart-header__nav-bar');


		menuBtn.on('click', function (event){
			event.preventDefault();
			menu.toggleClass('blockstart-header__nav-bar__active');
	});
});
$(document).ready(function(){

	// = Добавляем ссылку наверх к заголовку

	// = Вешаем событие прокрутки к нужному месту
	//	 на все ссылки якорь которых начинается на #
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

});