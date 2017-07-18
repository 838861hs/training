$(function(){
//headerの変数と関数
var $header = $('header');

  function show_header(i){
    if (640 < i){
      $header.css('position','fixed');
      $header.css('top','0');
    }else{
      $header.css('position','absolute');
    }
  }
//スクロール量での分岐
$(window).scroll(function(){
  var top = $(this).scrollTop();
  show_header(top);
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
