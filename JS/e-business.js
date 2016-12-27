//main-top
var authorData = [
	{
		name:"托庇网", 
		href:"#", 
		pic:"./images/author_04.jpg", 
		tag:"中国B2B专业媒体与行业服务平台", 
		news:"托比专访丨新高桥唐光亮：快消品B2B先...",
		newsHref:"https://www.baidu.com",
		publicV:"./images/publicV.png"
	}, 
	{
		name:"刘框", 
		href:"#", 
		pic:"./images/author_01.jpg", 
		tag:"以禅道参悟互联网", 
		news:"从双11到双12，电商大战背后实则是支付大战",
		newsHref:"https://www.baidu.com",
		publicV:"./images/publicV.png"
	},
	{
		name:"李成栋", 
		href:"#", 
		pic:"./images/author_02.jpg", 
		tag:"知名电商分析人", 
		news:"电商壹周 | 空空狐CEO被投资人踢出局给...",
		newsHref:"https://www.baidu.com",
		publicV:"./images/publicV.png"
	}, 
	{
		name:"罗朝", 
		href:"#", 
		pic:"./images/author_03.jpg", 
		tag:"罗超（luochaotmt）", 
		news:"Amazon Go是噱头，正在改变零售...",
		newsHref:"https://www.baidu.com",
		publicV:"./images/publicV.png"
	}
];
function headingAnchor(option){
	var box = document.createElement("div"),
		img = document.createElement("a"),
		info = document.createElement("div");
	box.className = "authorBox";
	img.className = "picImg";
	info.className = "details";
	img.style.background = "url(" + option.pic + ")";
	img.style.backgroundSize = "100%";
	img.href = option.href;
	info.innerHTML = "<a href=\"" + option.href + "\"><h3>" + option.name + "</h3></a>"
					// + "<img " + "src=\"" option.publicV + "\" />"
					+ "<span>" + option.tag + "</span>"
					+ "<a href=\"" + option.newsHref + "\">" + option.news + "</a>";
	box.appendChild(img);
	box.appendChild(info);
	return box;
};
var headingFragment = document.createDocumentFragment();
authorData.forEach(function(item){
	headingFragment.appendChild(headingAnchor(item));
});
document.getElementById("authors").appendChild(headingFragment);

var starredArtical = [{title:"从被动满足到主动创造，揭秘唯品会的时尚“潜规则”", content:"特卖电商唯品会最近有了新动作。在与各家电商齐发力各种购物节的同时，临近唯品会成立8周年之际，唯品会研究院发布《“粉红势力”的苏醒：2008-2016中国时尚洞察报告》（以下简称“《报告》”），《报告》不仅集结了平台八年的大数据资源，还邀请了《嘉人》杂志主编邓立、知名主持人李静、著名时装计师张驰、万博宣伟中国区主席刘希平、时尚媒体人苏红、时尚潮人徐峰立在内的六位时尚人士为报告背书，同时发布了过去一年的热门品牌榜单，在时尚方面的调性可谓满格！"}];
function stAnchor(option){
	var div = document.createElement("div"),
		h3 = document.createElement("h3"),
		p = document.createElement("p");
	h3.innerText = option.title;
	p.innerText = option.content;
	div.appendChild(h3);
	div.appendChild(p);
	return div;
};
starredArtical.forEach(function(item){
	document.getElementById("starred_artical").appendChild(stAnchor(item));
});

var articalTitleData = [
	{
		name:"托比专访丨新高桥唐光亮：快消品B2B先区域为王", 
		href:"#", 
	}, 
	{
		name:"从双11到双12，电商大战背后实则是支付大战", 
		href:"#", 
	}, 
	{
		name:"电商壹周|空空狐CEO被投资人踢出局给创业者的启示", 
		href:"#", 
	}, 
	{
		name:"Amazon Go是噱头，正在改变零售的是中国玩家", 
		href:"#", 
	},
	{
		name:"宗宁：每逢佳节黑三篇，京东双十二又中枪", 
		href:"#", 
	}, 
	{
		name:"所谓京东数据泄露，其实是Struts惹下的大祸", 
		href:"#", 
	},
	{
		name:"托比专访丨新高桥唐光亮：快消品B2B先区域为王", 
		href:"#", 
	}
];
function atAnchor(option,index){
	var a = document.createElement("a");
	a.href = option.href;
	a.innerText = option.name;
	if(index%2==0){ a.style.color = "#4abea7"; };
	return a;
};
var atFragment = document.createDocumentFragment();
articalTitleData.forEach(function(item,index){
	atFragment.appendChild(atAnchor(item,index));
});
document.getElementById("hotArtical").appendChild(atFragment);
//-------------hightlights---------------------
var highlightData = [
	{
		title:"宗宁：每逢佳节黑三篇，京东双十二又中枪",
		content:"最近一则京东用户数据泄露的消息又开始疯传，听说的搞得京东很紧张的上下折腾调查，最后发现，是三年前的Struts漏洞泄露事件。这个事件因为Struts官方居然贴出了漏洞利用代码而波及深广，几乎所有大中小企业、互联网公司都有中招。当时我在360,后来还推出了著名的“库带计划”，大概意思就是给大家都系上腰带，免得被“拖库”。其实这次安全事件，还是在京东上市前，那时候京东的用户和成交其实都还比较小，全年只有1000亿元，估计还不到现在的五分之一。事情发生后，各大公司也都在积极核查和弥补，同时也纷纷提示用户更改密码，至少在这三年内，京东还未发现一例因这次泄露导致的安全事件发生。主要原因也就是因为，积极用户已经更改了密码，非积极用户的账号也基本已经弃用。几年前京东还是货到付款为主要战略，在相关金融信息方面的价值比其他金融化更好的公司相比还比较弱，也并未出现什么更高的风险。",
		more:"了解更多 >",
		href:"#"
	},
	{
		title:"微商界妖精女王李琳 揭秘巧用引流千万财富之道",
		content:"2016年底的微商界注定不平淡，继立白、广药白云山、仁和等大品牌强势进军微商后，泽平做为拥有着23年的国内最大的国药妆基地的民族品牌泽平携手中国最具影响力人脉社群K友汇也全面杀入微商领域，并且以其对于化妆品行业的卓越研发能力，首推可以媲美SKII神仙水的品牌泽平妖精水，前不久诸多微商界大咖发来祝贺视频，这款精心打造的泽平妖精水以高颜值、高技术借助社群力量一度刷爆朋友圈，一直播女神 拥有2.6亿金币网红界第一导师沫浠亲自现场在一直播举行新品直播体验吸引了上百万人的关注。众多大网红也是倾情热荐。",
		more:"了解更多 >",
		href:"#"
	}
];
function highlightAnchor(option){
	var box = document.createElement("div");
	box.className = "hlWrapper";
	box.innerHTML = "<h2>" + option.title + "</h2>" 
					+ "<p>" + option.content + "</p>"
					+ "<a href=\"" + option.href + "\">" + option.more + "</a>"
	return box;
};
var hlFragment = document.createDocumentFragment();
highlightData.forEach(function(item){
	hlFragment.appendChild(highlightAnchor(item));
});
document.getElementById("highlights").appendChild(hlFragment);
//------------dropcap-------------------
var dropcapData = [
	{
		title:"创业就是向死而生！2016年互联网创业公司死亡名单", 
		pic:"./images/chuang.png", 
		content:"业就是九死一生。人们往往看到的都是浮出水面的那“一生”，而更多的”九死”都是悄无声息。A轮死、B轮死、C轮死，创业就是“向死而生。”神奇百货17岁的CEO王凯歆舌战投资人，得到2000千万投资，到后来被人质疑称骗子；曾经作为国产手机市场中一个不可忽视的新兴力量，到最后步了大可乐的后尘惨淡倒闭的IUNI，这些鲜活的案例，无时无刻不在提醒着那些满腔热血的创业者们。", 
		more:"了解更多 >",
		href:"#"
	},
	{
		title:"手机厂商为何扎堆争上京东“超级品牌日”？", 
		pic:"./images/zai.jpg", 
		content:"手机行业，魅族并不是第一个和京东合作超级品牌日的手机品牌，在魅族之前，很多国内外超级大牌都在京东举办过超级品牌日，并且都取得了惊人的战果成绩。这让京东超级品牌日的威力在手机行业内几乎已成为神话般的存在，并使其成为众多手机厂商争相抢夺的“香馍馍”。京东超级品牌日为何在手机行业变的炙手可热？这种现象的背后又有着怎样的原因？", 
		more:"了解更多 >",
		href:"#"
	},
];
function drpAnchor(option,index){
	var box = document.createElement("div");
	box.className = "drpBox";
	box.innerHTML = "<h2>" + option.title + "</h2>"
					+ "<div class=\"content\">"
					+ "<img src=\"" + option.pic + "\" />"
					+ "<p>"  + option.content + "</p>"
					+ "<a href=\"" + option.href + "\">" + option.more + "</a>"
					+ "</div>";
	if(index==0){box.style.marginRight="40px"}; 
	return box;
};
var drpFragment = document.createDocumentFragment();
dropcapData.forEach(function(item,index){
	drpFragment.appendChild(drpAnchor(item,index));
});
document.getElementById("dropcap").appendChild(drpFragment);
//-------------blockquote----------------------
var blockquoteData = [
	{
		title:"托比专访|我的塑料网李铁道：转型是B2B的必然趋势", 
		subTitle:"“化工B2B前一阵子如火如荼，但是伴随着B2B由2.0到3.0的转变，整个化工B2B目前正在经历着分层。", 
		content:"在李铁道看来，转型是企业顺应时代发展的一种必然，随着互联网的普及，一味的利用信息不对称赚取差价已经不可取，最终会被淘汰。并且互联网能够解决或者缓解信息不对称、效率低下、资金安全、物流压力等传统塑化行业的痛点问题，实现塑化行业资源优化配置。据悉，我的塑料网由分销商转型做电商平台，对此李铁道表示：“虽然同样是在塑化行业，但是转型也相当于重新进入了一个新的行业，接触到了一些新的事物，眼界、思维、处事方式等，都经历了破天荒地洗礼。其玩法是不一样的。”", 
		more:"了解更多 >", 
		href:"#"
	},
];
function bqAnchor(option){
	var box = document.createElement("div");
	box.className = "bqWrapper";
	box.innerHTML = "<h2>" + option.title + "</h2>"
					+ "<span>" + option.subTitle + "</span>"
					+ "<p>" + option.content + "</p>"
					+ "<a href=\"" + option.href + "\">" + option.more + "</a>";
	return box;
};
var bqFragment = document.createDocumentFragment();
blockquoteData.forEach(function(item){
	bqFragment.appendChild(bqAnchor(item));
});
document.getElementById("blockquote").appendChild(bqFragment);
//-------------oList--------------------------------
var oListBox1 = document.createElement("div");
oListBox1.className = "oList_box";
var oListData = [
	{ num:1, name:"一款牛逼纸尿裤产生的背后故事，你知道吗？", href:"#"},
	{ num:2, name:"数万家线下零售关门歇业，AmazonGo带来什么新启发？", href:"#"},
	{ num:3, name:"在阿里技术教父眼中 这家公司比亚马逊更专注", href:"#"},
	{ num:4, name:"海信空调品牌日：家电年关大戏高端新品领衔受宠", href:"#"},
	{ num:5, name:"阿里首度起诉刷单团伙，“喜刷刷”时代何时告终", href:"#"}
];
function oListAnchor(option){
	var box = document.createElement("p");
	box.className = "oList_object";
	box.innerHTML = "<span>" + option.num + "</span>"
					+ "<a href=\"" + option.href + "\">" + option.name + "</a>";
	return box;
};
var oListFragment = document.createDocumentFragment();
oListData.forEach(function(item){
	oListFragment.appendChild(oListAnchor(item));
});
oListBox1.appendChild(oListFragment);

var oListBox2 = document.createElement("div");
oListBox2.className = "oList_box";
var oListData2 = [
	{ num:6, name:"宜信财富唐宁：选择投米RA智能投顾，晚上休息更安心", href:"#"},
	{ num:7, name:"科龙超级品牌日携高效精品 狂掀空调业价值战浪潮", href:"#"},
	{ num:8, name:"老美的双十一究竟消费了多少？", href:"#"},
	{ num:9, name:"为什么今年双十二，重点变成了线下商家升级战？", href:"#"},
	{ num:10, name:"不用排队结账！Amazon Go重新定义剁手", href:"#"}
];
function oListAnchor2(option){
	var box = document.createElement("p");
	box.className = "oList_object";
	box.innerHTML = "<span>" + option.num + "</span>"
					+ "<a href=\"" + option.href + "\">" + option.name + "</a>";
	return box;
};
var oListFragment2 = document.createDocumentFragment();
oListData2.forEach(function(item){
	oListFragment2.appendChild(oListAnchor2(item));
});
oListBox2.appendChild(oListFragment2);
document.getElementById("oList").appendChild(oListBox1);
document.getElementById("oList").appendChild(oListBox2);
//-----------------gridsBlock------------------------
var oneThirdData = [
	{
		title:"中国网文海外爆燃，互联网的突破就在这里",
		content:"就像日本经济学家田中秀臣在《AKB48的格子裙经济学》中所说：粉丝们一面生产，一面又消费自己。如此，中国网文在海外呈现高度自治的生态特征，墙内开花墙外香的趋势已定，于是，“一带一路”国策也可以不只是投资、工程建设的加码，更有中国特色内容文化的输出，相关互联网玩家更成为老外们“面包上的奶油，生活中的空气”，这才是真的接地气，有突破。",
		href:"#"
	},
	{
		title:"他们是如何通过写娱乐八卦来赚钱的",
		content:"被誉为“中国内地第一狗仔”的卓伟拥有四百五十多万的微博粉丝。从表面上看，关八这种做娱乐八卦资讯的自媒体所拥有的粉丝“鱼龙混杂”，实则，通过推送娱乐八卦的形式却能搭建好一个优质的垂直女性社群。而女人的钱最好赚(此处没有任何贬义)，毕竟，女性相对来说更为感性，消费更为多元化，因此更容易被引导消费。",
		href:"#"
	},
	{
		title:"潘斌：VR内容变现有望与漫画、动画建立原创IP体系",
		content:"对于娃娃鱼工作室来说，进军VR的最终目的是建立起漫画孵化IP，动画放大IP，VR内容变现IP的内部体系。最近《你的名字》一周狂揽4亿，让市场又一次看到了优秀动画电影的潜力。虽然此前我们也有《大圣归来》、《小门神》、《大鱼海棠》等优秀的国产动画电影，但目前国内动画市场来说，仍是需要时间和资本孕育，普遍存在盈利难的问题，需要市场规范和制度化的存在。",
		href:"#"
	}
];
function oThirdAnchor(option){
	var box = document.createElement("div");
	box.className = "oThirdBox";
	box.innerHTML = "<a href=\"" + option.href + "\"><h3>" + option.title + "</h3></a>"
					+ "<p>" + option.content + "</p>";
	return box;
};
var oThirdFragment = document.createDocumentFragment();
oneThirdData.forEach(function(item){
	oThirdFragment.appendChild(oThirdAnchor(item));
});
document.getElementById("gridsBlock").appendChild(oThirdFragment);

var oneFourthData = [
	{
		title:"拿了就走的智能超市，暗藏了亚马逊怎样的野心？",
		content:"在美国，有这么一家超市，没有导购、没有收银员，顾客看中什么就拿什么，甚至不用排队结账，出了门，系统就会自动帮你买单。这可不是科幻电影里的情节，而是上周亚马逊新开张的「智能超市」Amazon Go。今天，极客君就和大家聊聊这家神奇的超市，挖掘 Amazon Go 背后都藏了哪些黑科技。",
		href:"#"
	},
	{
		title:"打造完善的公益模式，映客诠释直播企业的社会责任",
		content:"今年来，随着越来越多知名企业的加入，我国公益事业呈现了突飞猛进的发展，由于企业在资金、资源上具备很大的优势，不仅对公益事业将产生立竿见影的推动效应，同时这也能充分体现企业的社会责任感，堪称一举两得。",
		href:"#"
	},
	{
		title:"早报：苹果新专利曝光，iPhone背部或将支持触控",
		content:"来自美国专利商标局的专利显示，苹果准备打造一款融合了触摸传感器结构的新型电子设备。此类设备在机身各部都搭载了触摸传感器，因此用户的输入方式将发生巨大改变。此外，借助触摸传感器，机身侧面的音量控制键等实体按键都将被替代。同时，苹果还可以开发全新 UI，比如利用机身背部的传感器执行网页快速滚动或翻页等操作。",
		href:"#"
	},
	{
		title:"从GACHA到二次元市场，二次元社区的创业方向何在？",
		content:"如何利用移动互联网带来的使用场景上的改变，创造出一种全新的“圈内人群”的交流方式，是二次元社区创业方向所在。二次元大热折射的是存在于年轻人群体中的一种文化现象，一种心理诉求，而不仅仅是由大IP所引发的粉丝效应这么简单。二次元领域的创业者们应当离真正的用户群体更近一点。",
		href:"#"
	}
];
function oFourthAnchor(option){
	var box = document.createElement("div");
	box.className = "oFourthBox";
	box.innerHTML = "<a href=\"" + option.href + "\"><h3>" + option.title + "</h3></a>"
					+ "<p>" + option.content + "</p>";
	return box;
};
var oFourthFragment = document.createDocumentFragment();
oneFourthData.forEach(function(item){
	oFourthFragment.appendChild(oFourthAnchor(item));
});
document.getElementById("gridsBlock").appendChild(oFourthFragment);