//http://ecmascript.cn/
(function($){
	function JSelect(element, option){
		this.$element=$(element);
		this.opt = option;
		this.$html=$(htmlTemplate).on({
			click:$.proxy(this.click,this),
		}).appendTo(this.$element);
		this._init();
	};
	
	JSelect.prototype={
		constructor:JSelect,
		_init:function(){
			var data=this.opt.data;
			for(key in data){
				this.$html.find('ul')
				.append('<li><a href="javascript:void(0)" type-id="'+key+'">'+data[key]+'</a></li>');
			};
		},
		
		click:function(){},
	};
	
	$.fn.jSelect=function(option){
		var defaults = $.extend({
			data:{1:'a',2:'b',3:'c'},
			onChanged: function(){}
		},option);
		
		return this.each(function(){
			new JSelect(this, defaults);
		});
	};
	
	var htmlTemplate='<div class="dropdown-widget" style="float:right;position:relative">'
	    			+'<button style="color:black;" data-toggle="dropdown"><span class="caret"></span></button>'
	    			+'<ul class="dropdown-menu" style="position:absolute; right:0">'
	    
   					+'</ul>'
   					+'</div>';
	
})(jQuery)