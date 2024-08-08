<template lang="">
	<div>
		{{ message }}
	</div>
</template>
<script setup>
defineProps({
	message: {
		type: String,
		default: 'Hello, Vue.js!',
	},
})
</script>
<style lang=""></style>
