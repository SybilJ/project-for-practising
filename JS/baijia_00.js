//
var newsData = [
	{
		img:"./images/circle_1.jpg",
		title:"看似普通的眼镜 为何获得千万众筹？",
		content:"最近极客君发现一款眼镜在 Kickstarter平台上获得巨大成功，上线以来获8692人支持，共筹得11,939,648RMB,目标达成率 3,674%。",
		href:"#"
	},
	{
		img:"./images/circle_2.jpg",
		title:"Google从未放弃中国市场",
		content:"今天召开的谷歌2016开发者大会吸引了众多应用开发者前往参加，而谷歌这次也是诚意满满，现场不断放出重磅消息。",
		href:"#"
	}
];
function newsAnchor(option){
	var ul = document.createElement("ul");
	ul.className = "news";
	ul.innerHTML = "<li>"
					+ "<img src=\"" + option.img + "\" />"
					+ "<div class=\"sec1_con\">"
					+ "<h3>" + option.title + "</h3>"
					+ "<p>" + option.content + "</p>"
					+ "</div>"
					+ "</li>";
	ul.childNodes[0].style.paddingRight = 20 + "px";
	return ul;
};
var newsFragment = document.createDocumentFragment();
newsData.forEach(function(item){
	newsFragment.appendChild(newsAnchor(item));
});
document.getElementById("newsBlock").appendChild(newsFragment);
//
var celebrityData = [
	{
		img:"./images/writer01.jpg",
		name:"齐俊杰",
		tag:"财经专栏作家、投资人",
		artical1:"房地产的缰绳正在越勒越紧",
		artical2:"金融危机来了别当杨白劳 更别当黄世仁",
		artical3:"任正非何以判断金融危机即将到来？",
		href1:"#",
		href2:"#",
		href3:"#",
	},
	{
		img:"./images/writer02.jpg",
		name:"百略网",
		tag:"专注于泛互联网商业革新和科技创新的智识型新媒体",
		artical1:"蚂蚁金服高管到硅谷一游，阿里市值缩水了223亿美元",
		artical2:"曾经在纸质海报中、磁带中的青春偶像，如今已大不同",
		artical3:"「快充」与「续航」兼备石墨烯电池将成为汽车救星？",
		href1:"#",
		href2:"#",
		href3:"#",
	},
	{
		img:"./images/writer03.jpg",
		name:"躺倒鸭",
		tag:"爱科技de躺倒鸭，iPhone搞机小专家",
		artical1:"旧时代的PK: 初代iPhone VS 首款安卓",
		artical2:"iPhone年度十佳游戏<阴阳师>新手攻略！",
		artical3:"创意聊天背景图，做有态度的自己！",
		href1:"#",
		href2:"#",
		href3:"#",
	}
];
function celebrityAnchor(option){
	var box = document.createElement("div");
	box.className = "celebrityBox";	
	box.innerHTML = "<img src=\"" + option.img + "\">"
					+ "<p class=\"name\">" + option.name + "</p>"
					+ "<span>" + option.tag + "</span>"
					+ "<div class=\"intro\">"
					+ "<a href=\"" + option.href1 + "\">" + option.artical1 + "</a>"
					+ "<a href=\"" + option.href2 + "\">" + option.artical2 + "</a>"
					+ "<a href=\"" + option.href3 + "\">" + option.artical3 + "</a>"
					+ "</div>";
	return box;
};
var celebrityFragment = document.createDocumentFragment();
celebrityData.forEach(function(item){
	celebrityFragment.appendChild(celebrityAnchor(item));
});
document.getElementById("activeWriter").appendChild(celebrityFragment);