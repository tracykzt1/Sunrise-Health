//弹出
$(document).ready(function($){

	$('.choose').click(function(){
		$('.theme-mask').show();
		$('.theme-mask').height($(document).height());
		$('.popover1').slideDown(200);
	})
	$('.close').click(function(){
		$('.theme-mask').hide();
		$('.popover1').slideUp(200);
		
	})
	
	
	$('.kefu').click(function(){
		$('.theme-mask').show();
		$('.theme-mask').height($(document).height());
		$('.popover2').slideDown(200);
	})
	$('.popover2 .close').click(function(){
		$('.theme-mask').hide();
		$('.popover2').slideUp(200);
		
	})
	
})
 


//返回顶部
jQuery(function(){
  jQuery(".fixedBox ul.fixedBoxList li.fixeBoxLi").hover(
	function (){
	  jQuery(this).find('span.fixeBoxSpan').addClass("hover");
	  jQuery(this).addClass("hover");
	},
	function () {
	 jQuery(this).find('span.fixeBoxSpan').removeClass("hover");
	  jQuery(this).removeClass("hover");
	}
  );
  jQuery('.BackToTop').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
  var oDate=new Date();
  var iHour=oDate.getHours();
  if(iHour>8 && iHour<22){
    jQuery(".Service").addClass("startWork");
    jQuery(".Service").removeClass("Commuting");
  }else{
    jQuery(".Service").addClass("Commuting");
    jQuery(".Service").removeClass("startWork");
  };
});

jQuery(function(){
  jQuery('.listLeftMenu dl dt').click(function(){
    var but_list=jQuery(this).attr('rel');
    if(but_list=='off'){
      jQuery(this).attr('rel','on');
	  jQuery('.listLeftMenu dl').removeClass('off');
	  jQuery(this).parent().addClass('on');
    }else{
      jQuery(this).attr('rel','off');
	  jQuery(this).parent().removeClass('on');
	  jQuery(this).parent().addClass('off');
    }
  });
}); 
