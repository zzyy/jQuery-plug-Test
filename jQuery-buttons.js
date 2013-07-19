(function($){
    var HTMLTmpl = {
        	contTemplate: '<div class="btn-group" data-toggle="buttons-checkbox"></div>'
        }
    	
    	HTMLTmpl.template = '<div class="jButtons popover popover-rich fade bottom in" style="display: none;">'+
          						'<div class="arrow"></div>'+
          						'<div class="popover-inner">'+
            						'<div class="popover-content">'+
            						HTMLTmpl.contTemplate+
            						'</div>'+
            					'</div>'+
            				'</div>';
    
    $.fn.jButtons= function(option){
    	$this = $(this);
    	var opt=$.extend({
    		datas: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    		multiple:true,
    		enable:true,
    		show: function(){alert("show")},
    		hide: function(){alert("hide")},
    		click: function(){}
    		},option);
    	
    	
    	
    	return $this.each(function(index, domEle){
    		var $now = $(this);
    		var $html = $(HTMLTmpl.template).appendTo('body')
    					.on({
    						click: function(e){
    				    		e.stopPropagation();
    				 			e.preventDefault();
    				 			$(e.target).toggleClass("active");
    				 			fillTarget();
    				 			opt.click();
    						}
    					});
    		
//    		init.call(this);
    		$(this).click(function(){
    			 $html.toggle();
    		});
    		
    		$(document).on('mousedown', function (e) {
    			// Clicked outside the datepicker, hide it
    			if ($(e.target).closest('.jButtons').length === 0) {
    			    var text = $(domEle).text().trim();
    			    var selectDays = text == "" ? [] : text.split(",");
    			    	$html.hide();
    			}
    		});
    		
    		var show = function(){
    			$html.show;
    			opt.show();
    		};
    		
    		var hide = function() {
				$.html.hide();
				fillTarget();
				opt.hide();
			};
    		
    		var fillTarget = function(){
    			var $btnGroup = $html.find(".btn-group");
	 			var triggerElement = $(domEle);
	 			triggerElement.text("");
	 			var selectItems = $btnGroup.find("button.active");
	            selectItems.each(function(index, item) {
	            	triggerElement.append($(item).text());
	                if((index + 1) < selectItems.size()) {
	                    triggerElement.append(",");
	                 }
	             });
    		};
    		
//    		var init = function(){
    	  		var $btnGroup = $html.find(".btn-group");
                $.each(opt.datas, function(index, item) {
                    $btnGroup.append('<button class="btn">' + item + '</button>');
                });
                
                if(this.isInline) return;
    			var zIndex = parseInt($(domEle).parents().filter(function() {
    							return $(domEle).css('z-index') != 'auto';
    						}).first().css('z-index'))+10;
//    			var offset = this.component ? this.component.offset() : this.element.offset();
    			var offset = $(domEle).offset();
    			$html.css({
    				top: offset.top + this.height+10,
    				left: offset.left ,
    				zIndex: zIndex
    			});
//    		}
    		
    	});
    	
    }
})(jQuery)