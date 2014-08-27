$(document).ready(function(){
	$('table').hide();
	var dat = new Date();
	var mon=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	$('li').each( function(){
		$(this).text(mon[dat.getMonth()]+' '+(dat.getDate()<10? "0":"")+dat.getDate()); 
		dat.setDate(dat.getDate() + 1);
	});	
	$('#details p').hide();
	$( "li" ).mouseenter(
  function() {
  		 $(this).attr('class','mousehover');
  		$(this).attr("title",$("table").eq($(this).index()).find('tr').length-1 +" Flights");
		});
	$( "li" ).mouseleave(
  function() {
  		
 $(this).attr('class','none');
		});
var clicks=0;
$('li').click(function(){
			var obj=this;
			if(clicks===0)
			{		
			clicks=1;	
			
			$('#details p').text(" Loading "+$(obj).text()+".......");
			$('table').hide();
			$('li').attr('id','none');
  				$(obj).attr('id','highlight');
  			$(function(){
  			 function show_popup(){
			 
    		  $('#details p').slideUp("fast");
			  $('table').hide();    		  
    		  $("table").eq($(obj).index()).slideDown("slow");
    		  $().minimumCost(obj);
  		 		clicks=0;
  			 };
  			 $('#details p').show();
 			  window.setTimeout( show_popup, 3000 );
 			  
			});
  		  
		 
			}
			});
			
		$(function() {
    $(document).tooltip({
    	   position: {
      	my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  });
});


(function($) {
 $.fn.minimumCost = function(obj) {
  				var items=[];
  		  $("table").eq($(obj).index()).find('tr td:nth-child(5)').each( function(){
 		  	  items.push( parseInt($(this).text().replace("$","0")) );       
		});
  			var check=Math.min.apply(Math,items);
  			$("table").eq($(obj).index()).find('tr td:nth-child(5)').each( function(){
 		  	  if(check ===parseInt($(this).text().replace("$","0")))
 		  	  {
 		  	  		$(this).html("<span>"+$(this).text()+"</span>")
 		  	  		$(this).find('span').css( {"background-color":"#ff9999","border-radius":"20px","padding":"3px 20px"} );
 		  	  	}       
		});
};
})(jQuery);

