$(function(){
  if ($('body').data('controller') == 'games' && $('body').data('action') == 'show'){

    setInterval(function(){
      $.getJSON(location.href + '.json', check_balls);
    }, 1000);

    function check_balls(new_balls){
      // ローカルストレージから古いデータを取得
      var str = localStorage.getItem("balls");
      old_balls = JSON.parse(str);

      // 比較
      var balls = $.grep(new_balls, function(n,i){
        return ($.inArray(n, old_balls) == -1);
      });

      if (balls.length != 0) {
        console.log(balls);
        set_balls(balls);

        // ローカルストレージに保存
        var json_text = JSON.stringify(new_balls);
        localStorage.setItem("balls", json_text);
      }
    }

    function set_balls(balls){
      // 出た目をでっかく表示
      var content = '';
      var i;
      for(i = 0; i < balls.length; i++) {
        content += "\n<img src='/assets/machi_numbers/" + balls[i] + ".png'>";
      }

      $('#just_number_wrap').append(content).animate({opacity: "1"}, 'fast').delay(10000).animate({opacity: "0"}, 'fast');

      // リストに追加
      var content = '';
      var i;
      for(i = 0; i < balls.length; i++) {
        content += "\n<img src='/assets/numbers/" + balls[i] + ".png'>";
      }
      setTimeout(function(){
        $('#numbers_list').append(content);
      }, 11000);
    }

    // #spare_handleクリックでビンゴ更新
    $("#spare_handle").click(function(){
      $.ajax({
        type: "PATCH",
        url: location.href
      });
    });

  }
});
