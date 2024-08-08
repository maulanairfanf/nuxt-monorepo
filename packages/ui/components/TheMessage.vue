<template>
	<div>Component from ui, props: {{ message }}</div>
</template>

<script setup>
defineProps({
	message: { type: String, required: true },
})
</script>
