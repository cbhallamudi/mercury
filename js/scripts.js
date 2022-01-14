var close = document.getElementsByClassName("closebtn");
var alerts = document.getElementsByClassName("alert");
var closeBtn, alertDiv;
for (closeBtn = 0; closeBtn < close.length; closeBtn++) {
    close[closeBtn].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

