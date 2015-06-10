// what are the 2 functions we need?
// merge and sort

//
merge (leftArr, rightArr){
	var leftArrIndex = 0;
	var rightArrIndex = 0;
	var resultArr = [];
	loop (leftArrIndex < leftArr.length || rightArrIndex < rightArr.length) {
		if (leftArr[leftArrIndex] <= rightArr[rightArrIndex]){
			resultArr.push(left[leftArrIndex]);
			leftArrIndex++;
		}
		else  (leftArr[leftArrIndex] > rightArr[rightArrIndex]){
			resultArr.push(left[rightArrIndex]);
			rightArrIndex++;
		}
		
	}
}

we also want to check that the length of the arrays are one, 
if they are one, then skip to the pushing 
check before running the if & else statements above
	
4 cases we need to check in total
	
// this goes above the other two conditions
	if (leftArrIndex === leftArr.length){
		resultArr.push(rightArr[rightIndex]);
		rightArrIndex++;
	}