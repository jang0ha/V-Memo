const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const memos = [//1. 배열 생성
]

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.get('/api/memos', (req, res) => {//2.url변경 api 꼭 붙히기 [get  데이터 조회]
  res.send(memos)//3.배열을 넣음 리턴
})

//4. FormList.vue >>  axios.get('주소')넣기 > vue.config.js에 프록시 설정을 했기 때문에 /api라고 작성한다

// 5.[post 요청해서 푸시함 밀어넣음 데이터 등록및 전송]
app.post('/api/memos', (req, res) => {
	// console.log(req.body);
	memos.push(req.body.content);
	res.send(memos) //리턴
})

// 6. [put으로 데이터 수정]
app.put('/api/memos', (req, res) => {
	// console.log(req.body);
	memos[req.body.idx] = req.body.content; //req.body의 인덱스 값을 가져와서 밀어 넣음
	// memos.push(req.body.content);
	res.send(memos) //리턴
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

