
<script lang="ts">
    // import {  } from '$shared';
    // import {  } from '$widgets';
    // import {  } from '$entities'

	export let delegationLevels;
</script>

<!-- w-layout-grid grid-row-30 _50w pt-20 -->
<div class="max-w-2xl mt-20 px-4">
	<div class="overline">Poziomy delegowania</div>

	<h3 class="h3-heading mb-20">7 poziomów delegowania to model symetryczny.</h3>
	<p class="paragraph mb-6 txt-on-dark">
		Organizacje są złożonymi systemami, a badania pokazują, że takie systemy często działają
		najlepiej, gdy kontrola jest rozproszona. Oznacza to, że władza jest przekazywana do wszystkich
		zakątków sieci organizacyjnej.
	</p>

	<p class="paragraph mb-6 txt-on-dark">
		Zdefiniowanie kluczowych obszarów decyzyjnych polega na wzniesieniu ogrodzenia wokół
		samoorganizacji, podczas gdy zwiększanie i zmniejszanie poziomu delegowania (na kluczowy obszar
		decyzyjny) polega na znalezieniu odpowiedniego poziomu kontroli.
	</p>

	<p class="paragraph mb-6 txt-on-dark">
		Siedem poziomów delegowania można wykorzystać do określenia sposobu, w jaki podejmowanie decyzji
		jest delegowane od menedżera do jednostki lub zespołu, od zespołu lub jednostki do menedżera
		oraz między jednostkami lub zespołami w sposób peer-to-peer.
	</p>

	<p class="paragraph mb-6 txt-on-dark">
		7 poziomów delegowania to model symetryczny. Działa w obu kierunkach. Poziom 2 jest podobny do
		poziomu 6, gdy patrzy się na niego z przeciwnej perspektywy. A poziom 3, jest odwrotnością
		poziomu 5 i t.d.
	</p>

	<!--  -->
	<div class="mb-20 xl:grid-cols-2 grid lg:grid-cols-2 md:grid-cols-2 grid-col-2 gap-y-4 w-full">
		{#each delegationLevels as level}
			<div class="process-block max-w-sm">
				<div class="txt-on-dark mt-10 mt-0-mob">0{level.id}</div>
				<h3 class="h4-heading">
					<span class={level.textColor}>{level.title}</span>
					<img src="/images/{level.icon}" class="h-6 w-auto mb-1" alt="" />
				</h3>
				<!-- <p class="txt-on-dark">{level.shortDesc}</p> -->
				<!--  {level.shortDesc}  -->
			</div>
		{/each}
	</div>

	<p class="paragraph mb-6 txt-on-dark">
		Jednak wiele osób woli nie „tracić kontroli”. Dlatego, aby poczuli się bezpiecznie, musimy dać
		im poczucie, że mają pewną kontrolę nad swoją sytuacją. Właśnie dlatego osoba, która chce
		delegować pracę komuś innemu, może skorzystać z siedmiu poziomów delegowania.
	</p>
</div>

<style lang="postcss">
</style>
