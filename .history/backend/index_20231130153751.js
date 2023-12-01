const express = require('express')
const app = express()
const port = 3000

const memos = [//1. 배열 생성
	"메모1", "메모1","메모1","메모3","메모4",
]

app.get('/api/memos', (req, res) => {//2.url변경 api 꼭 붙히기
  res.send(memos)//3.배열을 넣음
})

//4. FormList.vue >>  axios.get('주소')넣기 > vue.config.js에 프록시 설정을 했기 때문에 /api라고 작성한다

// 5.post 요청해서 푸시함 밀어넣음
app.post('/api/memos', (req, res) => {
	res.push('추가내용')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.urlencoded({ extended: true }))
출처: https://itprogramming119.tistory.com/entry/Uncaught-in-promise-Error-AxiosError-Request-failed-with-status-code-500-해결-방법 [코딩병원:티스토리]