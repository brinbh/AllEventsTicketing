function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];
	   if (listA === null || listB === null){
	   	return null;
	   }
	   for (var i = 0; i < listA.length; i++){
	   	var nextValue = listA[i];
	   		for (var j = 0; j < listB.length; j++){
	   			if (listB[j] === nextValue){
	   				resultList.push(listB[j]);
	   				break;
				}
		   }
	   }
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];
       if (listA === null || listB === null){
       	return null;
	   }
	   for (var i = 0; i < listA.length; i++){
       	//start counter for List B
		   //var counter = 0;
       	var nextValueA = listA[i];
       	for(var j = 0; j < listB.length; j++){
       			//counter++;
       			//Add the first time through list A
       			//if (counter == 1){
       				//resultList.push(nextValueA);
                //}
                //Go through List B that isn't in List A
				if(nextValueA !== listB[j]){
       				resultList.push(listB[j]);
       				break;
				}
		}
	   }
	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   	   
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/

	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}	
	

}
