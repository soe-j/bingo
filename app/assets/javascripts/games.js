$(document).ready(function(){
  setInterval(function(){
    $.getJSON(location.href + '.json', set_balls);
  }, 2000);

  function set_balls(new_balls){

    // ローカルストレージから古いデータを取得
    var str = localStorage.getItem("balls");
    old_balls = JSON.parse(str);

    // 比較
    var balls = $.grep(new_balls, function(n,i){
      return ($.inArray(n, old_balls) == -1);
    });

    // 差分だけページに追加
    var content = '';
    var i;
    for(i = 0; i < balls.length; i++) {
      content += "\n<li>" + balls[i] + "</li>";
    }
    $('#numbers_list').append(content);

    // ローカルストレージに保存
    var json_text = JSON.stringify(new_balls);
    localStorage.setItem("balls", json_text);
  }
});