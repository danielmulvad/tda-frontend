<nav>
	<ul>
		<li><a href="/">TradeTracker</a></li>
	</ul>
</nav>

<style lang="scss">
	nav {
		background: var(--background);
		border-bottom: 1px solid var(--border);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: calc($navbar-height - 1px);
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
		color: var(--foreground);
		text-decoration: none;
	}
</style>
