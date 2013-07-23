(function($){
	Validator=function(element,option){
		this.$element=$(element);
		this.opt=option;
		this.$errorHtml=$(option.errorHtml);
		this.$element.on({
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
		});
		
	};
	
	$.fn.validator(option){
		var opt=$.extend({
			Value:'$(this).text()',
			errorMsg:"There are one or more errors with the data you have inputted.",
			errorPlace:null,
			errorClass:null,
			validatorRegex:/^$/,
			
			keyup:function(){},
			blur:function(){},
		},option);
		
		opt.targetValuePlace=opt.targetValuePlace?opt.targetValuePlace:$target;
		this.each(function(){
			new Validator(this,opt);
		});
	};
	
})(jQuery)