function init(){
	var a = $(window).width()/(750/32);
	$('html').css('font-size',a);
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

	if(!isWeiXin()){
		if(isAndroid){
			$('.download-href').attr('href','http://rc.fastschool.cn/fs/app/fs_v2.7.12_fsweb.apk');
			$('.download-href').attr('href','http://wx.fastschool.cn/down');
		}else if(isiOS){
			$('.download-href').attr('href','https://appsto.re/cn/DjPmcb.i');
			$('.download-href').attr('href','http://wx.fastschool.cn/down');
		}
	}

	var data = [
		{
			"src":"img/h5_img1.jpg",
			"href":"javascript:void(0)"
		},
		{
			"src":"img/h5_1.jpg",
			"href":"javascript:void(0)"
		}
	]
	
	var full = new FullScreen(data,$('.fullscreen .box')),touchstart;
	
	setTimeout(function(){
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 3000,//可选选项，自动滑动
			loop : true,
			autoplayDisableOnInteraction : false,
			setWrapperSize :true,
		})
	},100)
	
	if(parseFloat($('.page').eq(0).css('height')) < $(window).height()){
		$('.page').eq(0).css('height',$(window).height());	
	}
}

var FullScreen = function(data,node){
	this.data = data;
	this.node = node;
	this.node.css('left','0')
	this.active = 0;
	this.timer = null;
	this.template = '<div class="img swiper-slide"><a href={{href}}><img src={{src}}></a></div>';
	this.init();
}

FullScreen.prototype.init = function(){
	var _html = new String();
	
	for (var i = 0;i < this.data.length;i++) {
		_html += this.template.replace('{{src}}',this.data[i].src).replace('{{href}}',this.data[i].href);
	}
	
	this.node.html(_html);

}

function addWapper(){
	$('.btn').click(function(){
		var div = $('<div>').css('position','fixed')
				.css('top',0)
				.css('width',"100%")
				.css('height',"100%")
				.css('z-index',101)
				.css("background",'rgba(0,0,0,0.7)');
		
		$('body').append(div);
		var img = $('<img>').attr('src','img/right_img.png')
				.css('top',0)
				.css('position','absolute')
				.css('width',"80%")
				.css('right',"0")
				.css('z-index',103);
				
		div.append(img);
		
		div.click(function(){
			div.hide();
		})
	})
	
}

function isWeiXin(){
	var ua = window.navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == 'micromessenger'){
		return true;
	}else{
		return false;
	}
}

if (WeixinApi.openInWeixin()) {
	WeixinApi.ready(function(Api) {
		Zepto(function($) {
			init();
			addWapper();
			$('body').show();
		});
	});
} else {
	Zepto(function($) {
		init();
		$('body').show();
	});
}