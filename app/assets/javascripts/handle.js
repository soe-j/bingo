$(function(){
  if ($('body').data('controller') == 'games' && $('body').data('action') == 'handle'){

    var update_flag = 1;

    window.addEventListener('devicemotion', function (e) {
      var x = e.accelerationIncludingGravity.x;
      var y = e.accelerationIncludingGravity.y;
      var z = e.accelerationIncludingGravity.z;

      // 3方向加速度の合計の絶対値が一定以上のとき
      if (Math.abs(x+y+z) > 48 && update_flag == 1) {
        update_flag = 0;
        update_bingo();
        wait(5000);
        update_flag = 1;
      }
    }, true);

    $('#handle').click(update_bingo);

    function update_bingo() {
      var current_url = location.href;
      var target_url = current_url.replace('handle','');
      $.ajax({
        type: "PATCH",
        url: target_url,
        async: false
      });
    }

    function wait( timeWait ) {
      var timeStart = new Date().getTime();
      var timeNow = new Date().getTime();
      while( timeNow < (timeStart + timeWait ) ) {
        timeNow = new Date().getTime();
      }
      return;
    }

  }
});