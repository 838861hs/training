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








});