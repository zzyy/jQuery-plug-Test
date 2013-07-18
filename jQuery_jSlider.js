/**
 * @author Iori
 */
(function($) {
	$.fn.extend({
		jslider : function(option) {
			var defaultValue = $.extend({
				enable : true,
				initPosition : 'max',
				size : {
					barWidth : 200,
					sliderWidth : 5
				},
				barCssName : 'defaultbar',
				completedCssName : 'jquery-completed',
				sliderCssName : 'jquery-jslider',
				sliderHover : 'jquery-jslider-hover',
				onChanging : function() {
				},
				onChanged : function() {
				}
			}, option);

			var sliderbar = $('<div><div>&nbsp;</div><div>&nbsp;</div></div>')
							.attr('class', defaultValue.barCssName)
							.css('width',defaultValue.size.barWidth)
							.appendTo(this);
			var completedbar = sliderbar.find('div:eq(0)')
							.attr('class',defaultValue.completedCssName);

			var slider = sliderbar.find('div:eq(1)')
						.attr('class',defaultValue.sliderCssName)
						.css('width', defaultValue.size.sliderWidth);
			
			var bw = sliderbar.width(), sw = slider.width();
			defaultValue.limited = { min: 0, max: bw - sw };
			
			if (typeof window.$sliderProcess == 'undefined') {
			    window.$sliderProcess = new Function('obj1', 'obj2', 'left',
			                                     'obj1.css(\'left\',left);obj2.css(\'width\',left);');
			}
			$sliderProcess(slider, completedbar, eval('defaultValue.limited.' + defaultValue.initPosition));
			
			//drag and drop

			var slide = {

			    drag: function(e) {

			        var d = e.data;

			        var l = Math.min(Math.max(e.pageX - d.pageX + d.left, defaultValue.limited.min), defaultValue.limited.max);



			        $sliderProcess(slider, completedbar, l);

			        //push two parameters: 1st:percentage, 2nd: event

			        defaultValue.onChanging(l / defaultValue.limited.max, e);

			    },

			    drop: function(e) {

			        slider.removeClass(defaultValue.sliderHover);

			        //push two parameters: 1st:percentage, 2nd: event

			        defaultValue.onChanged(parseInt(slider.css('left')) / defaultValue.limited.max, e);



			        $().unbind('mousemove', slide.drag).unbind('mouseup', slide.drop);

			    }

			};



			if (defaultValue.enable) {

			    //bind events

			    slider.bind('mousedown', function(e) {

			        var d = {

			            left: parseInt(slider.css('left')),

			            pageX: e.pageX

			        };

			        $(this).addClass(defaultValue.sliderHover);

			        $().bind('mousemove', d, slide.drag).bind('mouseup', d, slide.drop);

			    });

			}
		}
	});
})(jQuery)