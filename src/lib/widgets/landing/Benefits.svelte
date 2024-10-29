<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	const benefits = [
		{
			title: `Ćwiczenie umiejętności delegowania w bezpiecznym środowisku`,
			desc: `Gra pozwala uczestnikom na przećwiczenie rzeczywistych sytuacji związanych z delegowaniem zadań w formie swobodnej rozgrywki. Pomaga to eksperymentować z podejściami i lepiej zrozumieć równowagę między kontrolą a zaufaniem, bez narażania procesów pracy.`,
			width: `_70w`
		},
		{
			title: `Budowanie kultury pracy zespołowej i samoorganizacji`,
			desc: `Gra pomaga zespołowi dzielić się zadaniami i obowiązkami, rozwijając umiejętności pracy zespołowej i wsparcia. To doświadczenie pomaga budować zaufanie, zrozumienie i szacunek w zespole, wspierając zespół zdolny do samoorganizacji.`,
			width: `_80w`
		},
		{
			title: `Zwiększenie zaangażowania i motywacji zespołu`,
			desc: `Dzięki zaangażowaniu w proces decyzyjny każdy z uczestników ma poczucie ważności i odpowiedzialności, co zwiększa jego motywację. Gra pozwala każdemu uczestnikowi uświadomić sobie, jak jego wkład wpływa na wynik, co zwiększa zaangażowanie i zaufanie do lidera.`,
			width: `_70w`
		},
		{
			title: `Wszechstronność dla różnych typów zespołów i biznesów`,
			desc: `Gra jest dostosowana zarówno do małych start-upów, jak i dużych zespołów nastawionych na samoorganizację. Jest to elastyczne narzędzie, które ułatwia dostosowanie scenariuszy i wykorzystanie ich do poprawy umiejętności zarządzania w różnych typach organizacji.`,
			width: `_80w`
		}
	];
</script>

<div class="section-150-150 tf10-pattern-bg">
	<div class="container">
		<div class="w-layout-grid grid-row-30 _50w">
			<div class="overline txt-on-white"></div>
			<h2 class="h3-heading">Jakie są korzyści?</h2>
			<p class="paragraph txt-on-white">
				Delegation puzzle - wszechstronny i skuteczny sposób na rozwijanie umiejętności
				przywódczych, kultury zaufania i pracy zespołowej w każdym zespole.
			</p>
		</div>
		<div class="_50w mb-150"></div>
		<div class="w-layout-grid grid-2col-row-50">
			{#each benefits as { title, desc, width }}
				<div class={width}>
					<div class="w-layout-grid grid-row-10">
						<h5>{title}</h5>
						<p class="txt-on-white">
							{desc}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
</style>
