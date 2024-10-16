

<script>
	import { dev } from '$app/environment';
	export let error, status;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="col-md-9">
	<h1>{status}</h1>

	<!-- <p>{error.message}</p> -->


</div>
