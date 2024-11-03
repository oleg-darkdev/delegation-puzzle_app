<script lang="ts">
	import { blur, crossfade, draw, fade, fly, scale, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { delegationLevels } from '$shared';
	// import {  } from '$widgets';
	import { DelegationsList, DelegationLevelCardApp } from '$entities';
	import { stepInstruction } from '$stores/app';
	import { derived } from 'svelte/store';

	const START_DELEGATION_LEVELS_INSTRUCTION = 2,
		END_DELEGATION_LEVELS_INSTRUCTION = 9;

	const selectedLevelData = derived(stepInstruction, ($stepInstruction) => {
		console.log($stepInstruction);
		// console.log($stepInstruction < 10)
		if ($stepInstruction < END_DELEGATION_LEVELS_INSTRUCTION)
			return ($stepInstruction = $stepInstruction - START_DELEGATION_LEVELS_INSTRUCTION);
	});
</script>

{#if $stepInstruction < 9}
	{#if $stepInstruction == 1}
		<div transition:slide class="max-w-2xl mt-20 px-4">
			<div class="overline">Poziomy delegowania</div>

			<h3 class="h3-heading mb-20">7 poziomów delegowania to model symetryczny.</h3>
			<p class="paragraph mb-6 txt-on-dark">
				Organizacje są złożonymi systemami, a badania pokazują, że takie systemy często działają
				najlepiej, gdy kontrola jest rozproszona. Oznacza to, że władza jest przekazywana do
				wszystkich zakątków sieci organizacyjnej.
			</p>

			<p class="paragraph mb-6 txt-on-dark">
				Zdefiniowanie kluczowych obszarów decyzyjnych polega na wzniesieniu ogrodzenia wokół
				samoorganizacji, podczas gdy zwiększanie i zmniejszanie poziomu delegowania (na kluczowy
				obszar decyzyjny) polega na znalezieniu odpowiedniego poziomu kontroli.
			</p>

			<p class="paragraph mb-6 txt-on-dark">
				Siedem poziomów delegowania można wykorzystać do określenia sposobu, w jaki podejmowanie
				decyzji jest delegowane od menedżera do jednostki lub zespołu, od zespołu lub jednostki do
				menedżera oraz między jednostkami lub zespołami w sposób peer-to-peer.
			</p>
		</div>
	{:else if $stepInstruction == 2}
		<div transition:slide class="overflow-y-scroll overflow-x-hidden">
			<DelegationsList {delegationLevels} />
		</div>
	{:else if $stepInstruction > START_DELEGATION_LEVELS_INSTRUCTION && $stepInstruction < END_DELEGATION_LEVELS_INSTRUCTION}
		{#each delegationLevels as level, i (level.id)}
			{#if $selectedLevelData == level.id}
				<div transition:slide class="">
					<DelegationLevelCardApp delegationLevel={delegationLevels[$selectedLevelData]} />
				</div>
			{/if}
		{/each}
	{/if}
{:else if $stepInstruction >= END_DELEGATION_LEVELS_INSTRUCTION}
	<!-- <h2></h2> -->
	<h3 class="h3-heading mb-20">Dziękuję za uwagę</h3>
{/if}

<style lang="postcss">
</style>
