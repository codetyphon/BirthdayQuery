var myDate = new Date();
myDate.getYear();        //获取当前年份(2位)
myDate.getFullYear();    //获取完整的年份(4位,1970-????)
myDate.getMonth();       //获取当前月份(0-11,0代表1月)
myDate.getDate();        //获取当前日(1-31)
myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours();       //获取当前小时数(0-23)
myDate.getMinutes();     //获取当前分钟数(0-59)
myDate.getSeconds();     //获取当前秒数(0-59)
myDate.getMilliseconds();    //获取当前毫秒数(0-999)
myDate.toLocaleDateString();     //获取当前日期
var mytime=myDate.toLocaleTimeString();     //获取当前时间
myDate.toLocaleString( );        //获取日期与时间
window.onload=function(){
	
	thisM.innerHTML='';
	thisD.innerHTML='';

	var this_m=myDate.getMonth()+1;
	var this_d=myDate.getDate();
	

	title_m.innerHTML=this_m;
	title_d.innerHTML=this_d;

	console.log(users);
	for(var i=0;i<users.length;i++){
		var user=users[i];
		if(user.d===this_d){
			var li=document.createElement('li');
			li.innerHTML=user.n;
			li.title=''+user.m+'-'+user.d;
			thisD.appendChild(li);
		}
		if(user.m===this_m){
			var li=document.createElement('li');
			li.innerHTML=user.n;
			li.title=''+user.m+'-'+user.d;
			thisM.appendChild(li);
		}
	}
}