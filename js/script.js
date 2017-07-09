$(function(){

var load_src = ['img/film1.jpg',
                'img/film2.jpg',
                'img/film3.jpg',
                'img/film4.jpg',
                'img/film5.jpg',
                'img/film6.jpg'
                ]


for (var i = 0;i < 6; i++) {
  var target = $('.content_box li').eq(i).find('img');
  target.attr({src:'img/film' + [i + 1] +'.jpg'})
}





console.log(load_src[0])
  $('.tab_name li a').on('click',function(){
//タブのアクティブ
    $('.tab_name li').removeClass('active');
    var index = $(this).parent('li').index();
    $('.tab_name li').eq(index).addClass('active');
//写真の変更
    if(index == 0){
    for (var i = 0;i < 6; i++) {
      var target = $('.content_box li').eq(i).find('img');
     target.attr({src:'img/film' + [i + 1] +'.jpg'})
    }
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