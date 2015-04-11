$(function(){
  window.addEventListener('devicemotion', function (e) {
    var x = e.accelerationIncludingGravity.x;
    var y = e.accelerationIncludingGravity.y;
    var z = e.accelerationIncludingGravity.z;

    // 3方向加速度の合計の絶対値が一定以上のとき
    if (Math.abs(x+y+z) > 49) {
      alert("振ってるよ");
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
    }
  }, true);
});