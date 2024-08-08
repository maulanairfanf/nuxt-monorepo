<template>
	<div>
		<hello-world message="Hello App 1" />
		{{ toUpperCase('hello') }}
	</div>
</template>

<script setup>
import HelloWorld from '@monorepo/packages/components/HelloWorld'
import { toUpperCase } from '@monorepo/packages/composables/useTransformText'
</script>
