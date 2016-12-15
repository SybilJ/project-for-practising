var tagNavData = [
	{ text:"全部", value:"all" },
	{ text:"产品设计", value:"design" },
	{ text:"技术发展", value:"develop" },
	{ text:"航空电子", value:"aviation" },
	{ text:"未来科技", value:"futureTec" },
	{ text:"节能技术", value:"energySaving" }
];
function tagNavAnchor(option){
	var container = document.createElement("div"),
		ul = document.createElement("ul");
		tagNavData.forEach(function(item){
			var li = document.createElement("li");
			li.innerText = item.text;
			li.className = "abt";
			ul.appendChild(li);
		});
	ul.className = "nav";
	container.className = "tagBox";
	container.appendChild(ul);
	return container;
};
document.getElementById("tagNav").appendChild(tagNavAnchor(vedioData));
// var tagFragment = document.createDocumentFragment();
// tagNavData.forEach(function(item){
// 	tagFragment.appendChild(tagNavAnchor(item));
// 	document.getElementById("tagNav").appendChild(tagNavAnchor(item));
// });
//
var vedioData = [
	{
		img:"./images/portfolio_1.jpg",
		name:"新能源汽车“代孕”",
		href:"#"
	},
	{
		img:"./images/portfolio_2.jpg",
		name:"人工智能热潮中的幻觉和常识”",
		href:"#"
	},
	{
		img:"./images/portfolio_3.jpg",
		name:"航空电子系统的重要作用",
		href:"#"
	},
	{
		img:"./images/portfolio_4.jpg",
		name:"航空电子系统的涉及",
		href:"#"
	},
	{
		img:"./images/portfolio_5.jpg",
		name:"谷歌自动驾驶项目独立成子公司Waymo",
		href:"#"
	},
	{
		img:"./images/portfolio_6.jpg",
		name:"首届中国智慧家庭服务发展峰会",
		href:"#"
	},
	{
		img:"./images/portfolio_7.jpg",
		name:"腾势汽车母公司更名 股比/性质不变",
		href:"#"
	},
	{
		img:"./images/portfolio_8.jpg",
		name:"“5万元级、有快充” 众泰E200",
		href:"#"
	},
	{
		img:"./images/portfolio_9.jpg",
		name:"11月新能源乘用车销量点评",
		href:"#"
	},
	{
		img:"./images/portfolio_10.jpg",
		name:"八家互联网造车企业“新内幕”",
		href:"#"
	},
	{
		img:"./images/portfolio_11.jpg",
		name:"霍兹重启CommaNeo项目",
		href:"#"
	},
	{
		img:"./images/portfolio_12.jpg",
		name:"OculusCEO闲不住，请辞为下一线",
		href:"#"
	}
];
function vedioAnchor(option,index){
	var container = document.createElement("div"),
		ul = document.createElement("ul");
		vedioData.forEach(function(item,index){
			var li = document.createElement("li");
			li.style.background = "url(" + item.img + ")";
			li.style.backgroundSize = "100% 100%";
			li.className = "product";
			li.innerHTML = "<div class=\"opacity\"></div>"
							+ "<a href=\"" + item.href + "\"><div class=\"left_circle\"></div></a>"
							+ "<a href=\"" + item.href + "\"><div class=\"right_circle\"></div></a>"
							+ "<span>" + item.name + "</span>";
			if(index%4==0){li.style.marginRight=0;}else{li.style.marginLeft="25px";}
			ul.appendChild(li);
		});
	ul.className = "products_list";
	container.className = "vedioBox";
	container.appendChild(ul);
	return container;
};
document.getElementById("vedioBlock").appendChild(vedioAnchor(vedioData));
