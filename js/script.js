$(function(){
  $('.tab_name li a').on('click',function(){
//タブのアクティブ
    $('.tab_name li').removeClass('active');
    var index = $(this).parent('li').index();
    $('.tab_name li').eq(index).addClass('active');
//映像の切り替え
$('.content_box li a img').removeClass('active');
   $('.content_box li').each(function(){
    $(this).find('img').eq(index).addClass('active')
   });

  });
});