<script lang="ts">
	import Card from '$lib/components/Card/index.svelte';
	import Grid from '$lib/components/Grid/index.svelte';
	import Typography from '$lib/components/Typography/index.svelte';
</script>

<Grid padding={1} direction="column">
	<Card>
		<Grid>
			<Typography variant="xl">TD Ameritrade</Typography>
			<Typography>Howdy</Typography>
		</Grid>
	</Card>
</Grid>
