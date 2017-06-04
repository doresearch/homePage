/**数据准备**/
var test = [
	{
		src:"img/web_home_img2.jpg",
		page:'<div class="pagehtml"><div class="clo"><div class="title1">跟着老师一起去</div><div class="title2">疯狂动物城</div><div class="title3">周二晚上7:00 Susan老师</div><button>免费下载体验</button></div></div>'
	},{
		src:"img/web_home_img1.jpg",
		page:'<div class="pagehtml text-right"><div class="clo"><div class="title4">新用户下载注册即可</div><div class="title5">免费试听三天</div><button>免费下载体验</button></div></div>'
	}];

var landingData = {
	id:'landing',
	name:'登录',
	template:'<p class="left"><a href="javascript:doRegister()">>>立即注册</a></p>'
},registerData = {
	id:'register',
	name:'注册',
	template:''
};
var scrollExit = false;

/**页面切换**/
$('#home').show();
$('#buy').hide();
$('#download').show();
$('footer').show();
$('#registerdetail').hide();
$('#registerdetail-success').hide();
$('#about').show();

function toHome(){
	$('#home').show();
	$('#download').show();
	$('#about').show();
	$('#job').hide();
	scroll(0);
	window.location.hash = "toHome";
	fullscreen.move(5000);
	$('header').removeClass('rever');
	scrollExit = false;
}

function toDownLoad(){
	$('#home').show();
	$('#download').show();
	$('#about').show();
	$('#job').hide();
	scroll($('#download').offset().top);
	window.location.hash = "toDownLoad";
	scrollExit = false;
	fullscreen.stop();
}

function toAbout(){
	$('#home').show();
	$('#download').show();
	$('#about').show();
	$('#job').hide();
	scroll($('#about').offset().top);
	window.location.hash = "toAbout";
	scrollExit = false;
	fullscreen.stop();
}

function toJoin(){
	$('header').addClass('rever');
	$('#home').hide();
	$('#download').hide();
	$('#about').hide();
	$('#job').show();
	scroll(0);
	scrollExit = true;
	fullscreen.stop();
}
/*******
 * window.location.search转化为obj
 * */
function initObj(){
	if(!window.location.search) return{islanding:false}
	
	var arr = window.location.search.split('?')[1].split('&');
	var obj = {};
	
	arr.map(function(n,i){
		obj[n.split('=')[0]] = n.split('=')[1];
	})
	return obj;
}


var FullScreen = function(data){
	this.template = '<div class="page"><img src={{src}} alt="" class="full" />{{page}}</div>';
	this.bartem = '<li><a></a></li>'
	this.data = data;
	this.active = 0;
	this.timer = null;
	this.init();
	this.setPos();
}

FullScreen.prototype.init = function(){
	var _html = new String(),_html2 = new String();
	
	for(var i = 0;i < this.data.length;i++){
		_html += this.template.replace('{{src}}',this.data[i].src).replace('{{page}}',this.data[i].page);
		_html2 += this.bartem;
	}
	
	$('.fullscreen .movebox').html(_html).width(this.data.length * $(window).width());
	$('.fullscreen .movebar ul').html(_html2);

	$('.fullscreen .movebar ul').css('transform','translate(' + ($(window).width()- $('.fullscreen .movebar ul').width())/2  + 'px)');
	$('.fullscreen .movebar a').eq(0).addClass('active');
}

FullScreen.prototype.move = function(time){
	var self = this;
	clearInterval(this.timer)
	this.timer = setInterval(function(){
		self.active++;
		self.active %= self.data.length;
		$('.fullscreen .movebox').css("transform","translate(-" + ($(window).width() ) * self.active + "px)");
		$('.fullscreen .movebar a').removeClass('active');
		$('.fullscreen .movebar a').eq(self.active).addClass('active');
	},time)
}

FullScreen.prototype.moveto = function(a){
	var self = this;
	self.active = a;

	$('.fullscreen .movebox').css("transform","translate(-" + ($(window).width() + 17)*self.active + "px)");
	$('.fullscreen .movebar a').removeClass('active');
	$('.fullscreen .movebar a').eq(self.active).addClass('active');

}

FullScreen.prototype.stop = function(){
	clearInterval(this.timer);
}

FullScreen.prototype.setPos = function(){
	$('.fullscreen img').css('height',$(window).height());
	$('.fullscreen img').css('width',1440*$(window).height()/668);
	$('.fullscreen .page').css('height',$(window).height());
	$('.fullscreen .page').css('width',$(window).width());
	
	var l = (1440*$(window).height()/668 - $(window).width())/2;
	
	$('.fullscreen img').css('left',-l);	
	
	$('.fullscreen .title1').css('margin-top',(276/688)*$(window).height());
	$('.fullscreen .title1').css('font-size',(38/688)*$(window).height());
	
	$('.fullscreen .title2').css('margin-top',(5/688)*$(window).height());
	$('.fullscreen .title2').css('font-size',(73/688)*$(window).height());
	
	$('.fullscreen .title3').css('margin-top',(5/688)*$(window).height());
	$('.fullscreen .title3').css('font-size',(23/688)*$(window).height());
	
	$('.fullscreen .title4').css('margin-top',(276/688)*$(window).height());
	$('.fullscreen .title4').css('font-size',(36/688)*$(window).height());
	
	$('.fullscreen .title5').css('margin-top',(5/688)*$(window).height());
	$('.fullscreen .title5').css('font-size',(58/688)*$(window).height());
	
	$('.fullscreen button').css('margin-top',(30/688)*$(window).height());
	$('.fullscreen button').css('width',(160/688)*$(window).height());
	$('.fullscreen button').css('height',(48/688)*$(window).height());	
	$('.fullscreen button').css('font-size',(20/688)*$(window).height());
}

/**通用方法**/
String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2)
}

$(function(){
	var search = initObj();


	var SectionH = $(window).height();
	var SectionW =$(window).width();

	var rem = SectionW/(1366/16) < 12 ? 12: SectionW/(1366/16);
	$('html').css('font-size',rem);
	
	window.onresize = function(){
		location.reload()
	}
	
	$("#home").height(SectionH);
	
	$('.userAgent').on('click','.landing',function(){
		register.close();
		land.show();
	})
	
	$('.userAgent').on('click','.register',function(){
		land.close();
		register.show();
	})
	
	$(document).on('click','.page button',function(){
		toDownLoad();
	})
	
	$(document).on('scroll',function(){
		if(scrollExit)return;
		
		if($(window).scrollTop() > $(window).height() - $('header').height()){
			$('header').addClass('rever');
		}else{
			$('header').removeClass('rever');
		}
	})
	
	$('.movebar').on('mouseover','ul',function(){
		fullscreen.stop();
		fullscreen.timer = 0;
	})
	
	$('.fullscreen').on('mouseout','.page',function(){
		if(fullscreen.timer == 0){
			fullscreen.move(5000);
		}
	})
	
	$('.movebar').on('click','li',function(){
		fullscreen.moveto($(this).index());
	})
	
	window.fullscreen = new FullScreen(test);
	fullscreen.move(5000);
	
	$('body').show();
	toJoin();
})


scroll = (function(){
	var timer = 0,n = 0,s = 0;
	
	return function(s0){
		if(timer !== 0) return;
		
		timer = setInterval(function(){
			if($(window).scrollTop() > s0){
				n += 0.1;
				s = n * n * n - 50 * n * n + $(window).scrollTop();
				if(s < s0){
					$(window).scrollTop(s0);
					n = 0;				
					clearInterval(timer);
					timer = 0;
					return;
				}
			}else if($(window).scrollTop() <= s0){
				n = n-0.1;
				s = - n * n * n + 50 * n * n + $(window).scrollTop();
				
				if(s > s0){
					$(window).scrollTop(s0);
					n = 0;
					clearInterval(timer);
					timer = 0;
					return;
				}
			}
			$(window).scrollTop(s);
		},16)
	}
})()
