//http://ecmascript.cn/
(function($){
	function JSelect(element, option){
		
	};
	
	JSelect.prototype={
		constructor:JSelect,	
	};
	
	$.fn.jSelect=function(option){
		var defaults = $.extend({
			data:[{1:"a"},{2:"b"},{3:"c"}],
			onChanged: function(){}
		},option);
		
		return this.each(function(){
			new JSelect(this, defaults);
		});
	};
	
})(jQuery)