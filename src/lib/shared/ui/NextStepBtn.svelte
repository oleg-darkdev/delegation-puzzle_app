<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	const nextStep = () => step++;

	export let step, text;
</script>

<button on:click={nextStep} class="btn w-button">{text}</button>
