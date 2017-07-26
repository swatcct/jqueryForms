function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
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
			'action':'.',
			'method':'POST',
			'id':'',
            'color': '#eee',
            'width': '50%',
            'margin': '70px auto',
            'fields': []
        };
        if (settings){ $.extend(config, settings); }
		
        return this.each(function(){
            $(this).css('background-color', config.color)
            		.css('margin',config.margin)
					.css('width',config.width);
			$result.attr('action',config.action);
			$result.attr('method',config.method);
			var frmId = config.id;
			if( config.id == '' || config.id == undefined  ){
				frmId = 'jsfrm'.concat(makeid());
			}
			$result.attr('name',frmId);			
			$result.attr('id',frmId);
            if (config.fields.length !== 0) {
            	var fields = config.fields;
            	fields.forEach(function(field, index){
            		$result.append($("<div>").addClass(JS_DIV_QUESTION)
            			.append($("<label>").text(field.question).addClass(JS_LABEL_CLASS).attr('for',"".concat(JS_INPUT_NAME,index))));

            		if(field.type === "open"){
            			$result.append($("<input>")
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
			$result.append("<br />");	
            $result.append($("<input>").attr("type","submit").addClass(JS_SUBMIT_CLASS)
            	.text("Enviar"));


            $(this).append($result);
        });
    };
})(jQuery);