(function($) {
	var JS_FORM_CLASS = "js-form",
		JS_LABEL_CLASS = "js-label",
		JS_INPUT_CLASS = "js-input",
		JS_SUBMIT_CLASS = "js-submit"
		JS_DIV_QUESTION = "question-section";

	var JS_INPUT_NAME = "frm-input";

	var CHECKBOX_TRUE_VALUE = "Verdadero",
		CHECKBOX_FALSE_VALUE = "Falso";


	$.fn.jsForms = function(settings){
		var $result = $("<form>").addClass(JS_FORM_CLASS);

        var config = {
            'color': '#eee',
            'width': '50%',
            'margin': '70px auto',
            'fields': []
        };
        if (settings){$.extend(config, settings);}
 
        return this.each(function(){
            $(this).css('background-color', config.color)
            		.css('margin',config.margin)
            		.css('width',config.width);
            if (config.fields.length === 0) {
            	console.log('Es vacio');
            }
            else{
            	console.log('Is full');

            	var fields = config.fields;
            	fields.forEach(function(field, index){
            		console.log(index);
            		$result.append($("<div>").addClass(JS_DIV_QUESTION)
            			.append($("<label>").text(field.question).addClass(JS_LABEL_CLASS)));
            		
            		

            		if(field.type === "open"){
            			$result.append($("<input>").text(field.question)
            				.attr("name","".concat(JS_INPUT_NAME,index))
            				.addClass(JS_INPUT_CLASS));
            		}
            		else if (field.type === "boolean") {
            			$result.append($("<input>").attr("type","radio")
            				.attr("name","".concat(JS_INPUT_NAME,index))
            				.attr("id","".concat(JS_INPUT_NAME,index)));

            			$result.append($("<label>")
            				.text(CHECKBOX_TRUE_VALUE));

            			$result.append($("<input>").attr("type","radio")
            				.attr("name","".concat(JS_INPUT_NAME,index))
            				.attr("id","".concat(JS_INPUT_NAME,index)));

            			$result.append($("<label>")
            				.text(CHECKBOX_FALSE_VALUE));
            		}
            	});
            };

            $result.append($("<input>").attr("type","submit").addClass(JS_SUBMIT_CLASS)
            	.text("Enviar"));


            $(this).append($result);
        });
    };
})(jQuery);