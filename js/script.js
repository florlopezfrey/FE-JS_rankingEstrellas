var body = document.getElementById('body');
var except = document.getElementById('ranking');

body.addEventListener("click", function () {
  var reset = document.getElementsByName("ranking-est");
  for(var i=0;i<reset.length;i++)
  reset[i].checked = false;
}, false);
except.addEventListener("click", function (evento) {
    evento.stopPropagation();
}, false);