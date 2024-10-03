$(function(){
    // ボタンがクリックされたら
    $('.btn').on('click', function(){
      // テキストボックスの値を「クリックしました！」に設定
      $('.text-box').val('クリックしました!');
      // コンソールに出力
      console.log($('.text-box').val());
    });
  });