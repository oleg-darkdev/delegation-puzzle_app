<script lang="ts">
	import { SEO, NextStepBtn, PrevStepBtn } from '$shared';
	import { SmallHero, Footer, InstructionScreenApp } from '$widgets';
	import {} from '$entities';

	let stepInstruction = 0,
		selectedMenu = 1,
		finalGame = false;
</script>

<SEO title="App" />

<div class="bg-black min-h-screen">
	{#if selectedMenu}
		<main class="overflow-y-scroll overflow-x-hidden  h-[85vh] py-20 flex flex-col justify-center items-center content-center">
			{#if selectedMenu == 1}
				<SmallHero />
			{:else if selectedMenu == 2}
				<InstructionScreenApp />
			{/if}
		</main>

		<footer class="fixed  bottom-0 left-0 w-full">
			<div class="grid grid-cols-2 gap-10 w-full max-w-4xl py-10 mx-auto">
				<button on:click={() => (selectedMenu = 1)} class="btn w-button">Prezentacja</button>
				<button on:click={() => (selectedMenu = 2)} class="btn w-button">Instrukcja</button>
			</div>
		</footer>
	{:else}
		<Footer>
			<button on:click={() => (selectedMenu = true)} class="circle-cta w-inline-block">
				<div class="btn-txt">Zacząć delegować</div>
			</button>
		</Footer>
	{/if}
</div>

<style lang="postcss">
</style>
