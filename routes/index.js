var txtMsgHandler=require('../busi/txtmsghandler');
var getUser=require('../busi/userLogic');
var setUser=require('../busi/userLogic');

var weixin = require('weixin-api');

// config
weixin.token = 'pub_wechat_surya';
// 监听文本消息
weixin.textMsg(function(msg) {
    console.log("textMsg received");
    console.log(JSON.stringify(msg));

    var resMsg=txtMsgHandler.txtMsgHandler(msg);
    weixin.sendMsg(resMsg);
});

// 监听图片消息
weixin.imageMsg(function(msg) {
    console.log("imageMsg received");
    console.log(JSON.stringify(msg));
});

// 监听位置消息
weixin.locationMsg(function(msg) {
    console.log("locationMsg received");
    console.log(JSON.stringify(msg));
});

// 监听链接消息
weixin.urlMsg(function(msg) {
    console.log("urlMsg received");
    console.log(JSON.stringify(msg));
});

// 监听事件消息
weixin.eventMsg(function(msg) {
    console.log("eventMsg received");
    console.log(JSON.stringify(msg));
    if (msg.event == 'subscribe') {
        var resMsg = {};
        resMsg = {
            fromUserName: msg.toUserName,
            toUserName: msg.fromUserName,
            msgType: "text",
            content: "Thank you for following.感谢您订阅本帐号.Input '0' for latest message;输入0，查看最新的消息。Input 'help',输入help，获得帮助",
            funcFlag: 0
        };
        weixin.sendMsg(resMsg);
    }
});


exports.index = function(req, res){
    if (weixin.checkSignature(req)) {
		res.send(200, req.query.echostr);
    } else {
    	var titleInfo='微信测试平台 addby dev......';
        res.render('index', { title: titleInfo });
    }  
};
exports.weixinloop = function(req, res){
	console.log('function weixinloop called');
	weixin.loop(req, res);
};

exports.lott=function(req, res){
	console.log('function lott called');
	// var userId=req.body.userid;
	// var lottCount=req.body.lottcount;
	var userId=req.query.userid;
    var lottCount=0;

    var tmpUser=getUser.getUser(userId);
    if(tmpUser){
        console.log('function lott called:tmpUser:'+tmpUser);
        lottCount=tmpUser;
        lottCount--;
        if(lottCount<0){
            lottCount=0;
        }        
        setUser.setUser(userId,lottCount);
    }else{
        console.log('function lott called:tmpUser:'+tmpUser);
        //根据用户编号，查询用户可以抽奖的次数
        lottCount=5;
        setUser.setUser(userId,5);
    }
    
    var msg=req.query.message;
	if(!userId||userId==''){
		userId='用户为空';
	}
    if(!msg||msg==''){
        msg='';
    }
	res.render('lott', { title: '抽奖信息',message:msg ,userId:userId,lottCount:lottCount});
};

exports.lottsuc = function(req, res){
	console.log('function lottsuc called');
	res.render('lottsuc', { title: '恭喜您获奖!',message:'' });
};

exports.info = function(req, res){
    console.log('function lottsuc called');
    res.render('info', { title: '',message:'' });
};