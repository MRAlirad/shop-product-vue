<template>
	<div class="app">
		<Header />
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from './components/Header.vue';

	export default {
		components: {
			Header,
		},
	};
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}

	.app {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
