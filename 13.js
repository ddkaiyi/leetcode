var test=function(s){
var s1=s.split("");
let a=0;
let cur=0;
console.log(s1);
    while(a<s1.length){
        console.log(a)
        switch(s1[a]){
            case("I"):{
            switch(s1[a+1]){
                case("V"):{cur=cur+4;a=a+2; break;}
                case("X"):{cur=cur+9;a=a+2; break;}
                default: {cur=cur+1;a=a+1; console.log("I"+a);break;}
               
            } ;break;
        }
            case("V"):
             {cur=cur+5;a=a+1;console.log(a); break;}
            case("X"):{
             switch(s1[a+1]){
                 case("L"):{cur=cur+40;a=a+2; break;}
                 case("C"):{cur=cur+90;a=a+2; break;}
                 default: {cur=cur+10;a=a+1; break;}
             };break;}
             case("L"):
             {cur=cur+50;a=a+1; break;}
             case("C"):{
             switch(s1[a+1]){
                 case("D"):{cur=cur+400;a=a+2; break;}
                 case("M"):{cur=cur+900;a=a+2; break;}
                 default: {cur=cur+100;a=a+1; break;}
             };break;}
             case("D"):
             {cur=cur+500;a=a+1; break;}
             case("M"):
             {cur=cur+1000;a=a+1; break;}
             default:
                {a=a+1; break; }
          
            }



              

            
    
    }
        // }
        return cur;
}

var test2=function(num1){
    var num=num1.split("");
    let d=0;
    // while(d<2){ switch(num[0]){
    //     case "a":{ 
    //         switch(num[1]){
    //             case "a":{console.log("A"); d=d+1;break;}
    //         }
            
    //         console.log("a"); break;d=d+1}
            
        
        
       
    //     case "b":{console.log("b");break;}
    // }}
   while(d<2){
    switch (num[d]){
        case "a": console.log("A"); d=d+1;break;
        default:break;

    }
   }
    return num;
}