(function($){
	
	var JButton=function(element, option){
		this.isVisible=true;
		this.opt = option;
		this.superthis=this;
		this.$element = $(element);
		this.$html = $(HtmlDom.template).on({
	// click:this.click.call(this),
						click: $.proxy(this.click, this)
					}).appendTo('body');
		
		this._init();
		// element bindEvent
		this.bindEvent();
	};
	
	JButton.prototype={
		constructor:JButton,
		
		click:function(e){
			e.stopPropagation();
			e.preventDefault();
			var $targetEle = this.$element;
			var $btns = this.$html.find('.btn');
			if(!this.opt.multiple){
				$btns.removeClass('active');
			};
			$(e.target).toggleClass("active");
			// 清空赋值
			$targetEle.text("");
			var $selectedBtns = $btns.filter('.active');
			$selectedBtns.each(function(index, item) {
				$targetEle.append($(item).text());
                if((index + 1) < $selectedBtns.size()) {
                	$targetEle.append(",");
                }
            });
			this.opt.click(e);
		},
		
		show: function(){
			this.isVisible=false;
			this.$html.show();
			this.opt.show();
			var that=this;
			$(document).on('mousedown', function (e) {
				// Clicked outside the plugin, hide it
				if ($(e.target).closest('.jButton').length == 0) {
				    that.hide();
				}
			});
		},
		
		hide: function(){
			if(this.isVisible)
				return;
			this.isVisible=true;
			this.$html.hide();
			this.opt.hide();
		},
		
		bindEvent: function(){
			var that=this;
			this.$element.on('click',function(e){
				if(that.isVisible){that.show()}
				else{that.hide()}
				});
			
		},
		
		_init:function(){
			var that=this
			var $btnGroup = this.$html.find('.btn-group');
			$.each(this.opt.data, function(index,dataValue){
				if(in_Array(dataValue, that.opt.dataDefault))
					$btnGroup.append('<button class="btn active">' + dataValue + '</button>');
				else
					$btnGroup.append('<button class="btn">' + dataValue + '</button>');
			});
			
			// place
			var zIndex = parseInt(this.$element.parents().filter(function() {
						return $(this).css('z-index') != 'auto';
					}).first().css('z-index'))+10;
// var offset = this.component ? this.component.offset() :
// this.element.offset();
			var offset = this.$element.offset()
			this.$html.css({
				top: offset.top + this.$html.height() -30,
//				left: offset.left - 120,
				left: offset.left,
				zIndex: zIndex
			});
			

		}
		
	};
	
	var in_Array=function(item, array){
		for(var i=0; i<array.length; i++){
			if(item == array[i])return true;
		};
		return false;
	};
	
	$.fn.jbuttons=function(option){
		var defaults = $.extend({
			data: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			dataDefault: [],
    		multiple:true,
    		enable:true,
    		show: function(){},
    		hide: function(){},
    		click: function(e){alert(e.target.html())}
		}, option);
		
		// this为调用函数的jquery对象数组
		this.each(function(){
			// this为外层jquery对象数组中每个对象
			new JButton(this, defaults);
		});
	};
	
    var HtmlDom = {
        	contTemplate: '<div class="btn-group" data-toggle="buttons-checkbox"></div>'
        };
    	
    	HtmlDom.template = '<div class="jButton popover popover-rich fade bottom in" style="display: none;">'+
          						'<div class="arrow"></div>'+
          						'<div class="popover-inner">'+
            						'<div class="popover-content">'+
            							HtmlDom.contTemplate+
            						'</div>'+
            					'</div>'+
            				'</div>';
})(jQuery)