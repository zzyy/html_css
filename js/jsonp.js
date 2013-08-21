/**
 * @author P0025898
 */
function getJSONP(url, callback){
	//为请求创建唯一回调函数
	var renum = "re" + getJSONP.counter++;
	var rename = "getJSONP." + renum;
	
	if(url.indexOf("?") === -1)
		url += "?jsonp=" + rename;
	else
		url += "&jsonp=" + rename;
	
	var script = document.createElement("script");
	getJSONP[renum] = function(response){
		callback(response);
	}
	
	script.src=url;
	document.body.appendChild(script);
}

getJSONP.counter = 0;