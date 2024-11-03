<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	const prevStep = () => step--;

	export let step, text;
</script>

<button on:click={prevStep} class="btn btn-black w-button"
	><span class="hidden sm:inline">{text}</span> <span class="inline sm:hidden">&lt;</span></button
>

<style lang="postcss">
</style>
