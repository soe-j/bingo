$(function(){
  if ($('body').data('controller') == 'games' && $('body').data('action') == 'handle'){

    var update_flag = 1;

    window.addEventListener('devicemotion', function (e) {
      var x = e.accelerationIncludingGravity.x;
      var y = e.accelerationIncludingGravity.y;
      var z = e.accelerationIncludingGravity.z;

      // 3方向加速度の合計の絶対値が一定以上のとき
      if (Math.abs(x+y+z) > 48) {
        trig();
      }
    }, true);

    $('#handle').click(function(){
      trig();
    });

    function trig() {
      if (update_flag == 1) {
        update_flag = 0;
        machi_go();
        setTimeout(function(){
          update_bingo();
        }, 1000);
        setTimeout(function(){
          update_flag = 1;
          machi_standby();
        }, 11000);
      }
    }

    function update_bingo() {
      var current_url = location.href;
      var target_url = current_url.replace('handle','');
      $.ajax({
        type: "PATCH",
        url: target_url,
        async: false
      });
    }

    function machi_go(){
      $("#machi_handle").animate(
        {bottom: "1000px", opacity: "0"}, 1000
      );
    }

    function machi_standby(){
      $("#machi_handle").animate(
        {bottom: "-250px"}, 0
      ).animate(
        {opacity: "1"}, 1000
      );
    }

  }
});
