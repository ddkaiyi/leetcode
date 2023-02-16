var test=function(num){
  
let a=1;
var cur=num;
var array=new Array();
let i=0;

let t =true;

//123
if(cur<0){r=false}
else{
while(cur>0){
   
    a=cur%10;
   
    //3
    //2
    //1
    cur=parseInt(cur/10);
    //12
    //1
    //0
    array[i]=a;
    //array[0]=3
    //array[1]=2
    //array[2]=3
//    console.log(a);
    i++;
    }
//123
let l=array.length-1;
for(let j=0;j<parseInt((array.length)/2);j++,l--){
    if(array[j]!=array[l]){
      t=false;
      console.log("i"+l+"j"+j);
     }
}
  
    
} 
   
return t;
  }