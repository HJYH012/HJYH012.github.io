function displayTime()
{
    var week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var date=new Date(Date.now());
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    month=(month<10?"0":"")+month;
    day=(day<10?"0":"")+day;
    hours=(hours<10?"0":"")+hours;
    minutes=(minutes<10?"0":"")+minutes;
    seconds=(seconds<10?"0":"")+seconds;
    document.getElementById("clock").innerHTML=year+"/"+month+"/"+day+"("+week[date.getDay()]+")"+hours+":"+minutes+":"+seconds;
    setTimeout(displayTime,100);
}
