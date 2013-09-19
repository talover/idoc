
$(function(){
	height ();
	tabs_right();
	$( ".tabs" ).tabs();

	$('.tabs_nav ').click(function(){$('.scroll-pane').jScrollPane();});

	$(".calendar_big").datepicker({
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
	$('.drop_down_container ul li a').click(function(){
		$(this).parents('ul').slideUp();
		$('.over_way').fadeOut();
	});
	/* END .drop_down_container*/

	$('.over_way').click(function(){
		$(this).fadeOut();
		$('.select_container ul,.drop_down_container ul').slideUp();
	});

	/* .invisible_container*/
	var inv_cont_w = $('.invisible_container').width();
		$('.invisible_container').css('left', (parseInt(inv_cont_w)* -1) + "px");
	var inv_const = 0;
	$('.invisible_btn').click(function(){
		var inv = 1;

		if (inv > inv_const){
			$('.invisible_container').animate({left:"90px"},2500);
			inv_const = 1;
		}else

		if (inv = inv_const){
			$('.invisible_container').animate({left:(parseInt(inv_cont_w)* -1) + "px"},2500);
			inv_const = 0;
		}
	});
	/* END .invisible_container*/

	/* .papaps*/

	$('.btn_container').delegate(".task_btn","click",function(){
		$('.task_container,.popap_over_way').fadeIn();
		$('.scroll-pane').jScrollPane();
	});

	$('.btn_container').delegate(".assignments_btn","click",function(){
		$('.assignments_container,.popap_over_way').fadeIn();
		$('.scroll-pane').jScrollPane();
	});

	$('.dialogue_btn').click(function(){$('.dialogue_container,.popap_over_way').fadeIn();});

	$('.popap_over_way,.close').click(function(){
		$('.popap_over_way,.popap_container').fadeOut();
	});

	/* END .papaps*/

	/* .send_body*/
	$('.send_body span').click(function(){$('.send_body ul').slideToggle();});
	$('.send_body ul a').click(function(){$('.send_body ul').slideToggle();});
	/* END .send_body*/

	/* .task_accordion_btn*/	
	$('.task_accordion_btn').click(function(){
		$(this).toggleClass('active');
		$(this).parent().find('.task_accordion_container').slideToggle(function(){
			$('.scroll-pane').jScrollPane();
		});
	});
	/* END .task_accordion_btn*/


	$('input:radio').screwDefaultButtons({
        image: 'url("css/images/radio_light-blue.png")',
        width: 21,
        height: 21
    });
    $('input:checkbox').screwDefaultButtons({
        image: 'url("css/images/checkbox_light-blue.png")',
        width: 25,
        height: 24
    });

    $('.scroll-pane').jScrollPane();
});// END document

$(window).resize(function(){
	height ();
	$('.scroll-pane').jScrollPane();
});

function height (){
	$('.content_container').css('height', (parseInt($('body').height()) - parseInt($('header').height())- 30)  + 'px');
	$('.table_body').css('height', (parseInt($('.content > div').height()) - parseInt($('.header_container').height())- 55)  + 'px');
	$('.tab_task_container').css('height',
		parseInt($('.task_container').height()) - parseInt(85) - parseInt($('.footer_popap').height())  + 'px');
	$('.body_assignments').css('height',
		parseInt($('.assignments_container').height()) - parseInt(45) - parseInt($('.footer_popap').height())  + 'px');
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
	
	var a_blue = ["1.9.2013", "5.9.2013", "10.9.2013"];
	var a_red = ["3.9.2013", "7.9.2013"];
	var a_orange = ["8.9.2013", "9.9.2013"];
	var a_green	 = ["27.9.2013"];
	var a_all = ["15.9.2013"];
	
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