// 处理响应体
let obj = JSON.parse($response.body);

// 修改 nickName 字段
if (obj.data) {
    obj.data.nickName = "测试";
}

$done({
  status: 200,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj)
});
