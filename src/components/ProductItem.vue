<template>
	<div class="product-item">
		<div class="product__data">
			<div class="product__image">
				<img
					:src="image"
					:alt="title"
				/>
			</div>
			<div class="product__text">
				<h3>{{ title }}</h3>
				<Badge :text="price" />
				<p>{{ description }}</p>
			</div>
		</div>
		<div class="product__actions">
			<Button
				text="Add to Cart"
				@on-click="addToCart"
			/>
		</div>
	</div>
</template>

<script>
	import Button from './Button.vue';
	import Badge from './Badge.vue';

	export default {
		components: {
			Button,
			Badge,
		},
		props: ['id', 'image', 'title', 'price', 'description'],
		methods: {
			addToCart() {
				this.$store.dispatch('cart/addToCart', {
					id: this.id,
				});
			},
		},
	};
</script>

<style scoped>
	.product-item {
		width: 100%;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
	}

	.product__data {
		display: flex;
		gap: 1rem;
	}

	.product__image {
		width: 10rem;
		height: 10rem;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 10px;
	}

	.product__image img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.product__text {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.product__actions {
		text-align: center;
	}
</style>
