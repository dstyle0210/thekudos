(function($){
	$.fn.spyLazyImg = function(opts){
		var spys = this;
		var o = $.extend({
			delay:500,
			load:null,
			error:null
		},opts);
		
		spys.one("load",function(){
			$(this).animate({"opacity":1});
			if(o.load){
				o.load.call(null,this);
			};
		});
		
		spys.one("error",function(){
			if(o.error){
				o.error.call(null,this);
			};
		});
		
		
		var load = function(){
			spys.filter(":not(.catched)").each(function(){
				$(this).addClass("catched");
				$(this).css({"opacity":0});
				$(this).attr("src", $(this).attr("data-src") );
			});
		};
		setTimeout(function(){
			load();
		},o.delay);
	}
})(jQuery);