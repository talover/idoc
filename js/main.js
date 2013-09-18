
$(function(){
	height ();
	$('.scroll-pane').jScrollPane();

	tabs_right();

	$("#calendar_big").datepicker({
		beforeShowDay: highlightDays,
		inline: true,
		closeText: 'Закрыть', 
		prevText: '&#x3c;Пред', 
		nextText: 'След&#x3e;', 
		currentText: 'Сегодня', 
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 
		'Июл','Авг','Сен','Окт','Ноя','Дек'], 
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], 
		dateFormat: 'dd.mm.yy', 
		firstDay: 1, 
		isRTL: false 
	});


	$('.turn_off').click(function(){
		$('.right_menu').animate({right:"-230px"},1000,function(){
			$('.list_tab li').removeClass('active');
			$('.tabs-panel').removeClass('shadow_tab active');

		});
		$('.content').animate({marginRight:"25px"},1000);
	});
	/*.select_container*/
	$('.select_container a').click(function(){
		$('.select_container ul').slideToggle();
		$('.over_way').fadeIn();
	});

	$('.select_container ul li').click(function(){
		$('.select_container ul').slideToggle();
		var text_s = $(this).text();
		$('.select_container a span').text(text_s);
		$('.over_way').fadeOut();
	});
	/* END  .select_container*/

	/* .drop_down_container*/
	$('.drop_down_container a').click(function(){
		var d_w = $(this).parent().width();
		var ul_w = $(this).parent().find('ul').width();
		$(this).parent().find('ul').css('left', (((parseInt(ul_w) - parseInt(d_w))/2)* -1) + "px");
		$(this).parent().find('ul').slideToggle();
		$('.over_way').fadeIn();
	});
	$('.drop_down_container ul li a').click(function(){$(this).parents('ul').slideUp();});
	/* END .drop_down_container*/
	$('.over_way').click(function(){
		$(this).fadeOut();
		$('.select_container ul,.drop_down_container ul').slideUp();
	});
});// END document

$(window).resize(function(){
	height ();
	$('.scroll-pane').jScrollPane();
});

function height (){
	$('.content_container').css('height', (parseInt($('body').height()) - parseInt($('header').height())- 30)  + 'px');
	$('.table_body').css('height', (parseInt($('.content > div').height()) - parseInt($('.header_container').height())- 55)  + 'px');
}

function tabs_right(index){
   $('.list_tab li').each(function(index){
   		$(this).data("tab_nav",index);
   });

   $('#tabs > div').attr("id",function(index){
   		return 'tabs_' + index
   });
	$('.list_tab li').click(function(index){
	   	$('.list_tab li').removeClass('active');
   		$(this).addClass('active');
   		var n = $(this).data("tab_nav");
   		$('.tabs-panel').removeClass('active');
   		$('#tabs_'+n+'').addClass('shadow_tab active');
   		$('.right_menu').animate({right:"0px"},1000);
   		$('.content').animate({marginRight:"260px"},1000);
   });
}

function highlightDays(date) {
	
	var a_blue = ["1.10.2012", "5.10.2012", "10.11.2012"];
	var a_red = ["3.10.2012", "7.12.2012"];
	var a_orange = ["8.10.2012", "9.11.2012"];
	var a_green	 = ["27.10.2012"];
	var a_all = ["15.10.2012"];
	
	var str_date = date.getDate() + '.' + (date.getMonth()+1) + '.'+ date.getFullYear();
	
	var i;
	for(i=0; i<a_blue.length; i++){
		if(str_date==a_blue[i])
			return [true, 'mark-blue']; 	
	}
	for(i=0; i<a_red.length; i++){
		if(str_date==a_red[i])
			return [true, 'mark-red'];	
	}	
	for(i=0; i<a_orange.length; i++){
		if(str_date==a_orange[i])
			return [true, 'mark-orange'];	
	}
	for(i=0; i<a_green.length; i++){
		if(str_date==a_green[i])
			return [true, 'mark-green'];	
	}
	for(i=0; i<a_all.length; i++){
		if(str_date==a_all[i])
			return [true, 'mark-all'];		
	}
	return [true, 'default'];
}