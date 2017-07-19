$(function(){
var slider_parts = {
  $bg_box:$('.bg_box'),
  $mv_bg:$('.mv_bg'),
  $prev :$('.prev'),
  $next :$('.next'),
  current_index: 0,
}


//次をクリックした
slider_parts.nextMove = function(){
    if (slider_parts.current_index == 2) {
      slider_parts.current_index = 0;
      slider_parts.$bg_box.css('right',slider_parts.current_index * 100 + '%');
    }else{
         slider_parts.current_index++;
         slider_parts.$bg_box.css('right',slider_parts.current_index * 100 + '%');
      }
}

slider_parts.prevMove = function(){
    if (slider_parts.current_index == 0) {
      slider_parts.current_index = 2;
      slider_parts.$bg_box.css('right',slider_parts.current_index * 100 + '%');
    }else{
         slider_parts.current_index--;
         slider_parts.$bg_box.css('right',slider_parts.current_index * 100 + '%');
      }
}

slider_parts.handleEvent = function() {
    var self = this;
    
    this.$next.on('click', function(){
        self.nextMove();
    });
    
    this.$prev.on('click', function(){
        self.prevMove();
    });
}

slider_parts.handleEvent();

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