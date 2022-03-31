var mainString="My name is kumar, and my friend’s name is Dhamu"
var string= mainString.split(" ")
var c=0
for(var i=0;i<string.length;i++){
  if (string[i]=="is"){
    c++
  }
}
console.log("The substring is there", c ,"times in main string")



