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
  $('.tab_name li a').on('click',function(){
//タブのアクティブ
    $('.tab_name li').removeClass('active');
    var index = $(this).parent('li').index();
    $('.tab_name li').eq(index).addClass('active');
//映像の切り替え
  var current_id = $(this).parent('li').attr('id');
  console.log(current_id);
  $('.photo_content').removeClass('active');
  $('.'+current_id).addClass('active');
  });
});
