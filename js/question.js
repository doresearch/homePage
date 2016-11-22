
var test = [
	{
		type:'select',
		q:'1、选出不同类的一项：',
		a:['A、蛇','B、大树','C、老虎'],
		r:'A'
	},{
		type:'select',
		q:'2、在下列分数中，选出不同类的一项：',
		a:['A 、3/5','B、3/7','C、3/9'],
		r:'C'
	},{
		type:'select',
		q:'3、男孩对男子，正如女孩对 :',
		a:['A、青年', 'B、孩子', 'C、夫人', 'D、姑娘', 'E、妇女'],
		r:'E'
	},{
		type:'select',
		q:'4、如果笔相对于写字，那么书相对于 :',
		a:['A、娱乐', 'B、阅读', 'C、学文化', 'D、解除疲劳' ],
		r:'B'
	},{
		type:'select',
		q:'5、马之于马厩，正如人之于 :',
		a:['A、牛棚 ','B、马车','C、房屋 ','D、农场 ','E、楼房'],
		r:'C'
	},{
		type:'fill_blank',
		q:'6、2 8 14 20 （ ）， 请写出“ （ ） ”处的数字。  ',
		a:null,
		r:'26'
	},{
		type:'select',
		q:'7、下列四个词是否可以组成一个正确的句子: 生活 水里 鱼 在',
		a:['A 、是','B、否 '],
		r:'A'
	},{
		type:'select',
		q:'8、下列六个词是否可以组成一个正确的句子 :球棒 的 用来 是 棒球 打 ',
		a:['A 、是','B、否 '],
		r:'A'
	},{
		type:'select',
		q:'9、动物学家与社会学家相对应，正如动物与（ ）相对 : ',
		a:['A、人类','B、问题','C、社会','D、社会学' ],
		r:'A'
	},{
		type:'select',
		q:'10、如果所有的妇女都有大衣，那么漂亮的妇女会有 :',
		a:['A、更多的大衣','B、时髦的大衣','C、大衣','D、昂贵的大衣' ],
		r:'C'
	},{
		type:'fill_blank',
		q:'11、 1 3 2 4 6 5 7 （ ） ，请写出“ （ ） ”处的数字',
		a:null,
		r:'9'
	},{
		type:'select',
		q:'12、南之于西北，正如西之于：（ ） ',
		a:['A、西北','B、东北','C、西南','D、东南'],
		r:'B'
	},{
		type:'select',
		q:'13、找出不同类的一项 : ',
		a:['A、铁锅','B、小勺','C、米饭','D、碟子'],
		r:'C'
	},{
		type:'fill_blank',
		q:'14、9 7 8 6 7 5 （ ），请写出“ （ ） ”处的数字 .',
		a:null,
		r:'6'
	},{
		type:'select',
		q:'15、找出不同类的一项：',
		a:['A、写字台','B、沙发','C、电视','D、桌布'],
		r:'D'
	},{
		type:'fill_blank',
		q:'16、961 （25） 432 932 （ ） 731 ，请写出（ ）内的数字 .',
		a:null,
		r:'38'
	},{
		type:'select',
		q:'17、选项ABCD中，哪一个应该填在“XOOOOXXOOOXXX”后面?',
		a:['A 、XOO','B、OO','C、OOX','D、OXX'],
		r:'B'
	},{
		type:'select',
		q:'18、望子成龙的家长往往（ ）苗助长 .',
		a:['A、揠','B、堰','C、偃'],
		r:'A'
	},{
		type:'fill_blank',
		q:'19、填上空缺的词：      金黄的头发（黄山）刀山火海      赞美人生（ ）卫国战争',
		a:null,
		r:'美国'
	},{
		type:'select',
		q:'20、选出不同类的一项：',
		a:['A、地板','B、壁橱','C、窗户','D、窗帘' ],
		r:'D'
	},{
		type:'fill_blank',
		q:'21、1 8 27 （ ），请写出（ ）内的数字',
		a:null,
		r:'64'
	},{
		type:'fill_blank',
		q:'22、填上空缺的词 罄竹难书（书法）无法无天 作奸犯科（ ）教学相长',
		a:null,
		r:'科学'
	},{
		type:'fill_blank',
		q:'23、在括号内填上一个字，使其与括号前的字组成一个词，同时又与括号 >后的字也能组成一个词：款（ ）样',
		a:null,
		r:'式'
	},{
		type:'fill_blank',
		q:'24、填入空缺的数字：16（96）12 10（ ）7.5',
		a:null,
		r:'60'
	},{
		type:'select',
		q:'25、找出不同类的一项：',
		a:['A、斑马','B、军马','C、赛马','D、骏马','E、驸马'],
		r:'E'
	},{
		type:'fill_blank',
		q:'26、在括号上填上一个字，使其与括号前的字组成一个词，同时又与括号  >后的字也能组成一个词：祭（ ）定    ',
		a:null,
		r:'奠'
	},{
		type:'fill_blank',
		q:'27、在括号内填上一个字，使之既有前一个词的意思，又可以与后一个词>组成词组：  头部（ ）震荡  ',
		a:null,
		r:'脑'
	},{
		type:'fill_blank',
		q:'28、填入空缺的数字 65 37 17 （ ）',
		a:null,
		r:'5'
	},{
		type:'fill_blank',
		q:'29、填入空缺的数字 41（28）27 83（ ）65  ',
		a:null,
		r:'36'
	},{
		type:'fill_blank',
		q:'30、填上空缺的字母      CFI DHL EJ （ ）',
		a:null,
		r:'o'
	},
]   

var rComment = /\/\*([\s\S]*?)\*\//;
// multiply string
function ms(fn){
     return fn.toString().match(rComment)[1]
};


var juanzi = function(data){
	this.tempS = ms(function(){/*
				     <div class="select" index="{{num}}">
						<div class="question">{{q}}</div>
						<div class="answers">{{a}}</div>
						<div class="answers">{{a}}</div>
						<div class="answers">{{a}}</div>
						<div class="answers">{{a}}</div>
						<div class="answers">{{a}}</div>
					</div>
				*/});
	this.tempT = ms(function(){/*
				    <div class="fill_blank" index="{{num}}">
						<div class="question">{{q}}</div>
						<input type="text" class＝"answer"/>
						<div class="answers">完成</div>
					</div>
				*/});
	this.clear='<div class="answers">0</div>';
	this.data = data;
	
	this.init();
}

juanzi.prototype.init=function(){
	var _html = '';
	for(var i = 0;i < this.data.length;i++){
		if(this.data[i].type == 'select'){
			_html += this.tempS.replace('{{num}}',i)
						.replace('{{q}}',this.data[i].q)
						.replace('{{a}}',this.data[i].a[0]||0)
						.replace('{{a}}',this.data[i].a[1]||0)
						.replace('{{a}}',this.data[i].a[2]||0)
						.replace('{{a}}',this.data[i].a[3]||0)
						.replace('{{a}}',this.data[i].a[4]||0)
		}else{
			_html += this.tempT.replace('{{num}}',i)
						.replace('{{q}}',this.data[i].q);
		}
	}
	_html = _html.split(this.clear).join('')
	document.getElementsByTagName('body')[0].innerHTML = _html;
}

var t = new juanzi(test);

var score = 0;

$('.answers').on('click',function(){
//	console.log($(this).parent().attr('index'));
	var index = $(this).parent().attr('index');
	
	if($(this).html() == "完成"){
		
		if(~$(this).siblings('input').val().indexOf( test[index].r )){
			score += 5;
		}
		
	}else if(~$(this).html().indexOf( test[index].r ) < 0){
		score += 5;
		$(this).css('background','greenyellow')
	}else{
		$(this).css('background','red')
	}
	
	if(index == 29){
		alert(score)
	}
})
