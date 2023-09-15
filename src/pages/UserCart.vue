<template>
	<section class="user-cart-section">
		<h2>Your Cart</h2>
		<h3>
			Total Amount:
			<Badge
				:text="`$ ${cartTotal}`"
				mode="elegant"
			/>
		</h3>
		<div class="user-cart-container">
			<CartItem
				v-for="{productId, title, image, price, qty} in cart.items"
				:key="productId"
				:prodId="productId"
				:title="title"
				:image="image"
				:price="price"
				:qty="qty"
			/>
		</div>
	</section>
</template>

<script>
	import Badge from '../components/Badge.vue';
	import CartItem from '../components/CartItem.vue';

	export default {
		inject: ['cart'],
		components: {
			Badge,
			CartItem,
		},
		computed: {
			cartTotal() {
				return this.cart.total.toFixed(2);
			},
		},
	};
</script>

<style scoped>
	.user-cart-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		padding: 0 20% 50px;
	}
	h2 {
		color: #292929;
		text-align: center;
		border-bottom: 2px solid #ccc;
		padding-bottom: 1rem;
		width: 100%;
	}

	h3 {
		text-align: center;
	}

	.user-cart-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		width: 100%;
		padding: 0 10%;
		align-items: center;
	}
</style>
