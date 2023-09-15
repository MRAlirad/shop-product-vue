<template>
	<section class="products-list">
		<ProductItem
			v-for="{ id, title, image, description, price } in products"
			:key="id"
			:id="id"
			:title="title"
			:image="image"
			:description="description"
			:price="price"
		/>
	</section>
</template>

<script>
	import ProductItem from '../components/ProductItem.vue';

	export default {
		components: {
			ProductItem,
		},
		inject: ['products'],
	};
</script>

<style scoped>
	.products-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		max-width: 40rem;
		margin: 0 auto;
	}
</style>
