let allalarm=[{}];
let index=0;
let timeBox=document.querySelector('#current-time h1');
setInterval(()=>{
    const currentTime = new Date();
    const hours=currentTime.getHours();
    const minute=currentTime.getMinutes();
    const seconds=currentTime.getSeconds();
    timeBox.innerText=`${hours} : ${minute} : ${seconds}`;
    allalarm.map((time)=>{
      if(time.hours==hours && time.minutes==minute && time.rang==0){
        alert("TIME TO WAKE UP");
        time.rang++;
      }
    });
},1000);

let setbutton=document.querySelector('#set-alarm button');
let timeinput=document.querySelector('#set-alarm input');
let container=document.getElementById('container');
setbutton.addEventListener('click',()=>{
   
    alarm();
})
function alarm(){
    let alarmtime=timeinput.value;
    let hours=alarmtime.split(":")[0];
    let minutes=alarmtime.split(":")[1];
    allalarm.push({id:index+1,hours,minutes,rang:0});
    index++;
    console.log(allalarm);
    let alarmlist=document.createElement('div');
    alarmlist.classList.add('alarm-list');
    let alarmspan=document.createElement('span');
    let alarmbutton=document.createElement('button');
    alarmspan.id=index+"s";
    alarmbutton.id=index+"r";
    console.log(alarmbutton.id);
    alarmbutton.addEventListener('click',(e)=>{
        deletealarm(e.target.id);
    })
    alarmspan.innerText=alarmtime;
    alarmbutton.innerText="Delete";
    alarmlist.append(alarmspan);
    alarmlist.append(alarmbutton);
    container.append(alarmlist);
}

function deletealarm(id){

  let deletesong = id.charAt(0);
  if(deletesong==allalarm.length){
    allalarm.splice(-1,1);
  }
  allalarm.splice(deletesong,1);
  console.log(allalarm);
  document.getElementById(id).remove();
  document.getElementById(deletesong+"s").remove();
  
}