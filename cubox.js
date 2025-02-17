// 处理响应体
let obj = JSON.parse($response.body);

// 修改 nickName 字段
if (obj.data) {
    obj.data.nickName = "测试";
}

// 将修改后的对象转回字符串
$done({body: JSON.stringify(obj)});
