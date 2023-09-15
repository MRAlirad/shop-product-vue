<template>
	<button @click="$emit('on-click')">
		{{ text }}
	</button>
</template>

<script>
	export default {
		props: ['text'],
		emits: ['on-click'],
	};
</script>

<style scoped>
	button {
		font: inherit;
		cursor: pointer;
		padding: 0.5rem 1.5rem;
		border: 1px solid #45006d;
		background-color: transparent;
		color: #45006d;
		border-radius: 30px;
	}

	button:hover,
	button:active {
		background-color: #f0d5ff;
	}
</style>
