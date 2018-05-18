var http = require("http");
var lg_num = 0;
http.createServer(function (request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    // 发送响应数据 "Hello World"
    response.end('Hello World,之前共访问' + lg_num +"次");
    //记录范文次数,去除favicon.ico干扰
    if(request.url !== '/favicon.ico'){
        lg_num++;
    }
}).listen(8888);
// 终端打印如下信息
//console.log('Server running at http://127.0.0.1:8888/');