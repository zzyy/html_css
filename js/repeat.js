/**
 * @author P0025898
 */

function repeat(arr){
	var arrStr=arr.join();
	var reg=/^(\w+),.+\1|^,(\w+),.+\1/;
	var repeatArr=[];
	var res;
	while((res=arrStr.match(reg)) !== null){
		var repeatStr = res[1]||res[2];
		repeatArr[repeatArr.length]=repeatStr;
		arrStr=arrStr.replace(new RegExp(repeatStr,'g'),"");
	}
	return repeatArr;
}

function repeat2(arr){
	var repeatObj={};
	var repeatArr=[];
	for(i in arr){
		repeatObj[arr[i]]= repeatObj[arr[i]]===0?++repeatObj[arr[i]]:0;
	}
	for(i in repeatObj){
		if(repeatObj[i]){
			repeatArr[repeatArr.length]=i;
		}
	}
	return repeatArr;
}