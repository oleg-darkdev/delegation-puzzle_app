<script lang="ts">


	import { SEO, NextStepBtn, PrevStepBtn, BackMenuBtn } from '$shared';
	import { SmallHero, Footer, InstructionScreenApp } from '$widgets';
	// import {} from '$entities';
	import { selectedMenu, stepInstruction } from '$stores/app';
	// let stepInstruction = 0,
	// 	selectedMenu = 1,
	// 	finalGame = false;
</script>

<SEO title="App" />

<div class="bg-black h-screen">
	{#if $selectedMenu}
		<main
			class="overflow-y-scroll overflow-x-hidden h-[94vh] py-20 flex flex-col justify-center items-center content-center"
		>
			{#if $selectedMenu == 1}
				<SmallHero />
			{:else if $selectedMenu == 2}
				<InstructionScreenApp />
			{/if}
		</main>

		<footer class="fixed bottom-0 left-0 w-full">
			<div class="w-full max-w-4xl mx-auto py-10">
				{#if $selectedMenu < 2}
					<div class="grid grid-cols-2 gap-x-8 px-4">
						<button on:click={() => ($selectedMenu = 1)} class="btn w-button">Prezentacja</button>
						<button on:click={() => ($selectedMenu = 2)} class="btn w-button">Instrukcja</button>
					</div>
				{:else}
					<!-- grid grid-cols-3 gap-x-4 -->
					<div class="grid grid grid-cols-[18%_35%_35%] gap-x-4 ">
						
						<BackMenuBtn />

						{#if $selectedMenu == 1}
							<h2>///</h2>
						{:else if $selectedMenu == 2 && $stepInstruction <= 9}
							<!-- <div class="grid grid-cols-2 gap-6 my-20"> -->
							<PrevStepBtn bind:step={$stepInstruction} text="Poprzedni slajd" />

							<NextStepBtn bind:step={$stepInstruction} text="Następny slajd" />
							<!-- </div> -->
						{/if}
					</div>
				{/if}
			</div>
		</footer>
	{:else}
		<Footer>
			<button on:click={() => ($selectedMenu = true)} class="z-20 bg-black circle-cta w-inline-block">
				<div class="btn-txt">Zacząć <br/> delegować</div>
			</button>
		</Footer>
	{/if}
</div>

<style lang="postcss">
</style>
