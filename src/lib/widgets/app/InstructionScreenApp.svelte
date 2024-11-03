<script lang="ts">
	import { delegationLevels } from '$shared';
	// import {  } from '$widgets';
	import { DelegationsList, DelegationLevelCardApp } from '$entities';
	import { stepInstruction } from '$stores/app';
</script>

{#if $stepInstruction < 10}
	{#if $stepInstruction == 1}
		<!-- <section> -->
		<div class="max-w-2xl mt-20 px-4">
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

		<!-- </section> -->
	{:else if $stepInstruction == 2}
		<div class="overflow-y-scroll overflow-x-hidden">
			

			<DelegationsList {delegationLevels} />
		</div>
	{:else if $stepInstruction == 3}
		<DelegationLevelCardApp delegationLevel={delegationLevels[0]} />
	{:else if $stepInstruction == 4}
		<DelegationLevelCardApp delegationLevel={delegationLevels[1]} />
	{:else if $stepInstruction == 5}
		<DelegationLevelCardApp delegationLevel={delegationLevels[2]} />
	{:else if $stepInstruction == 6}
		<DelegationLevelCardApp delegationLevel={delegationLevels[3]} />
	{:else if $stepInstruction == 7}
		<DelegationLevelCardApp delegationLevel={delegationLevels[4]} />
	{:else if $stepInstruction == 8}
		<DelegationLevelCardApp delegationLevel={delegationLevels[5]} />
	{:else if $stepInstruction == 9}
		<DelegationLevelCardApp delegationLevel={delegationLevels[6]} />
	{/if}
{:else if $stepInstruction == 10}
	<h2>end wscren</h2>
{/if}

<style lang="postcss">
</style>
