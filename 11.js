var dic1={1:10, 2:20};
var dic2={3:30,2:40};
var dic3={5:50,6:60};
for (key1 in dic1){
    for (key2 in dic2){
        if (key1!=key2){
            dic3[key1]=dic1[key1];
            dic3[key2]=dic2[key2];
        }
        else{
            dic3[key1]=dic1[key1]+dic2[key2];
            break
        }
    }
}
console.log(dic3);