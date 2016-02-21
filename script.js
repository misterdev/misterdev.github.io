  $(document).ready(function() {
    $("#prompt").lettering();
    $("#prompt").children("span").each(function(i) {
    	var x = $(this);
    	var d = i * 100;
    	if($(this).text() !== '_') {
			setTimeout(function(){x.show()}, 2000+d);
    	} else {
    		d += 1000;
    		setTimeout(function(){$("#prompt").append('<br />');}, 2000+d);
    		setTimeout(function() {
    			$('#open').hide();
    			$('#wrapper').show();
    		}, 2000+d+500);
    	}
    });
  });