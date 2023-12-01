const express = require('express')
const app = express()
const port = 3000

const memos = [//1. 배열 생성
	"메모1", "메모1","메모1","메모3","메모4",
]

app.get('/api/memos', (req, res) => {//2.url변경 api 꼭 붙히기
  res.send(memos)//3.배열을 넣음
})

//4. FormList.vue >>  axios.get('주소')넣기

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})