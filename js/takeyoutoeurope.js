$(document).ready(function(){
    $('.navbarOne').hide();
    $('.navbarTwo').hide();
    $('.navbarThree').hide();
    $('.express').hide();
    $(window).scroll(function(){
    	
    	if($(this).scrollTop() < 1006){
	        if($(this).scrollTop() > 123 && $(this).scrollTop() < 923) {
	            $('.logoOne').hide();
	            $('.myWordOnePos').hide();
	            $('.navbarOne').show();
	            $('.express').fadeIn();
	            var expressHeightOne;
	            for(var i = 0; i < 12; i++){
	                expressHeightOne = 420 + 28 * i;
	                if($(this).scrollTop() > expressHeightOne) {
	                    $('.p'+i).hide();
	                }else{
	                    $('.p'+i).fadeIn();
	                }
	            }  
	        }else{
	            $('.navbarOne').hide();
	            $('.express').hide();        	
	            $('.logoOne').show();
	        } 
        }else if($(this).scrollTop() > 1006 && $(this).scrollTop() < 2206){
	        if($(this).scrollTop() > 1232 && $(this).scrollTop() < 2136) {
	            $('.navbarTwo').show();
	            $('.express').hide();
	        }else{
	            $('.navbarTwo').hide();   
	            $('.express').hide();    	
        	}
        }else if($(this).scrollTop() >= 2206){
	        if($(this).scrollTop() > 2436 && $(this).scrollTop() < 3336) {
	        	$('.navbarTwo').hide();    
	            $('.navbarThree').show();
	            $('.express').hide();
	        }else{
	            $('.navbarThree').hide();   
	            $('.express').hide();    	
        	}        	
        
        }	        
    });
    $('.imgBtn').hover(
    	function(){
    		$(this).prop('src','img/imgBtnHover.png');
    	},
    	function(){
    		$(this).prop('src','img/imgBtn.png');
    	}
    );
    //$('.countryImg').prepend('<img src="img/rotateIcon.png" class="rotateIcon">');	

});




