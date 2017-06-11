function mergeData(data) {
	var constantparam = "{languageColumn:'name_eu'},{'Content-Type':'application/x-www-form-urlencoded'}";
	if (data == undefined || data == null) {
		return data;
	} else {
		return $.extend({}, data, constantparam);
	}
}

function extend(o, n, override) {
	for (var p in n) if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override)) {
		o[p] = n[p];
	}
}


function guidGenerator() {
	function s4() {
		return (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
	}

	return (s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4());
}

function getQueryString(url, name) {
	var paras = url.split("?");
	if (paras.length == 2) {
		paras = paras[1];
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = paras.match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	} else {
		return null;
	}

}

/**
 * @return {string}
 */
function replaceEnter(mystr) {
	if (mystr == null || mystr == "") {
		return "";
	} else {
		return mystr.replace(/\n/g, "<br/>");
	}
}

function delHtmlTag(str) {
	//去掉所有的html标记
	return str.replace(/<[^>]+>/g, "");
}

function getParamsObjFromUrl(url) {
	var obj = {};
	if (StringUtils.isNlOrUndOrEmpty(url)) {
		return obj;
	} else {
		var wh = url.lastIndexOf('?');
		if (wh != -1) {
			var search = url.substr(wh);
			obj = getUrlRequest(search);
		}

	}
	return obj;
}

function getUrlFromParamsObj(url, paramsObj) {
	var wh = url.lastIndexOf('?');
	var u = url;
	if (wh == -1) {
		u = u + "?";
	} else {
		u = url.substring(0, wh + 1);
	}
	for (var key in paramsObj) {
		if (paramsObj.hasOwnProperty(key)) {
			var value = paramsObj[key];
			u = u + key + "=" + value + "&";
		}
	}
	u = u.substr(0, u.length - 1);
	return u;
}

function getUrlRequest(url) {
	var theRequest = {};
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		if (str.indexOf("&") != -1) {
			var strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		} else {
			theRequest[str.split("=")[0]] = unescape(str.split("=")[1]);
		}
	}
	return theRequest;
}

function decimal(num, v) {
	var n = parseInt(num * 100);
	var vv = Math.pow(10, v);
	return Math.round(n * vv / 100) / vv;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//获取当前日期在当前年第几周函数封装，例如2013-08-15 是当前年的第32周
////////////////////////////////////////////////////////////////////////////////////////////////////
function getWeekForYear(day) {
	var totalDays = 0;
	var date = new Date(day);
	var years = date.getYear();
	if (years < 1000) years += 1900;
	var days = new Array(12);
	days[0] = 31;
	days[2] = 31;
	days[3] = 30;
	days[4] = 31;
	days[5] = 30;
	days[6] = 31;
	days[7] = 31;
	days[8] = 30;
	days[9] = 31;
	days[10] = 30;
	days[11] = 31;

	//判断是否为闰年，针对2月的天数进行计算
	if (Math.round(date.getYear() / 4) == date.getYear() / 4) {
		days[1] = 29
	} else {
		days[1] = 28
	}

	if (date.getMonth() == 0) {
		totalDays = totalDays + date.getDate();
	} else {
		var curMonth = date.getMonth();
		for (var count = 1; count <= curMonth; count++) {
			totalDays = totalDays + days[count - 1];
		}
		totalDays = totalDays + date.getDate();
	}
	//得到第几周
	var week = Math.round(totalDays / 7);
	return week;
}

function getDaysDiff(longDateStart, longDateEnd) {
	var dateStart = new Date(longDateStart);
	var dateEnd = new Date(longDateEnd);
	var strDateS = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate());
	var strDateE = new Date(dateEnd.getFullYear(), dateEnd.getMonth(), dateEnd.getDate());
	//把相差的毫秒数转换为天数
	return parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24);
}

// 过滤特殊字符
function filterStr(str) {
	var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\]\\s.<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");
	var specialStr = "";
	for (var i = 0; i < str.length; i++) {
		specialStr += str.substr(i, 1).replace(pattern, '');
	}
	return specialStr;
}

function filterMobile(str) {
	var pattern = /^1([123456789])\d{9}$/;
	if (pattern.test(str)) {
		return true;
	} else {
		return false;
	}
}
