<template>
	<div>
		<div class="mb-4 d-flex justify-content-end">
			<button class="btn btn-primary" @click="add()"> + 추가</button>
		</div>
		<ul class="memo">
			<li v-for="list in state.data" :key="list.id" @click="edit(list.id)">{{ list.content }}</li>
		</ul>
	</div>
</template>
<script>
import { reactive } from 'vue';
import axios from 'axios';
export default {
	setup() {
		const state = reactive({
			data: [],
		})
		const add = () => {
			// state.data.push("추가된 내용");
			const content = prompt('내용을 입력해주세요');
			axios.post('/api/memos', {content}) //post 데이터 등록 및 전송
				.then((res) => {
					//성공 핸들링
					state.data = res.data;
				})
		}
		const edit = (id) => { 
			// state.data[idx]//선택한 값의 인덱스값을 잡아서 수정
			const content = prompt('내용을 입력해주세요', state.data[idx]);
			// console.log(content);
			axios.put('/api/memos/' + id, { content }) //put 데이터 수정
				.then((res) => {
					//성공 핸들링
					state.data = res.data;
				})
		}
		axios.get('/api/memos') //get 데이터 조회
			.then((res) => {
				//성공 핸들링
				state.data = res.data;
			}).catch((error) => {
				console.log(error);
				//에러 핸들링
			})
		
		return {
			add,
			state,
			edit
		}
	}
}
</script>

<style lang="scss" scoped>
	.memo	{
		li	{
			text-align: left;
		}
	}
</style>