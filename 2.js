function primeCompositeNumber(){
	let num = + prompt ("Введите число от 2 до 1000");
	if (num <2){
	  console.log ("ни простое ни составное");
	} else {
    	if ((num>2 && num< 1000) && num %2 === 0){
	      console.log ("сложное число");
	    } else if (num >1000) {
	      console.log ("данные неверны");
	    }else{
	    	console.log ("простое число");
	    }
  	} 
}
primeCompositeNumber();