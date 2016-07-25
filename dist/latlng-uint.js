'use strict';
function latlng2uint(latlng, precision){
	var coordinates = [];
	function int2uint(number, precision){
        precision = Math.pow(2, precision) - 1;
        return number & precision;
    }
	coordinates[0] = int2uint((latlng[0] / 90) * (Math.pow(2,precision[0]-1)-1),precision[0]);
	coordinates[1] = int2uint((-(latlng[1] + 180) / 180) * (Math.pow(2,precision[1]-1)-1),precision[1]);

	return coordinates;	
}

function uint2latlng(coordinate, precision){
	var latlng = [];
	function uint2int(uint, precision){
		uint <<= 32 - precision;
    	uint >>= 32 - precision;
    	return uint;
	}
	latlng[0] = uint2int(coordinate[0],precision[0])/ (Math.pow(2,precision[0]-1)-1) * 90;
	latlng[1] = -180 - (uint2int(coordinate[1],precision[1])/ (Math.pow(2,precision[1]-1)-1) * 180);
	
	return latlng;
}