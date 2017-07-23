$(function(){

function slider(el){
  this.$root =$(el);
  this.$mv_bg = this.$root.find('.mv_bg');
  this.$prev = this.$root.find('.prev');
  this.$next = this.$root.find('.next');
  this.$bg_box= this.$root.find('.bg_box');
  this.current_index = 0;
  this.handleEvent();
  this.nextInterval();
}

slider.prototype.nextInterval = function(){
  var self = this;
  setInterval(function(){ self.nextMove() }, 3000);
}

slider.prototype.handleEvent = function(){
  var self = this;

  this.$next.on('click', function(){
  self.nextMove();
  });

  this.$prev.on('click', function(){
  self.prevMove();
  });
}

slider.prototype.nextMove = function(){
  console.log('success')
    if (this.current_index == 2) {
      this.current_index = 0;
      this.$bg_box.css('right',this.current_index * 100 + '%');
    }else{
         this.current_index++;
         this.$bg_box.css('right',this.current_index * 100 + '%');
      }
}

slider.prototype.prevMove = function(){
    if (this.current_index == 0) {
      this.current_index = 2;
      this.$bg_box.css('right',this.current_index * 100 + '%');
    }else{
         this.current_index--;
         this.$bg_box.css('right',this.current_index * 100 + '%');
      }
}

new slider('.main_visual');
new slider('.add_carousel');
// var slider_parts = {
//   $bg_box:$('.bg_box'),
//   $mv_bg:$('.mv_bg'),
//   $prev :$('.prev'),
//   $next :$('.next'),
//   current_index: 0,
// }


// //次をクリックした
// slider_parts.nextMove = function(){
//     if (slider_parts.current_index == 2) {
//       slider_parts.current_index = 0;
//       slider_parts.$bg_box.css('right',slider_parts.current_index * 100 + '%');
//     }else{
//          slider_parts.current_index++;
//          slider_parts.$bg_box.css('right',slider_parts.current_index * 100 + '%');
//       }
// }

// slider_parts.prevMove = function(){
//     if (slider_parts.current_index == 0) {
//       slider_parts.current_index = 2;
//       slider_parts.$bg_box.css('right',slider_parts.current_index * 100 + '%');
//     }else{
//          slider_parts.current_index--;
//          slider_parts.$bg_box.css('right',slider_parts.current_index * 100 + '%');
//       }
// }

// slider_parts.handleEvent = function() {
//     var self = this;
    
//     this.$next.on('click', function(){
//         self.nextMove();
//     });
    
//     this.$prev.on('click', function(){
//         self.prevMove();
//     });
// }

// slider_parts.handleEvent();

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


