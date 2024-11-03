<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	const nextStep = () => step++;

	export let step,text;
</script>

<button on:click={nextStep} class="btn w-button">
	<span class="hidden sm:inline">{text}</span> <span class="inline sm:hidden">&gt;</span></button
>


<style lang="postcss">
</style>
