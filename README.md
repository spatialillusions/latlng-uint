# latlng-uint
Functions for converting Latitude/Longitude to/from a unsigned integer with a specified precision.

## Introduction

This library is for reading/writing LatLngs to numbers representing them as unsigned integers with a specific precision. In this way LatLngs can be stored as binary using as few bits as possible.

This way of storing LatLngs is described by **National Geospatial-Intelligence Agency (NGA)** in the document called **Time-Space-Position Information (TSPI)** NGA.STND.0019_2.0.

Unsigned integer representations of LatLngs are used with several different precisions in Variable Message Format (VMF) and this library can be used together with my [VMF library](https://github.com/spatialillusions/vmf-parser). 

## Usage

### latlng2uint(latlng, precision)
Takes as input an array representing a latlng in decimal degrees format, and an array representing the desired precision. Returns an array representing the coordinate tuple.

`latlng2uint([53.80999655961908,-2.0999982476232333], [23, 24])`

returns

`[2507727,8486476]`

### uint2latlng(coordinate, precision)
Takes as input a coordinate tuple with the coordinates as unsigned integers, and an array representing the precision of the integers. Returns an array representing the coordinate as latlng in decimal degrees.

`uint2latlng([2507727, 8486476], [23, 24])`

returns

`[53.80999655961908,-2.0999982476232333]`

## License and Contact
The library is developed by Måns Beckman, www.spatialillusions.com, and is provided under a MIT License.
