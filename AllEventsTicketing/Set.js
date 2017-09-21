function compare(arrayA, arrayB){
	var results = [];
    for (var i = 0; i < arrayA.length; i++){
        var nextValue = arrayA[i];
        for (var j = 0; j < arrayB.length; j++){
            if (arrayB[j] === nextValue){
                results.push(arrayB[j]);
                break;
            }
        }
    }
    results.sort();
    return results;
}
function relativeComplement(arrayA, arrayB){
    var relListB = arrayB.slice(0);
    for (var j = 0; j < arrayA.length; j++){
        for (var b = 0; b < relListB.length; b++) {
            //resultList.push(listB[b]);
            if (arrayA[j] != relListB[b]) {
                //resultList.push(relListB[b]);
            }
            else {
                //delete relList[b];
                relListB[b] = "";
            }
        }
    }
    return relListB;
}
function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   //check for null values
		var resultList;
	   if (listA === null || listB === null){
	   	return null;
	   }
	   //compare list A to list B
		resultList = compare(listA,listB);
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

        var resultList;

        //check for errors or null values
        if (listA === null || listB === null){
            return null;
        }
        //find intersection values
        var intersectionList = compare(listA,listB);

        listB.sort;
        listA.sort;

        //find relative complement of A
        var relListA = relativeComplement(intersectionList, listA);
        //find relative complement of B
        var relListB = relativeComplement(intersectionList, listB);
        //combine lists
        var relList = relListA.concat(relListB);
        var unionList = relList.concat(intersectionList);
        unionList.sort();
        resultList = unionList.slice(0);

        return resultList;
	}




	this.relativeComplement = function(listA, listB) {

        var resultList;
        //check for errors or null values
        if (listA === null || listB === null){
            return null;
        }
        //find intersection values
        var intersectionList = compare(listA,listB);

		listB.sort;
		//find the relative complement
        var relList = relativeComplement(intersectionList, listB);
        resultList = relList.slice(0);
        return resultList;
	}




	this.symmetricDifference = function(listA, listB) {

	   var resultList;

        //check for errors or null values
        if (listA === null || listB === null){
            return null;
        }
        //find intersection values
        var intersectionList = compare(listA,listB);

        listB.sort;
        listA.sort;

        //find relative complement of A
        var relListA = relativeComplement(intersectionList, listA);
        //find relative complement of B
        var relListB = relativeComplement(intersectionList, listB);
		//combine lists
        var relList = relListA.concat(relListB);
        resultList = relList.slice(0);
       
	   return resultList;
	}	
	

}
