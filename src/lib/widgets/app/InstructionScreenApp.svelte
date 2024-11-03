<script lang="ts">
	import { blur, crossfade, draw, fade, fly, scale, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { delegationLevels } from '$shared';
	// import {  } from '$widgets';
	import { DelegationsList, DelegationLevelCardApp } from '$entities';
	import { stepInstruction } from '$stores/app';
	import { derived } from 'svelte/store';

	// let number = 0;

	const selectedLevel = derived(stepInstruction, ($stepInstruction) => $stepInstruction - 3);
</script>

{#if $stepInstruction < 10}
	{#if $stepInstruction == 1}
		<div transition:blur class="max-w-2xl mt-20 px-4">
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
		<div
			transition:blur={{
				delay: 100,
				duration: 1000,
				easing: quintOut,
				inverse: true,
				radius: 5
			}}
			class="overflow-y-scroll overflow-x-hidden"
		>
			<DelegationsList {delegationLevels} />
		</div>
	{:else if $stepInstruction > 2 && $stepInstruction < 10}
	<!-- {selectedLevel} -->
		{#each delegationLevels as level, i (level.id)}
			{#if $stepInstruction - 3 == i}
				<div
					transition:blur={{
						delay: 100,
						duration: 1000,
						easing: quintOut,
						inverse: true,
						radius: 5
					}}
					class=""
				>
					<DelegationLevelCardApp delegationLevel={delegationLevels[$stepInstruction - 3]} />
				</div>
			{/if}
		{/each}
	{/if}
{:else if $stepInstruction == 10}
	<h2>end wscren</h2>
{/if}

<style lang="postcss">
</style>
