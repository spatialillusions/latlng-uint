'use strict';
function latlng2uint(latlng, precision){
	var coordinates = [];
	function int2uint(number, precision){
        if(number<0){
        	return Math.abs(number-1) | Math.pow(2,precision-1);
        }else{
        	return parseInt(number);
        }
    }
	coordinates[0] = int2uint((latlng[0] / 90) * (Math.pow(2,precision[0]-1)),precision[0]);
	coordinates[1] = int2uint((latlng[1] / 180) * (Math.pow(2,precision[1]-1)),precision[1]);

	return coordinates;	
}

function uint2latlng(coordinate, precision){
	var latlng = [];
	function uint2int(number, precision){
		if(number > Math.pow(2,precision-1)){
			return -(number-1) | Math.pow(2,precision-1);
		}else{
			return number;
		}

	}
	latlng[0] = uint2int(coordinate[0],precision[0]) * (90/(Math.pow(2,precision[0]-1)-1));
	latlng[1] = uint2int(coordinate[1],precision[1]) * (180/(Math.pow(2,precision[1]-1)-1));
	
	return latlng;
}