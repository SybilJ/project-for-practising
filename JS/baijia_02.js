//
var bannerData = [
	// {
	// 	title: "华谊兄弟收购英雄互娱暂告终止 未来或将持续推动",
	// 	main:"英雄互娱（430127）发布公告称：因重大事项，公司自2016年10月13日起暂停转让公司股票，股票暂停转让期间，公司根据相关规定及时履行信息披露义务，积极推进该重大事项的各项工作。",
	// 	href:"#",
	// 	bgImg:"./images/banner1.jpg"
	// },
	// {
	// 	title:"政策利好资本狂飙 2016是不是电子竞技的黄金时代？",
	// 	main:"2016年电子竞技步入冲刺阶段，处于高速发展期。资本的大力推动、政策持续的利好与社会主流的持续关注，使整体电子竞技产业持续升温。",
	// 	href:"#",
	// 	bgImg:"./images/banner2.jpg"
	// },
	{
		title:"蔡明宏：现在傻子才做单机，但我愿意做最傻那个",
		main:"尽管成都的天气让蔡明宏非常不适，但当他来到中手游成都分公司“轩辕剑粉丝见面会”，看着台下那么多“大叔范”的粉丝高喊“我是玩你的游戏长大的”时，仍然难掩内心的暖意。",
		href:"#",
		bgImg:"./images/banner3.jpg"
	}
];
createBanner({
	element:"banner",
	data:bannerData
});
function createBanner(option){
	var data = option.data,
		dataLen = data.length,
		element = document.getElementById(option.element),
		fragment = document.createDocumentFragment(),
		a = 0,
		images = data.map(function(item){
			return fragment.appendChild(createImage(item));
		}),
		timer = createTimer();
	function createImage(option){
		var a = document.createElement("a");
		a.href = option.href;
		a.className = "bannerWrap";
		a.style.background = "url(" + option.bgImg + ")";
		a.style.backgroundSize = "100% 100%";
		a.innerHTML = "<div class=\"opacity\"></div>"
					+ "<div class=\"product\">"
					+ "<h3>" + option.title + "</h3>"
					+ "<p>" + option.main + "</p>"
					+ "</div>";
		return a;
	};
	function createTimer(){
		return setInterval(function(){
			_a = a;
			a = a >=dataLen - 1 ? 0 :a + 1;
			images[_a].className = "";
			images[a].className = "current";
		},4000);
	};
	images[a].className = "current";
	function createButton(className){
		var i = document.createElement("i");
		i.className = "icon " + className;
		i.onclick = function(){
			clearInterval(timer);
			timer = createTimer();
			var _a = a;
			if(className === "previous"){
				a = a > 0 ? a - 1 : dataLen - 1;
			}else{
				a = a >= dataLen - 1 ? 0 : a + 1;
			}
			images[_a].className = null;
			images[a].className = "current";
		};
	};
	images[a].className = "current";
	fragment.appendChild(createButton("previous"));
	fragment.appendChild(createButton("next"));
	element.appendChild(fragment);
};

// var a = document.createElement("a"),
// 				bannerWrap = document.createElement("div");
// 			a.href = option.href;
// 			bannerWrap.className = "bannerWrap";
// 			bannerWrap.style.background = "url(" + option.bgImg + ")";
// 			bannerWrap.style.backgroundSize = "100% 100%";
// 			bannerWrap.innerHTML = "<div class=\"opacity\"></div>"
// 									+ "<div class=\"arrow_l\"></div>"
// 									+ "<div class=\"arrow_r\"></div>"
// 									+ "<div class=\"product\">"
// 									+ "<h3>" + option.title + "</h3>"
// 									+ "<p>" + option.main + "</p>"
// 									+ "</div>"
// 									+ "<div class=\"pages_dots\">"
// 									+ "<div class=\"dots\"></div>"
// 									+ "<div class=\"dots\"></div>"
// 									+ "<div class=\"dots\"></div>"
// 									+ "</div>;"
// 			a.appendChild(bannerWrap);
// 			return a;
var flatLabData = [
	{
		bgPic:"./images/game_1.jpg",
		title:"任天堂不光手游内购连复古版FC开卖都要先摇号",
		content:"任天堂最近在美国和日本发售的复古版FC游戏机成为热卖爆品，出现一机难求的状况，甚至美国买家都需要先进行摇号才有机会原价购买到这款“情怀机”。在WiiU的失败重创任天堂之后，这家老牌游戏商也在一直寻找着崛起的机遇。",
		href:"#"
	},
	{
		bgPic:"./images/game_2.jpg",
		title:"美国那么爱的丧尸游戏，原来这么好玩！",
		content:"故事发生在1986年7月4日的美国西雅图，正值美国国庆日。一位名叫 Randall 的森林管理员在丧尸来袭时和自己的妻女失散。为了找回自己的家庭，男主必须穿过整个西雅图来找寻自己的妻女和朋友，游戏也从此开始。",
		href:"#"
	},
	{
		bgPic:"./images/game_3.jpg",
		title:"榜单透视：腾讯前十占五 Top60内多游戏上升明显",
		content:"本周的国内畅销榜单上，腾讯的《王者荣耀》继续保持在第一，第二到第四位的分别是网易的《阴阳师》、《倩女幽魂》和《梦幻西游》。腾讯的《火影忍者》进入了前五，《征途》上升6位排在第六。网易的《大话西游》被挤到了第七位。",
		href:"#"
	}
];
function flatLabAnchor(option,index){
	var box = document.createElement("div"),
		a = document.createElement("a"),
		div = document.createElement("div"),
		span = document.createElement("span"),
		p = document.createElement("p");
	a.href = option.href;
	span.innerText = option.title;
	div.style.background = "url(" + option.bgPic + ")";
	div.style.backgroundSize = "100%";
	p.innerText = option.content;
	box.className = "flatLabBox";
	div.className = "box";
	p.className = "description";
	box.appendChild(a);
	a.appendChild(div);
	box.appendChild(span);
	box.appendChild(p);
	if(index==2){box.style.marginRight = 0;}else{box.style.marginRight = 65+"px";};
	return box;
};
var flatLabFragment = document.createDocumentFragment();
flatLabData.forEach(function(item,index){
	flatLabFragment.appendChild(flatLabAnchor(item,index));
});
document.getElementById("welcome").appendChild(flatLabFragment);
//----------recent---------------
var recentData = [
	{
		img:"./images/recent_news_1.jpg",
		name:"新游动态：12.12-12.18新游动态开测表",
		href:"#"
	},
	{
		img:"./images/recent_news_2.jpg",
		name:"《最终幻想15》评测：当幻想落入现实",
		href:"#"
	},
	{
		img:"./images/recent_news_3.jpg",
		name:"《阴阳师》、《皇室战争》成年度十佳游戏",
		href:"#"
	},
	{
		img:"./images/recent_news_4.jpg",
		name:"育碧《看门狗2》Steam玩家人数骤跌",
		href:"#"
	}
];
function recentAnchor(option){
	var box = document.createElement("div");
	box.className = "newsBox";
	box.innerHTML = "<img src=\"" + option.img + "\" />"
					+ "<a href=\"" + option.href + "\">" + option.name + "</a>";
	return box;
};
var recenrtFragment = document.createDocumentFragment();
recentData.forEach(function(item){
	recenrtFragment.appendChild(recentAnchor(item));
});
document.getElementById("recent").appendChild(recenrtFragment);
//--------------
var authorData = [
	{
		img:"./images/game_author_1.jpg",
		name:"触乐",
		href1:"#",
		tag:"高品质、有价值、有趣的移动游戏资讯",
		artical:"Dota 7.0, Dota Forever",
		href2:"#"
	},
	{
		img:"./images/game_author_2.jpg",
		name:"电科技",
		href1:"#",
		tag:"电科技：科技.娱乐.社群",
		artical:"任天堂不光手游内购连复古版FC开卖都要先摇号",
		href2:"#"
	},
	{
		img:"./images/game_author_3.jpg",
		name:"差评",
		href1:"#",
		tag:"这些东西，大佬们肯定不想让你知道...",
		artical:"美国那么爱的丧尸游戏，原来这么好玩！",
		href2:"#"
	},
	{
		img:"./images/game_author_4.jpg",
		name:"游戏茶馆",
		href1:"#",
		tag:"游戏行业服务平台",
		artical:"榜单透视：腾讯前十占五 Top60内多...",
		href2:"#"
	}
];
function authorAnchor(option,index){
	var box = document.createElement("div");
	box.className = "authorBox";
	box.innerHTML = "<a class=\"authorPic\" href=\"" + option.href1 + "\"><img src=\"" + option.img + "\" /></a>"
					+ "<div>"
					+ "<a class=\"authorName\" href=\"" + option.href1 + "\">" + option.name + "</a>"
					+ "<p>" + option.tag + "</p>"
					+ "<a class=\"newest\" href=\"" + option.href2 + "\">" + option.artical + "</a>"
					+ "</div>";
		if(index==box.length-1){box.style.marginRight=0}else{box.style.marginRight=15+"px"};
	return box;
};
var authorFragment = document.createDocumentFragment();
authorData.forEach(function(item,index){
	authorFragment.appendChild(authorAnchor(item,index));
});
document.getElementById("authors").appendChild(authorFragment);