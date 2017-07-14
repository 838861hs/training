$(function(){
  var $mv_bg =$('.mv_bg'),
  current_index = 0;

  $mv_bg.each(function(i){
    $(this).css({left: 100 *  i + '%'});
  });

function goNext(index){
  $('.bg_box').animate({left: -100 * index + '%'})
}


$('.next').on('click',function(){
  if (current_index == 2) {
    current_index = 0;
    goNext(current_index)
  }else{
    current_index++;
    goNext(current_index)
  }
  console.log(current_index);
});


$('.prev').on('click',function(){
  if (current_index == 0) {
    current_index = 2;
    goNext(current_index);
  }else{
    current_index--;
    goNext(current_index);
  }
  console.log(current_index)
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