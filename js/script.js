$(function(){
  $('.tab_name li a').on('click',function(){
//タブのアクティブ
    $('.tab_name li').removeClass('active');
    var index = $(this).parent('li').index();
    $('.tab_name li').eq(index).addClass('active');


//写真の変更
    if(index == 0){
      $('.content_box li a img').attr({src:'img/sf.jpg'})
    }else if(index == 1){
      $('.content_box li a img').attr({src:'img/action.jpg'})
    }else if(index == 2){
      $('.content_box li a img').attr({src:'img/sf.jpg'})
    }else if(index == 3){
      $('.content_box li a img').attr({src:'img/romance.jpg'})
    }else if(index == 4){
      $('.content_box li a img').attr({src:'img/comedy.jpg'})
    }
});
});