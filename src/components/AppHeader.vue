<template>
	<header>
		<nav>
			<router-link to="/">Main</router-link>
			<span style="margin: 0 10px;"></span>
			<router-link to="/signup">Signup</router-link>
		</nav>
	</header>
</template>

<style scoped>
header {
	background-color: #4a90e2;
	color: white;
	padding: 2rem 2rem;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

nav {
	display: flex;
	align-items: center;
	justify-content: center;
}

nav a {
	font-size: 1.4rem;
	color: white;
	text-decoration: none;
	font-weight: bold;
	margin-right: 20px;
	transition: 0.1s;
}

nav a:hover {
	color: #dfdfdf;
}

.router-link-exact-active {
  border-bottom: 1px solid #ffffff;
}

</style>