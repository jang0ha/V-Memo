<template>
	<div>
		<div class="mb-4 d-flex justify-content-end">
			<button class="btn btn-primary" @click="add()"> + 추가</button>
		</div>
		<ul class="memo">
			<li v-for="(list, idx) in state.data" :key="idx">{{ list }}</li>
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
			axios.post('/api/memos', {content})
				.then((res) => {
					//성공 핸들링
					state.data = res.data;
				})
		}
		axios.get('/api/memos')
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