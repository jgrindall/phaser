
define(function(require, exports){
	
	"use strict";
	
	var Utils = function(){
		
	};
	
	Utils.extends = function(SubClass, SuperClass){
		var F = function(){
		
		};
		F.prototype = new SuperClass.prototype;
		SubClass.prototype = new F();
		SubClass.prototype.constructor = SubClass;
	};
	
	return Utils;
	
});

