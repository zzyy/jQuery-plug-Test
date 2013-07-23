(function($){
	$.fn.validator=function(option){
		var settings = $.extend({
			valuePosition:'$(this).text()',
			
			errorHtml:"",
			errorHtmlPlace:'',
			errorClass:'',
			errorCss:'',
			Regex:/$^/,
			type:''
		},option);
		
		this.each(function(){
			$(this).on({
				keyup:function(){
					var value = eval(settings.valuePosition);
					this.$errorHtml = typeof(this.$errorHtml)=="undefined"?$(settings.errorHtml):this.$errorHtml;

					var $errorHtmlPlace = settings.errorHtmlPlace?eval(settings.errorHtmlPlace):false;
					if(!settings.Regex.test(value)){
						$(this).addClass(settings.errorClass);
						if($errorHtmlPlace && $errorHtmlPlace.find(this.$errorHtml)!=[] ){
							this.$errorHtml.appendTo($errorHtmlPlace);
						}
					}else{
						this.$errorHtml.remove();
						$(this).removeClass(settings.errorClass);
					}
				},
				
			});
		});
	}
})(jQuery)