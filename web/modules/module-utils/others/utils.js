function StringUtils() {
}

StringUtils.isNlOrUndOrEmpty = function (str) {
	return Boolean(str == null || str == undefined || str == "");
};

/**
 * 两种调用方式
 * var template1="我是{0}，今年{1}了";
 * var template2="我是{name}，今年{age}了";
 * var result1=template1.format("loogn",22);
 * var result2=template2.format({name:"loogn",age:22});
 * @param args
 * @returns {String}
 */
String.prototype.format = function (args) {
	var self = this;
	var reg;
	if (args != undefined) {
		if (typeof (args) == "object") {
			for (var key in args) {
				if (args[key] != undefined) {
					reg = new RegExp("({" + key + "})", "g");
					self = self.replace(reg, args[key]);
				}
			}
		} else {
			for (var i = 0; i < args.length; i++) {
				if (args[i] != undefined) {
					//var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
					reg = new RegExp("({)" + i + "(})", "g");
					self = self.replace(reg, args[i]);
				}
			}
		}
	}
	return self;
};

String.prototype.startWith = function (str) {
	var reg = new RegExp("^" + str);
	return reg.test(this);
};

String.prototype.endWith = function (str) {
	var reg = new RegExp(str + "$");
	return reg.test(this);
};

// Array.prototype.addArray = function (array) {
//     for (var i = 0; i < array.length; i++) {
//         this.push(array[i]);
//     }
// };

Array.isNotEmpty = function (array) {
	return Boolean(array != null && array != undefined && array.length > 0);
};

Function.prototype.getName = function () {
	return this.name || this.toString().match(/function\s*([^(]*)\(/)[1];
};

String.prototype.trim = function () {
	return this.replace(/(^\s*)|(\s*$)/g, '');
};

Array.forEach = function (array, fn) {
	if (Array.isArray(array)) {
		for (var i = 0; i < array.length; i++) {
			var rv = fn(array[i], i);
			if (rv != undefined) {
				return rv;
			}
		}
	}
};

// Array.prototype.remove = function (index) {
//     if (isNaN(index) || index > this.length) {
//         return false;
//     }
//     this.splice(index, 1);
// };

var NumberUtil = {};

/**
 * 验证是否为数字
 * @param val
 * @returns {boolean}
 */
NumberUtil.isNumber = function (val) {
	if (!isNaN(val)) {
		return true;
	} else {
		return false;
	}
}

function DateUtils() {
}
/**
 * 验证是否为数字
 * @param date
 * @returns {Array}
 */
DateUtils.getWeek = function (date) {
	date = new Date(date);
	var weeks = [];
	var day = date.getDay();
	var sunday = date.getTime() - day * 24 * 3600 * 1000;
	for (var i = 0; i < 7; i++) {
		day = sunday + i * 24 * 3600 * 1000;
		weeks.push(day);
	}
	return weeks;
}

