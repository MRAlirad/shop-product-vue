<template>
	<button
		class="btn"
		:class="type"
		@click="$emit('on-click')"
	>
		{{ text }}
	</button>
</template>

<script>
	export default {
		props: {
			text: String,
			type: {
				type: String,
				default: 'primary',
			},
		},
		emits: ['on-click'],
	};
</script>

<style scoped>
	.btn {
		font: inherit;
		cursor: pointer;
		padding: 0.5rem 1.5rem;
		border-radius: 30px;
	}

	button.secondary {
		border: 1px solid #45006d;
		background-color: transparent;
		color: #45006d;
	}

	button.secondary:hover,
	button.secondary:active {
		background-color: #f0d5ff;
	}

	button.primary {
		background-color: #45006d;
		color: white;
		border: 1px solid #45006d;
	}

	button.primary:hover,
	button.primary:active {
		background-color: #760ab4;
		border-color: #760ab4;
	}
</style>
