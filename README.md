<html><head>
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

</head>
<style>
A:link {COLOR: #2c2e61; TEXT-DECORATION: none}
A:hover {COLOR: #ff6600; TEXT-DECORATION: underline}
A:active {COLOR: #ff3300; TEXT-DECORATION: none}
A {COLOR: #3333ff; TEXT-DECORATION: none}
A:visited {TEXT-DECORATION: none}
body {background-image: url("index_a.jpg");}
</style>
<body>
<table width=100%><tr><td width=300px align="center"><font size=5>BLOG</font></td><td> </td><td id='clock' align="right" width=300px></td></tr>
<tr><td><hr style="border:1px solid blue;"></td><td><script>displayTime();</script></td><td><hr></td></tr></table>

<script>
function xx(str1){
   var e=str1.split(",");
   for (var i=0;i<e.length;i++){
       var f=e[i].split("|");
       document.write("<a href='"+f[0]+"' target=_blank>"+f[1]+"</a>&nbsp;&nbsp;"); 
   } 
}
function xx1(str1){
   var e=str1.split(",");
   document.write("<table width=98%>");
   var h=parseInt((e.length+1)/2);
   for (var i=0;i<h;i++){
       var f=e[i].split("|");
       var d="<tr><td><a href='"+f[0]+"' target=_blank>"+(i+1)+"、"+f[1]+"</a>&nbsp;&nbsp;</td>";
       if (i+h>=e.length) {
          d=d+"<td></td>"; 
       }else {
          var f=e[i+h].split("|");
          d=d+"<td><a href='"+f[0]+"' target=_blank>"+(i+h+1)+"、"+f[1]+"</a>&nbsp;&nbsp;</td>";
       }
       document.write(d+"</tr>");
   }
   document.write("</table>");    
}
</script>
</td></tr></table></div>
</body>
</html>

## blog
