//http://ecmascript.cn/
(function($){
	var param=["qw","as","zx"];
	
	for(var i=0; i<param.length; i++){
		var $label='<label id=' + param[i] +'>'+ param[i] +'</label>';
		var $input='<input type=text/>';
		var $add='<button>add</button>'
		var $div=$("body").append('<div></div>');
		$div.append($label);
		$div.append($input);
		$div.append($add);
		$('#container').append($div);
	}
})(jQuery)