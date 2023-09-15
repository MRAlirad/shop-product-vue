<template>
	<div class="cart-item">
		<div class="img-box">
			<img
				:src="image"
				:alt="title"
			/>
		</div>
		<div class="content">
			<h3>{{ title }}</h3>
			<div class="item__data">
				<div>
					Price per Item:
					<strong>${{ price }}</strong>
				</div>
				<div>
					Quantity:
					<strong>{{ qty }}</strong>
				</div>
			</div>
			<div class="item__total">Total: ${{ itemTotal }}</div>
			<Button
				text="Remove"
				type="red"
			/>
			<!-- <button @click="remove">Remove</button> -->
		</div>
	</div>
</template>

<script>
	import Button from './Button.vue';

	export default {
		components: {
			Button,
		},
		props: ['prodId', 'title', 'image', 'price', 'qty'],
		computed: {
			itemTotal() {
				return (this.price * this.qty).toFixed(2);
			},
		},
	};
</script>

<style scoped>
	.cart-item {
		padding: 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		text-align: center;
		width: 75%;
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}

	.img-box {
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
		overflow: hidden;
	}

	.img-box img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 15px;
		align-items: center;
	}

	.content h3 {
		width: 100%;
	}

	.item__data {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.item__total {
		font-weight: bold;
		border-top: 1px solid #474747;
		border-bottom: 1px solid #474747;
		padding: 0.25rem 0;
		width: 100%;
	}
</style>
