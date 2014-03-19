$(document).ready(function(){

	var select = false;

	$("nav a").hover(
  		function() {
  			if($(this).attr("class") == 'selected'){
  				select = true;
  			}
  			else{
  				$(this).addClass("selected");
  			}
  	}, function() {
  			if(select == true){
  				select = false;
  			}
  			else{
  				$(this).removeClass("selected");
  			}
  }
);

});