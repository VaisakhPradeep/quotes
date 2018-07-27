function readURL(event){	
	var getImagePath = URL.createObjectURL(event.target.files[0]);
	$('.preview-container').css('background-image', 'url(' + getImagePath + ')');
	$(".custom-file-upload").css('opacity',0);
	$(".confirmation").show();
	$(".overlay").show();
}	


$(document).ready(function(){

	$(".confirmation").hide();
	$(".overlay").hide();
	$(".text-preview").hide();
	$(".download").hide();

	$("#check").click(function(){
		$(".confirmation").remove();
		$(".custom-file-upload").remove();
		$(".overlay").hide();
	})

	$("#cross").click(function(){
		$(".confirmation").hide();
		$(".overlay").hide();
		var noImage = "";
		$('.preview-container').css('background-image', 'url(' + noImage + ')');
		$(".custom-file-upload").css('opacity',1);
	})

	$(".function").click(function(){
		$(".function").removeClass("active");
		$(this).addClass("active");
	})

	$(".colour").click(function(){
		$(".overlay").show();
		if($(this).hasClass("active")){
			$(".colour-slider").removeClass("hidden");
			$(".opacity-slider").addClass("hidden");
			$(".font-colour-slider").addClass("hidden");
		}
	})

	$(".opacity").click(function(){
		if($(this).hasClass("active")){
			$(".colour-slider").addClass("hidden");
			$(".opacity-slider").removeClass("hidden");
			$(".font-colour-slider").addClass("hidden");
		}
	})

	$(".text").click(function(){
		$(".text-preview").show();
		$(".download").show();
		if($(this).hasClass("active")){
			$(".colour-slider").addClass("hidden");
			$(".opacity-slider").addClass("hidden");
			$(".font-colour-slider").removeClass("hidden");
		}
	})

	$(".black").click(function(){
		$("#colour").css("background","black");
	})

	$(".white").click(function(){
		$("#preview-text").css("color","white");
	})



	var hsl1 = 0;
	var hsl2 = 60;
	var opacityValue = 50;

	var colourslider = $("#colouredSlider");
	colourslider.slider({
	  max: 360,
	  slide: setColour,
	  change: setColour
	});

	var opacityslider = $("#opacitySlider");
	opacityslider.slider({
		max: 100,
		value: 50,
		slide: setOpacity,
		change: setOpacity
	});

	var textslider = $("#textSlider");
	textslider.slider({
	  max: 360,
	  slide: setTextColour,
	  change: setTextColour
	});

	function setColour() {
  		hsl1 = colourslider.slider("option", "value");  		
	    $('#colour').css('background', "hsl(" + hsl1 + ", 100%, " + 30 + "%)");	    
	    $("#colouredSlider .ui-state-default").css("background-color", "hsl(" + hsl1 + ", 100%, 50%)");
	}

	function setOpacity(){
		opacityValue = (opacityslider.slider("option", "value"))/100;
		$("#colour").css("opacity", opacityValue);
	}

	function setTextColour(){
		hsl2 = textslider.slider("option", "value");
		$("#preview-text").css("color","hsl(" + hsl2 + ", 100%, " + 60 + "%)");
	}




/*$(".download").click(function() { 
        html2canvas($(".preview-container")[0], {
            onrendered: function(canvas) {

            	if (navigator.userAgent.indexOf("MSIE ") > 0 || 
					navigator.userAgent.match(/Trident.*rv\:11\./)) 
					{
			      		var blob = canvas.msToBlob();
			        	window.navigator.msSaveBlob(blob,'Test file.png');
			      	}
			     	else {
				        $('#test').attr('href', canvas.toDataURL("image/png"));
				        $('#test').attr('download','Test file.png');
				        //$('#test')[0].click();
				        console.log($('#test'));
				        $('#test')[0].trigger("click");
			      	}
            }
        });
    });*/


$(".download").click(function(){
	$(this).hide();
	$(".text-preview").hide();
	html2canvas($(".preview-container")[0]).then(function(canvas) {
		if (navigator.userAgent.indexOf("MSIE ") > 0 || 
					navigator.userAgent.match(/Trident.*rv\:11\./)) 
					{
			      		var blob = canvas.msToBlob();
			        	window.navigator.msSaveBlob(blob,'Test file.png');
			      	}
			     	else {
				        $('#test').attr('href', canvas.toDataURL("image/png"));
				        $('#test').attr('download','Background.png');
				        $('#test')[0].click();
			      	}

	});
	$('.colour')[0].click();
})





})


