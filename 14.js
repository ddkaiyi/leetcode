var test= function(strs){
let l=strs.length;
let array=new Array();
let s=new Array();
let arrayfirst=new Array();

for(let i=1;i<=l;i++){array[i-1]=strs[i-1].split("");}

arrayfirst=strs[0].split("");
let con=array[0][0];
for(let j=0;j<arrayfirst.length;j++){
    con=array[0][j];
   
    for(let q=0;q<array.length;q++){
        
        if(con!=array[q][j]) {break;}
     
        if(q==array.length-1){
            s[j]=con;
        }
    
    }    if(s[j]==null){
        break;
    }
    
}
console.log(s.join(''));
return s.join('');


}

var test2=function(string){
    let l=string.length;
let array=new Array();
let s=new Array();
let b="a";
let j=0;
for(let i=1;i<=l;i++){array[i-1]=string[i-1].split("");}
let con=array[0][0];
for(let q=0;q<array.length;){
        
    if(b!=array[q][j]){ console.log('break'); break; }
     q++;
    
    if(q==array.length-1){
        console.log(q)
        s[q]=con;

    }
    




}console.log(s);return s;}


var test3=function(){
    let q=3;
    for(let i=0;i<2;i++){
        if(i=1){ q=2;break;}
    }
    console.log(q);
}