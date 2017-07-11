$(function(){

  $(window).scroll(function(){
    var top = $(this).scrollTop();
    console.log(top);


function hide_header(){
  if (100 < top ) {
    $('header').stop().css('top','-100%');
  }else{
    $('header').stop().css('top','0');
  }
}

function show_header(){
  if (400 < top) {
    $('header').stop().css('position','fixed');
    $('header').stop().css('top','0');
  }else{
    $('header').stop().css('position','-100%');
    hide_header();
  }
}

show_header()
  });



});

