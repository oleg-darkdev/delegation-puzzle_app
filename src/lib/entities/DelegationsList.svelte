<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	export let delegationLevels;
</script>

<div class="flex flex-row pt-20">
	<img
		src="/images/delegation_levels.svg"
		loading="lazy"
		alt=""
		class=" h-screen w-32 delegation-levels-img"
	/>

	<div class="w-layout-grid grid-row-100 grid-row-30-mob rel-z-2 max-w-2xl">
		{#each delegationLevels as level}
			<div class="process-block lg:max-w-2xl">
				<div class="txt-on-dark mt-10 mt-0-mob">0{level.id}</div>
				<h3 class="h4-heading">
					<span class={level.textColor}>{level.title}</span>
					<img src="/images/{level.icon}" class="h-6 w-auto mb-1" alt="" />
				</h3>
				<p class="txt-on-dark max-w-[200px]">{level.subTitle}</p>
				<!--  {level.shortDesc}  -->
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
</style>
