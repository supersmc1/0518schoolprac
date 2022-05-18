const time = new Date()
console.dir(time.Hours())

function seven(hour,msg){
  if(hour > 12){
    console.log(msg + (hour*7) + "입니다")
  }else{
    console.log("총시간 :" + hour)
  }
}

seven(time.getHours(1),"헤헤헤헤")