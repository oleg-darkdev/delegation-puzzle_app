<script lang="ts">
	import { SEO, delegationLevels } from '$shared';
	// Free_desc,
	import {
		Footer,
		Header,
		About,
		Benefits,
		Faq,
		Price,
		OtherBoardgames,
		TargetAudience,
		DelegationLevels,
		BigHero,
		SmallHero
	} from '$widgets';
	// import {  } from '$widgets';
	import { TheoryDelegationLevels, DelegationsList } from '$entities';

	export let data;

	import { useSWR } from 'sswr';

	const otherBoardgames = [];
</script>

<SEO title="Home" />

<Header />

<main class="main">
	<!-- <SmallHero /> -->

	<BigHero />

	<About />

	<DelegationLevels>
		<div class="" slot="top">
			<TheoryDelegationLevels {delegationLevels} />
		</div>

		<div class="" slot="bottom">
			<DelegationsList {delegationLevels} />
		</div>
	</DelegationLevels>

	<TargetAudience />

	<!-- <Price /> -->

	<Faq />

	<!-- <Free_desc /> -->

	<!-- <OtherBoardgames {otherBoardgames}> -->

	<Benefits />
</main>

<Footer>
	<a href="/app" class="circle-cta w-inline-block">
		<div class="btn-txt">Get started</div>
	</a>
</Footer>

<style lang="postcss">
</style>
