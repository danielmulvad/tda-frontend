<nav>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
</nav>

<style lang="scss">
	@import '$lib/theme.scss';
	nav {
		background: #333;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: $navbar-height;
		padding: 0;
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0 0.5rem;
	}

	a {
		color: #fff;
		text-decoration: none;
	}
</style>
