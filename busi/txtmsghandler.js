
function txtMsgHandler(msg){
	var resMsg = {};

	switch (msg.content) {
		case "0":
			var articles = [];
				articles[0] = {
				title: "圣诞夜活动啦！",
				description: "圣诞夜抽奖活动中，随抽随中，每个小时都有机会。发送自己的编号给小伙伴，立刻增加一次机会。",
				picUrl: "http://suryawechatpub.herokuapp.com/images/mr.jpg",
				url: "http://mp.weixin.qq.com/mp/appmsg/show?__biz=MjM5MTI3MTc3Mg==&appmsgid=10013170&itemidx=1&sign=7560e14a44865b0b383b5a6f00109095#"
			};

			articles[1] = {
				title: "醉在巴厘岛",
				description: "醉在巴厘岛",
				picUrl: "http://suryawechatpub.herokuapp.com/images/baolidao.jpg",
				url: "http://suryawechatpub.herokuapp.com/"
			};

			articles[2] = {
				title: "雾霾杭城 无法呼吸",
				description: "杭州雾霾",
				picUrl:  "http://suryawechatpub.herokuapp.com/images/wumai.jpg",
				url: "http://suryawechatpub.herokuapp.com/"
			};
			resMsg = {
				fromUserName: msg.toUserName,
				toUserName: msg.fromUserName,
				msgType: "news",
				articles: articles,
				funcFlag: 0
			}
			break;
		case "tt":
			console.log(">>>>>>>>>>>>>toUserName:"+msg.toUserName);
			if(msg.fromUserName =='oXOmHjvXEiEcUlLGsZzY_5t9XxeI'){
				console.log(">>>>>>>>>>>>>ready to send msg to toUserName:oXOmHjvXEiEcUlLGsZzY_5t9XxeI");
				resMsg = {
					fromUserName: msg.toUserName,
					toUserName: msg.fromUserName,
					msgType: "text",
					content: "您好,感谢您参与我们的抽奖活动。我们将在接下去的活动中通知您进一步细节。userName:"+msg.fromUserName,
					funcFlag: 0
				};
			}
			else
			{
				resMsg = {
					fromUserName: msg.toUserName,
					toUserName: msg.fromUserName,
					msgType: "text",
					content: "您好,感谢您参与我们的抽奖活动。userName:"+msg.fromUserName,
					funcFlag: 0
				};
			}	
			break;
		case "T":
			var tmpUrl="http://suryawechatpub.herokuapp.com/lott?userid="+msg.fromUserName+"&lottcount=1";
			var articles = [];
			articles[0] = {
				title: "圣诞夜活动啦！",
				description: "圣诞夜抽奖活动中，随抽随中，每个小时都有机会。发送自己的编号给小伙伴，立刻增加一次机会。",
				picUrl: "http://suryawechatpub.herokuapp.com/images/mr.jpg",
				url: tmpUrl
			};
			resMsg = {
				fromUserName: msg.toUserName,
				toUserName: msg.fromUserName,
				msgType: "news",
				articles: articles,
				funcFlag: 0
			}
			break;
		case "pub":
			 resMsg = {
				fromUserName: msg.toUserName,
				toUserName: msg.fromUserName,
				msgType: "text",
				content: "我们将在不久推出本地PM2.5查询功能，谢谢关注。",
				funcFlag: 0
			};
			break;
		case "hi":
		 resMsg = {
			fromUserName: msg.toUserName,
			toUserName: msg.fromUserName,
			msgType: "text",
			content: "Hi,this is surya.I am glad you follow me.Hope this public wechat help.",
			funcFlag: 0
		};
		break;
		case "Hi":
		 resMsg = {
			fromUserName: msg.toUserName,
			toUserName: msg.fromUserName,
			msgType: "text",
			content: "Hi,this is surya.I am glad you follow me.Hope this public wechat help.",
			funcFlag: 0
		};
		break;
		case "help":
			// 返回文本消息
			resMsg = {
				fromUserName: msg.toUserName,
				toUserName: msg.fromUserName,
				msgType: "text",
				content: "Input '0' for the latest news.请输入0，获得最新的消息。",
				funcFlag: 0
			};
			break;

		case "music":
			// 返回音乐消息
			resMsg = {
				fromUserName: msg.toUserName,
				toUserName: msg.fromUserName,
				msgType: "music",
				title: "音乐标题",
				description: "音乐描述",
				musicUrl: "音乐url",
				HQMusicUrl: "高质量音乐url",
				funcFlag: 0
			};
			break;

		case "pic":
			var articles = [];
			articles[0] = {
				title: "圣诞夜活动啦！",
				description: "圣诞夜抽奖活动中，随抽随中，每个小时都有机会。发送自己的编号给小伙伴，立刻增加一次机会。",
				picUrl: "http://suryawechatpub.herokuapp.com/images/mr.jpg",
				url: "http://mp.weixin.qq.com/mp/appmsg/show?__biz=MjM5MTI3MTc3Mg==&appmsgid=10013170&itemidx=1&sign=7560e14a44865b0b383b5a6f00109095#"
			};

			articles[1] = {
				title: "醉在巴厘岛",
				description: "醉在巴厘岛",
				picUrl: "http://suryawechatpub.herokuapp.com/images/baolidao.jpg",
				url: "http://suryawechatpub.herokuapp.com/"
			};

			articles[2] = {
				title: "雾霾杭城，无法呼吸",
				description: "杭州雾霾",
				picUrl:  "http://suryawechatpub.herokuapp.com/images/wumai.jpg",
				url: "http://suryawechatpub.herokuapp.com/"
			};
			resMsg = {
				fromUserName: msg.toUserName,
				toUserName: msg.fromUserName,
				msgType: "news",
				articles: articles,
				funcFlag: 0
			}
			break;
		default:
			resMsg = {
				fromUserName: msg.toUserName,
				toUserName: msg.fromUserName,
				msgType: "text",
				content: "Hello, this is surya.What can I do for you? Try 'help' or '0'.请输入help获得帮助，输入0查看最新的文章。",
				funcFlag: 0
			};
			break;
	}
	return resMsg;
}
function myTest(){
	return "this is a test";
}
exports.txtMsgHandler=txtMsgHandler;
exports.myTest=myTest;