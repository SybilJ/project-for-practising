//bannerBlock
var bannerData = [
	{
		title:"记账理财撬动千亿市场，网易有钱能否后发先至？",
		content:"12月12日，网易旗下个人资产管理工具“网易有钱”联合TNS中国在京发布的《2016中国渐富人群研究报告》，报告通过百万份问卷，深入分析了各类社会群体在收入、消费、理财等方面的数据，首次提出了“渐富人群”这一定义。报告指出，和西方成熟的“中产阶级”相比，中国当前更具“中产阶级”特征的更多是庞大数量的“基础阶层”，这部分群体“年龄为23岁-35岁，个人年收入5万以上，经济、政治、教育等方面资源和技能仍在提升”，已逐渐成为社会的中坚力量。报告显示，“渐富人群”拥有更高成熟度的消费决策与更复杂的消费构成，但同时也表现出财务分散、管理能力弱、理财知识不专业的短板，这与该部分人群的高记账需求、强投资理财意识形成鲜明的矛盾。在网易有钱总监单开涛看来，“他们需要一个完善的金融服务平台，去帮助他们管理个人资产，实现财富稳健、快速增值，互联网产品带给渐富人群这种可能性”。",
		href:"#",
		pic:"./images/p2pBanner01.jpg",
		opacity:"",
		text:"网易金融"
	}
];
function bannerAnchor(option){
	var box = document.createElement("div");
	box.className = "bannerWrap";
	box.innerHTML = "<div class=\"bannerLeft\">"
					+ "<h3>" + option.title + "</h3>"
					+ "<p>" + option.content + "</p>"
					+ "</div>"
					+ "<a class=\"bannerRight\" href=\"" + option.href + "\" style=\"background:url(" + option.pic + "); background-size:100% 100%; \">"
					+ "<div class=\"opacity\"></div>"
					+ "<span>" + option.text + "</span>"
					+ "</a>"
	return box;
};
var bannerFragment = document.createDocumentFragment();
bannerData.forEach(function(item){
	bannerFragment.appendChild(bannerAnchor(item));
});
document.getElementById("bannerBlock").appendChild(bannerFragment);
//Authors
var authorData = [
	{
		pic:"./images/p2pAuthor01.jpg",
		name:"李林安",
		href1:"#",
		tag:"知名专栏作者",
		artical:"记账理财撬动千亿市场，网易有钱能否后发先至？",
		href2:"#"
	},
	{
		pic:"./images/p2pAuthor02.jpg",
		name:"红途风控汇",
		href1:"#",
		tag:"金融风控学习，天堑变红途！",
		artical:"红途网贷发展力评审榜单 | 300家平...",
		href2:"#"
	},
	{
		pic:"./images/p2pAuthor03.jpg",
		name:"红小郝子",
		href1:"#",
		tag:"互联网的嘈与爱",
		artical:"裸条泛滥的P2P，集体投身金融交易所，...",
		href2:"#"
	},
	{
		pic:"./images/p2pAuthor04.jpg",
		name:"刘志刚",
		href1:"#",
		tag:"长期专注互联网TMT领域深度报道",
		artical:"冰融贷喜迎两周年，引领东北地区P2P合规之路",
		href2:"#"
	},
	{
		pic:"./images/p2pAuthor05.jpg",
		name:"闹客邦",
		href1:"#",
		tag:"闹客邦，华南创业者自己的媒体",
		artical:"丁磊网聚人的力量成首富，他网聚屏的力量成新贵",
		href2:"#"
	},
	{
		pic:"./images/p2pAuthor06.jpg",
		name:"白小楼",
		href1:"#",
		tag:"媒体人 科技专栏作者",
		artical:"刘成城对话柳传志：创业的初衷到底是什么？",
		href2:"#"
	}
];
function authorAnchor(option){
	var box = document.createElement("div");
	box.className = "authorBox";
	box.innerHTML = "<a class=\"authorPic\" href=\"" + option.href1 + "\"><img src=\"" + option.pic + "\" /></a>"
					+ "<div>"
					+ "<a class=\"authorName\" href=\"" + option.href1 + "\">" + option.name + "</a>"
					+ "<p>" + option.tag + "</p>"
					+ "<a class=\"newest\" href=\"" + option.href2 + "\">" + option.artical + "</a>"
					+ "</div>";
	return box;
};
var authorFragment = document.createDocumentFragment();
authorData.forEach(function(item){
	authorFragment.appendChild(authorAnchor(item));
});
document.getElementById("authors").appendChild(authorFragment);
//Hot Artical
var headData = [
	{ text:"强强联合 我来贷携手富士康进军蓝领普惠金融" }, 
	{ text:"裸条泛滥的P2P，集体投身金融交易所，隐含巨大风险" }, 
	{ text:"冰融贷喜迎两周年，引领东北地区P2P合规之路" }, 
	{ text:"透视友金所：优劣势鲜明，金融基因有待锤炼" }
];
function headAnchor(option){
	var box = document.createElement("div"),
		p = document.createElement("p");
	box.className = "headBox";
	p.innerText = option.text;
	box.appendChild(p);
	return box;
};
var headFragement = document.createDocumentFragment();
headData.forEach(function(item){
	headFragement.appendChild(headAnchor(item));
});
document.getElementById("headBlock").appendChild(headFragement);

var contentData = [
	{
		img:"./images/papAheadPic_04.jpg",
		p1:"蓝领作为信用空白的特殊人群，坦白说，受到的关注相对较少。随着制造业、服务业的蓬勃发展，蓝领群体逐渐流入人们的视线，加之恰逢互联网消费金融正处于爆发前夕，一种面对国内年轻蓝领的新型消费信贷形式，成功进入人们的视野。",
		p2:"近日，金融科技公司我来贷和世界百强企业富士康旗下金融品牌富金富宣布就消费金融业务达成战略合作协议。据悉，此次合作是我来贷和富金富金融的首次深度合作，也是打破蓝领市场信用空白和开启蓝领普惠金融模式的新尝试。随着校园贷款业务在各地受到抑制，今年下半年多家贷款平台宣布转型。而早在去年6月开始，我来贷就已着手向白领及蓝领市场进军。",
		p3:"很多人觉得消费金融公司的转型看似很容易，很好做。实际上，消费金融行业的进入壁垒其实很高，企业能够持续发展需要团队具有很强的金融基因，确保对风险有判别和控制。同时，需要大量资金投入系统建设以及技术团队的构建，从而打造以科技为核心的消费金融公司。",
		p4:"据艾瑞数据显示，蓝领消费金融潜在市场规模可达万亿元，预计在2019年将增长至1.7万亿元，市场空间巨大。目前，传统银行等金融机构主要服务白领客户，不服务蓝领人群，消费信贷公司对蓝领人群的渗透力低，蓝领人群消费金融市场发展潜力巨大。但蓝领人群流动性大，很少有征信记录和社保记录。目前相比于为白领人群服务的贷款业务，做蓝领消费金融的平台较少，蓝领人群贷款服务覆盖率非常低。并且，不同人群的购买行为和借贷行为完全不同，直接影响消费金融公司的获客渠道和客户运营模式。",
		href:"#"
	}//,
	// {
	// 	img:"./images/papAheadPic_02.jpg",
	// 	content:"最近，一个约10G容量，名为“女大学生裸条”的照片和视频压缩包在网上疯传，其中女生大多出生于1993-1997年，最年轻的还不满18岁。<br/>事实上，“裸条”是一种“抵押物”，有它，女生才能拿到P2P借款，这样的借贷行为被称为“裸贷”。如此，当女生借款逾期后，P2P催收员就能拿出催款“杀手锏”，给予其超常的心理压力。相比传统的高利贷，裸贷的月息超30%已是不成文的规定。而更可怕的是，一切在黑产演绎下，肉偿还债，裸条买卖盛行，各种触目惊心，刷新着人们认知的底线。<br/>某P2P小伙伴告诉小郝子，其实，早在央视等大媒体曝光前，今年3、4月间，已经有一部分裸条陆续流出，很多P2P平台深感这事“捂不住”，更早已经开始了“转型”。<br/>一方面，对用户和公众，很多P2P平台重新包装“消费金融”概念，为P2P的污名脱敏；另一方面，P2P转而投身金融资产交易所（简称“金交所”），“有能耐的”的直接发起或参股建立金交所，“有思路的”也“扭捏着身体”钻入金交所的“热炕头”，参与到相关项目中去，它们将校园贷、消费分期、个人短期贷，混着各种信托收益权、债权、应收账款收益权等“资产”，改头换面，成就类证券化玩法，在金交所里寻求“接盘侠”，规避越来越严的P2P管制，玩转资产游戏，博取高回报。<br/>“但这个过程中，隐含巨大风险。”有业内人士告诉小郝子，P2P各种借贷风险不同，在金交所打包、封装的同时，并没有形成一个完善的风险识别、确定标准，如此，相关资产的“接盘侠”，若一时“猪油蒙了心，脑子勾了芡”，不能明晰其中风险，那就很可能承担风险损失，变成“背锅侠”。<br/>P2P最不该的，是刷着银行业的业绩，却投机取巧、不顾风险地去赚金融市场才有的利润。",
	// 	href:"#"
	// },
	// {
	// 	img:"./images/papAheadPic_01.jpg.jpg",
	// 	content:"据CNNIC最新发布的《中国互联网络发展状况统计报告》数据显示，我国网民总规模达7.10亿，购买互联网理财产品的网民规模超过1.01亿。在互金类应用、网上支付和互联网理财用户规模等诸多因素助推下，我国互金行业发展迎来了质的飞跃。<br/>但是自《网络借贷信息中介机构业务活动管理暂行办法》发布以来，这个被称为“史上最严苛”的网贷行业政策对整个行业环境产生巨大影响。网贷行业是否会被“管死”成为业界讨论焦点，有些平台在“怨声载道”中无奈退出，有些则在挑战中寻找新的机遇。《暂行办法》发布已过去三个多月的时间，积极型的平台纷纷落地一系列举措主动拥抱监管。后监管时代，在大多数平台忙于解决转型、存管、备案问题的时候，只有少数平台，从容淡定，手握合规优势。冰融贷可算其中的代表。<br/>冰融贷为哈尔滨正泰投资管理有限公司旗下P2P债权流转平台，正泰投资成立于2014年7月23日，注册资金1000万人民币。公司落户于黑龙江省会城市哈尔滨，业务涵盖了包括房屋过户、不动产抵押和汽车抵押等专业、高效、安全的综合性金融资产交易相关服务及投融资顾问服务。冰融贷筹备数个月后于2014年12月8号正式上线。业务主要针对公司的线下抵押贷款项目债权网上流转。冰融贷是中国东北地区最早的一批互联网金融平台，平台上线受到多方关注及本地政府的扶持，并于2014年10月8号获得本地政府授予“政府合作企业”牌匾。",
	// 	href:"#"
	// },
	// {
	// 	img:"./images/papAheadPic_03.jpg.jpg",
	// 	content:"今日发布合规及发展力报告的平台有：<br/>e路同心、广州易贷、搜易贷、恒易融、<br/>聚金资本、晋商贷<br/>目前累计发布报告的平台有150家。您可登陆红途官网（www.hongtuwang.com）查看简版报告。<br/>下面以友金所为例，同时释义合规与发展力报告的评审结论。<br/>根据各平台最终得牌总数，依据红途界定平台违规程度的标准，最终得出平台的违规程度，并以此作为合规评审的结论。评审结论共分为完全合规、基本合规、轻度违规、中度违规、重度违规五档。<br/>依据“红途网贷平台合法合规网络评审体系”对友金所进行逐项评审后，友金所获得的红牌+黄牌的数量为25，依据红途界定平台违规程度的标准，友金所属于重度违规。<br/>友金所违规的部分主要集中在其理财产品上。友金所是用友集团旗下企业，背靠用友集团的强大资源，债权真实度高，但是平台主要采取的是理财产品的模式，而且友金所依然在运营现在许多平台已经停止发售的活期理财产品，也正是由于这些理财产品造成了友金所在模式及信披上的违规。好在友金所的债权真实度高，整改难度不大，且政策风险极低。",
	// 	href:"#"
	// }
];
function contentAnchor(option){
	var box = document.createElement("div");
	box.className = "contentBody";
	box.innerHTML = "<img src=\"" + option.img + "\" />"
					+ "<p>" + option.p1 + "</p>"
					+ "<p>" + option.p2 + "</p>"
					+ "<p>" + option.p3 + "</p>"
					+ "<p>" + option.p4 + "</p>"
					+ "<a href=\"" + option.href + "\">查看原文 ></a>";
	return box;
};
var contentFragment = document.createDocumentFragment();
contentData.forEach(function(item){
	contentFragment.appendChild(contentAnchor(item));
});
document.getElementById("contentWrap").appendChild(contentFragment);