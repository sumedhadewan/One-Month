$(".question").on({
	click:function(){
		$(this).next().slideToggle("slow");
		$(this).children().toggleClass("collapse");
	},
	mouseenter:function(){
		$(this).addClass("change");
	},
	mouseleave:function(){
		$(this).removeClass("change");
	}
});


/*********************
animate
**********************/
$('#demo-button1').click(function(){
	$("#demo-image").animate({
		width:"toggle",
		height:"toggle",
		opacity:"toggle"
	},1500
	);
});

$('#demo-button2').click(function(){
	$("#demo-image").animate({ "left": "-=50px" }, "slow" );
});

$('#demo-button3').click(function(){
	$("#demo-image").animate({ "left": "+=50px" }, "slow" );
});

$('#reset-button').click(function(){

	$("#demo-image").animate({
		left:"0"
	});
	
	// $("#demo-image").css({
	// 	width:"",
	// 	height:"",
	// 	left:""
	// });
});

