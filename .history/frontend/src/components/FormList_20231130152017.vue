<template>
	<div class="mb-4 d-flex justify-content-end">
		<button class="btn btn-primary" @click="add()"> + 추가</button>
	</div>
	<ul class="memo">
		<li v-for="(list, idx) in state.data" :key="idx">{{ list }}</li>
	</ul>
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
			state.data.push("추가된 내용");
		}
		axios.get('http://localhost:3000/memos')
			.then((res) => {
				//성공 핸들링
				console.log(res);
			}).catch((error) =>	{
				//에러 핸들링
			})
		
		return {
			add,
			state
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