
        var imgUrl = "http://g.huceo.com/weixin/wxfx/img/106.jpg";
        var lineLink = "http://g.huceo.com/weixin/cms/106.html";
        var descContent = ' �����������С������ŵ�΢��Ƶ�ϼ����иж�������ܰ���л�Ц�������Ӽ�����΢���Ϲۿ����������߲������Ҷ�����������㣡';
        var shareTitle = '���������е�΢��Ƶ��ѡ';
        var appid = '';
         
        function shareFriend() {
            WeixinJSBridge.invoke('sendAppMessage',{
                "appid": appid,
                "img_url": imgUrl,
                "img_width": "200",
                "img_height": "200",
                "link": lineLink,
                "desc": descContent,
                "title": shareTitle
            }, function(res) {
                //_report('send_msg', res.err_msg);
            })
        }
        function shareTimeline() {
            WeixinJSBridge.invoke('shareTimeline',{
                "img_url": imgUrl,
                "img_width": "200",
                "img_height": "200",
                "link": lineLink,
                "desc": descContent,
                "title": shareTitle
            }, function(res) {
                   //_report('timeline', res.err_msg);
            });
        }
        function shareWeibo() {
            WeixinJSBridge.invoke('shareWeibo',{
                "content": descContent,
                "url": lineLink,
            }, function(res) {
                //_report('weibo', res.err_msg);
            });
        }
        // ��΢���������������ڲ���ʼ����ᴥ��WeixinJSBridgeReady�¼���
        document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
            // ���͸�����
            WeixinJSBridge.on('menu:share:appmessage', function(argv){
                shareFriend();
            });
            // ��������Ȧ
            WeixinJSBridge.on('menu:share:timeline', function(argv){
                shareTimeline();
            });
            // ����΢��
            WeixinJSBridge.on('menu:share:weibo', function(argv){
                shareWeibo();
            });
        }, false);