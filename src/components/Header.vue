<template>
	<header>
		<h1>
			<router-link to="/">VueShop</router-link>
		</h1>
		<nav>
			<ul>
				<li>
					<router-link to="/products">Products</router-link>
				</li>
				<li>
					<router-link to="/cart">Cart</router-link>
					<Badge
						mode="elegant"
						:text="cart.qty"
					/>
				</li>
				<li v-if="isLoggedIn">
					<router-link to="/admin">Admin</router-link>
				</li>
			</ul>
		</nav>
		<div>
			<Button
				v-if="!isLoggedIn"
				@on-click="login"
				text="Login"
				type="secondary"
			/>
			<Button
				v-if="isLoggedIn"
				@on-click="logout"
				text="Logout"
				type="secondary"
			/>
		</div>
	</header>
</template>

<script>
	import Button from './Button.vue';
	import Badge from './Badge.vue';

	export default {
		components: {
			Button,
			Badge,
		},
		inject: ['isLoggedIn', 'login', 'logout', 'cart'],
	};
</script>

<style scoped>
	header {
		height: 5rem;
		background-color: white;
		margin: 0 10%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-self: center;
		align-items: center;
	}

	li {
		margin: 0 1rem;
		display: flex;
		align-items: start;
		gap: 10px;
	}

	a {
		text-decoration: none;
		color: #333;
		font-weight: bold;
		border-bottom: 2px solid transparent;
		padding-bottom: 0.25rem;
	}

	a:hover,
	a:active,
	a.router-link-active {
		color: #45006d;
		border-color: #45006d;
	}
</style>
