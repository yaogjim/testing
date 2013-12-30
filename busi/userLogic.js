
/*!
 * 缓存列表
 */
var listCache = {};
var map = {};
getUser = function (key) {
  return map[key];
};


setUser = function (key,item) {
	if(item){
		map[key]=item;
	}  
};

exports.getUser = getUser;
exports.setUser = setUser;
