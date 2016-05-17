function calculate_median(arr) {
  //请勿改动函数名
   var evenArray=[];
  for(var i=1,j=0;i<arr.length;i=i+2,j++){
	  evenArray[j]=arr[i];	     
	  }
  evenArray.sort(); 
  var half=Math.floor((evenArray.length)/2);
  return (evenArray.length)%2==0? (evenArray[half-1]+evenArray[half])/2: evenArray[half];   
}

module.exports = calculate_median;
