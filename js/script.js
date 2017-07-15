$(function(){

  $(window).scroll(function(){
    var top = $(this).scrollTop();

function show_header(){
  if (640 < top) {
    $('header').css('position','fixed');
    $('header').css('top','0');
  }else{
    $('header').css('position','absolute');
  }
}

show_header()
  });



});

