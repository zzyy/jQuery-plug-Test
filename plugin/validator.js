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
		var $errorHtml = $(settings.errorHtml);
		
		var $this=this;
		this.on({
			keyup:function(){
				var value = eval(settings.valuePosition);
				var $errorHtmlPlace = settings.errorHtmlPlace?eval(settings.errorHtmlPlace):false;
				if(!settings.Regex.test(value)){
					$this.addClass(settings.errorClass);
					if($errorHtmlPlace && $errorHtmlPlace.find($errorHtml)!=[] ){
						$errorHtml.appendTo($errorHtmlPlace);
					}
				}else{
					$errorHtml.remove();
					$this.removeClass(settings.errorClass);
				}
			},
			
			blur:function(){
				var value = eval(settings.valuePosition);
				var $errorHtmlPlace = settings.errorHtmlPlace?eval(settings.errorHtmlPlace):false;
				if(!settings.Regex.test(value)){
					$this.addClass(settings.errorClass);
					if($errorHtmlPlace && $errorHtmlPlace.find($errorHtml)!=[] ){
						$errorHtml.appendTo($errorHtmlPlace);
					}
				}else{
					$errorHtml.remove();
					$this.removeClass(settings.errorClass);
				}
			}
		});
	}
})(jQuery)