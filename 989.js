var addToArrayForm = function(num,k) {
   let a=num.length;
   var cur=k;
   var array=new Array();
   let i=0;
   while(--a>=0|| cur>0){
    if(a>=0){cur=cur+num[a];}
    
    array[i]=cur%10;
    cur=parseInt(cur/10);

   }
   return(array.reverse());
  };

  var test=function(nums,target){
    let array=Array();
   for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target){
             array[0]=i;
             array[1]=j;
             
        }
    }
   }return array;
  }
  


