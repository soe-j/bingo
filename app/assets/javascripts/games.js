$(document).ready(function(){
  setInterval(function(){
    $.getJSON(location.href + '.json', display);
    // $('#numbers_board').load(location.href + '.json')
    function display(obj){
      balls = obj["balls"];
      content = '';
      var i;
      for(i = 0; i < balls.length; i++) {
        content += '<li>' + balls[i].number + '</li>';
      }
      $('#numbers_list').html(content);
    }
  }, 2000);
});