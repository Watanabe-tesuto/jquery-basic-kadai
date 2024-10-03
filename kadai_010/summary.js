$(function(){
    $('#change-color').on('click',function(){ // 文字の色が変わる
      $('#target').css('color','red');
    });
    $('#change-text').on('click',function(){  //文字が変わる
      $('#target').text('Hello!');
    });
    $('#fade-out').on('click',function(){
      $('#target').fadeOut(); // フェードアウトで文字が消える
    });
    $('#fade-in').on('click',function(){
      $('#target').fadeIn(); // フェードインで文字が現れる
    });
  });
  