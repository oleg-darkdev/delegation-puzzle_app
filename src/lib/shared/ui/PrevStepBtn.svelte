<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	const prevStep = () => step--;

	export let step, text;
</script>

<button on:click={prevStep} class="btn btn-black w-button">{text}</button>
