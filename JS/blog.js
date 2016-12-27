var categoryData = [
	{
		title:"按分类查找",
		options:[
			{name:"巨头", value:1},
			{name:"人物", value:2},
			{name:"电商", value:3},
			{name:"创投", value:4},
			{name:"智能硬件", value:5},
			{name:"互联网+", value:6},
			{name:"P2P", value:7},
			{name:"前沿技术", value:8},
			{name:"游戏", value:9}
		]
	}
];
function categoryAnchor(option){
	var container = document.createElement("div"),
		categoryTitle = document.createElement("h3");
	categoryTitle.innerText = option.title;
	var ul = document.createElement("ul");
	option.options.forEach(function(item){
		var li = document.createElement("li");
		li.innerText = item.name;
		ul.appendChild(li);
	});
	ul.className = "cateTitle";
	container.className = "cateWrapper";
	container.appendChild(categoryTitle);
	container.appendChild(ul);
	return container;
};
var categoryFragment = document.createDocumentFragment();
categoryData.forEach(function(item){
	categoryFragment.appendChild(categoryAnchor(item));
	document.getElementById("categories").appendChild(categoryAnchor(item));
});
//
var newestData = [
	{
		title:"最近更新的博客文章",
		wrapper:[
			{
				img:"./images/writer01.jpg",
				date:"2016/12/14",
				name:"齐俊杰",
				blogHref:"#",
				heading:"房价为什么这么高？大数据全知道",
				headingHref:"#"
			},
			{
				img:"./images/writer02.jpg",
				date:"2016/12/14",
				name:"百略网",
				blogHref:"#",
				heading:"不能形成垄断外卖行业，啥时候才能合……",
				headingHref:"#"
			},
			{
				img:"./images/jike.jpg",
				date:"2016/12/14",
				name:"极客视界",
				blogHref:"#",
				heading:"今日大盘大跌5大主因(附策略)",
				headingHref:"#"
			}
		]
	},
];
function newestAnchor(option){
	var container = document.createElement("div"),
		h3 = document.createElement("h3");
	h3.innerText = option.title;
	var ul = document.createElement("ul");
	option.wrapper.forEach(function(item){
		var li = document.createElement("li");
		li.innerHTML = "<a class=\"blogEntrance\" href=\"" + item.blogHref + "\" style=\"background:url(" + item.img + ");background-size:100%;\"></a>"
						+ "<div>"
						+ "<span>" + item.date + "</span>"
						+ "<a class=\"blogBelongs\" href=\"" + item.blogHref + "\">" + item.name + "</a>"
						+ "<a class=\"artical\" href=\"" + item.headingHref + "\">" + item.heading + "</a>"
						+ "</div>";
		ul.appendChild(li);
	});
	container.className = "postWrapper";
	container.appendChild(h3);
	container.appendChild(ul);
	return container;
};
var newestFragment = document.createDocumentFragment();
newestData.forEach(function(item){
	newestFragment.appendChild(newestAnchor(item));
	document.getElementById("newestPost").appendChild(newestAnchor(item));
});
//
var tagData = [
	{
		title:"关键字查找",
		options:[
			{ name:"电信", value:"dianxin" },
			{ name:"戴尔", value:"daier" },
			{ name:"苹果", value:"pingguo" },
			{ name:"乐视", value:"leshi" },
			{ name:"英特尔", value:"int" },
			{ name:"电池门", value:"dianchi" },
			{ name:"创客", value:"chuangke" },
			{ name:"柳传志", value:"liu" },
			{ name:"柔性屏", value:"rou" },
			{ name:"智能客服", value:"zhineng" }
		]
	}
];
function tagAnchor(option){
	var container = document.createElement("div"),
		h3 = document.createElement("h3");
	h3.innerText = option.title;
	var ul = document.createElement("ul");
	option.options.forEach(function(item){
		var li = document.createElement("li");
		li.innerText = item.name;
		ul.appendChild(li);
	});
	container.className = "tagsBox";
	container.appendChild(h3);
	container.appendChild(ul);
	return container;
};
var tagFragment = document.createDocumentFragment();
tagData.forEach(function(item){
	tagFragment.appendChild(tagAnchor(item));
	document.getElementById("tags").appendChild(tagAnchor(item));
});
//
var archiveData = [
	{
		title:"日期查找",
		options:[
			{ month:"12月 / ", year:"2016", value:"" },
			{ month:"11月 / ", year:"2016", value:"" },
			{ month:"10月 / ", year:"2016", value:"" },
			{ month:"9月 / ", year:"2016", value:"" },
			{ month:"8月 / ", year:"2016", value:"" }
		]
	}
];
function archiveAnchor(option){
	var container = document.createElement("div"),
		h3 = document.createElement("h3");
	h3.innerText = option.title;
	ul = function(){
		var ul = document.createElement("ul");
		option.options.forEach(function(item){
			var li = document.createElement("li");
			li.innerHTML = "<a>" +
			 item.month + item.year + "</a>";
			ul.appendChild(li);
		});
		var more = document.createElement("li");
		more.innerText = "查看更多 >";
		more.className = "checkMore";
		ul.appendChild(more);
		return ul;
	}();
	container.className = "archSec";
	container.appendChild(h3);
	container.appendChild(ul);
	return container;
};
var archiveFragment = document.createDocumentFragment();
archiveData.forEach(function(item){
	archiveFragment.appendChild(archiveAnchor(item));
	document.getElementById("archive").appendChild(archiveAnchor(item));
});