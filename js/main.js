;(function(){
	var $w = function(a){
		return new $w.prototype.init(a);
	}

	$w.prototype = {
		//0.测试init
		init:function(a){
			console.log();
			// this.a = a;
			switch(this.typeString(a)){
				case 'function':
					a();
					break;
				case 'string':
					// string ".class" "#id" "div" ""

					break;
				default:
					console.log(this.typeString(a))
					break;
			}


			return this;
		},
		typeString:function(a){
			var str = Object.prototype.toString.call(a).slice(1,-1).split(" ")[1].toLowerCase();
			return str;
		},
		//1.检验数据类型；
		temp:function(fn){
			console.log(fn)
			var rComment = /\/\*([\s\S]*?)\*\//;
			return fn.toString().match(rComment)[1];
		}
	};

	$w.prototype.init.prototype = $w.prototype;

	$w(function(){
		console.log(1);
	})
	
	$w(1);
})(window);