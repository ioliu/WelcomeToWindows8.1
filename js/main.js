var TIPS = ['你好','我们正在为你进行相关设置',['正在获取关键更新','请不要关闭电脑'],['这可能需要一点时间','请不要关闭电脑'],'马上回来','更新完成','现在，我们将设置你的应用',['你可以从应用商店获取新应用','正在安装应用'],['正在处理一些事情','正在安装应用'],['正在准备你的应用','请不要关闭电脑'],['准备工作马上就绪','请不要关闭电脑'],['尽情使用吧','']]; 

/**
 * [$ 获取目标元素]
 * @param  {[element]} selector [description]
 * @return {[element]}          [description]
 */
function $(selector){
	return document.querySelector(selector);
}
/**
 * [alpha description]
 * @param  {[element]} target [目标元素]
 * @param  {[boolean]} fade   [渐显or渐隐:true or false]
 * @param  {[Number]} times   [需要的时间]
 * @return {[type]}        []
 */
function alpha(target,fade,times){
	var ie 	= (window.ActiveXObject) ? true : false,
		n 	= fade ? 0 : 1;
	var time = setInterval(function(){
		
		if(fade){
			n += 0.01;
			ie && (target.style.filter='Alpha(opacity:'+ n*100 +')') || (target.style.opacity = n);
			if(n >= 1){
				clearInterval(time);
			}
		}else {
			n -= 0.01;
			ie && (target.style.filter='Alpha(opacity:'+ n*100 +')') || (target.style.opacity = n);
			if(n <= 0) {
				clearInterval(time);
			}
		}
	},times*1000/100);
}	

window.onload = function(){
	alpha($('.text'),true,2);
}

/**
 * 开始Timer，并返回Timer对象
 * @param  {Function} fn    [description]
 * @param  {[int]}   times [description]
 * @return {[intervel]}         [description]
 */
function startTimer(fn,times){
	return setInterval(function(){
		fn;
	},times);
}