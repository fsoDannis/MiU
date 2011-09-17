var parserForm= function(data){
	console.log(data);
	
};

$(document).ready(function(){
	
	var rForm = $('#request');
	
	rForm.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			var data = rForm.serializeArray();
			parserForm(data);
		}
	};	
});
