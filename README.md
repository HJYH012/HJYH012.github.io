## blog

<script>
function displayTime() {
  var wk=['日','一','二','三','四','五','六'];
  var date=new Date(Date.now()-tt1);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var year = date.getFullYear();
  var month=date.getMonth()+1;
  var day=date.getDate();
  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  document.getElementById("clock").innerHTML=year+"年"+month+"月"+day+"日(星期"+wk[date.getDay()]+")　"+hours + ":" + minutes + ":" + seconds+"&nbsp;&nbsp;";
  setTimeout(displayTime, 1000);
}
var tt1=1000*1731806149;
tt1=Date.now()-tt1;
</script>
<style>
A:link {COLOR: #2c2e61; TEXT-DECORATION: none}
A:hover {COLOR: #ff6600; TEXT-DECORATION: underline}
A:active {COLOR: #ff3300; TEXT-DECORATION: none}
A {COLOR: #3333ff; TEXT-DECORATION: none}
A:visited {TEXT-DECORATION: none}
body {background-image: url("index_a.jpg");}
</style>
