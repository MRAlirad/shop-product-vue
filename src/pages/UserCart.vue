<template>
	<section class="user-cart-section">
		<h2>Your Cart</h2>
		<h3>
			Total Amount:
			<Badge
				:text="cartTotal"
				mode="elegant"
			/>
		</h3>
	</section>
</template>

<script>
	import Badge from '../components/Badge.vue';

	export default {
		inject: ['cart'],
		components: {
			Badge,
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
		max-width: 40rem;
		margin: 0 auto;
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
</style>
