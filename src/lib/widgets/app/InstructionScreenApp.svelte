<script lang="ts">
	import { delegationLevels } from '$shared';
	// import {  } from '$widgets';
	import { TheoryDelegationLevels, DelegationsList, DelegationLevelCardApp } from '$entities';
	import { stepInstruction } from '$stores/app';
</script>

{#if $stepInstruction < 10}
	{#if $stepInstruction == 1}
		<!-- <section> -->
		<TheoryDelegationLevels {delegationLevels} />
		<!-- </section> -->
	{:else if $stepInstruction == 2}
		<h3 class="h3-heading">Krótki opis poziomów delegowania.</h3>

		<DelegationsList {delegationLevels} />
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
