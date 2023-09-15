<template>
	<span
		class="badge"
		:class="['badge--' + mode]"
	>
		{{ text }}
	</span>
</template>

<script>
	export default {
		props: {
			text: String | Number,
			mode: {
				type: String,
				default: 'highlight'
			}
		},
	};
</script>

<style scoped>
	.badge {
		display: inline-block;
		padding: 0.15rem 1.25rem;
		background-color: #ccc;
		color: #292929;
		border-radius: 30px;
		width: max-content;
	}

	.badge--highlight {
		background-color: #f0b800;
		color: black;
		font-weight: bold;
	}

	.badge--elegant {
		background-color: #45006d;
		color: white;
	}
</style>
