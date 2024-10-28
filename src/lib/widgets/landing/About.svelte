<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const tags = [
		'Delegowanie',
		'Przywództwo',
		'Indywidualna odpowiedzialność'
		// 'Sterowanie zadaniami'
	];
</script>

<!-- <section class="section-150-150 bg-black wf-section ">
	<div class="container rel-z-2">
		<div class="w-layout-grid grid-row-50">
			<div class="w-layout-grid grid-row-30 _50w">
				<div class="overline">Lorem Ipsum has</div>
				<h2 class="h3-heading">Lorem Ipsum has been the industry's</h2>
				<p class="paragraph txt-on-dark">
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to make a type specimen book.
				</p>
			</div>
			<div class='pb-6'>
				<a href="#about" class="btn btn-black w-button z-20">Co to #delegation-puzzle?</a>
			</div>
		</div>
	</div>
</section> -->

<a name="about"></a>

<section class="section-150-150 overfl-hidden wf-section">
	<div class="container rel-z-2">
		<div class="mob-70w">
			<div class="w-layout-grid grid-row-30 _50w">
				<div class="overline txt-on-white">O grze</div>
				<h2 class="h3-heading">Delegation puzzle - edukacyjna gra planszowa</h2>
				<p class="paragraph txt-on-white">
					Zapoznaje uczestników z praktyką skutecznego delegowania zadań
					poprzez odkrywanie i stosowanie 7 poziomów delegowania, od pełnej kontroli do pełnej
					autonomii.
				</p>

				<p class="paragraph txt-on-white">
					Gra została zaprojektowana w oparciu o model delegowania Jurgena Appelo - pomaga rozwijać
					umiejętności delegowania i uczy równowagi między kontrolą a zaufaniem, dzięki czemu jest
					przydatna zarówno dla menedżerów, jak i pracowników, którzy chcą zrozumieć zasady
					zarządzania i samoorganizacji.
				</p>
			</div>
		</div>
		<div class="_50w"></div>
		<div class="w-layout-grid grid-row-20 mt-100">
			{#each tags as tag}
				<h3 class="h5-heading">#{tag}</h3>
			{/each}
		</div>
		<div class="wrap mt-50 mb-100">
			<a href="#levels" class="btn w-button">O poziomach delegowania</a>
		</div>
	</div>

	<div class="mob-0pad-container rel-z-2">
		<div class="w-layout-grid proj-grid">
			<div class="ctm-proj-wrap left bg-tenten-black">
				<img src="/images/logo.svg" loading="lazy" alt="" class="w-64 mb-50" />

				<div class="subtitle mb-10 txt-white">О aplikacji webowej</div>
				<div class="mr-20 mb-50">
					<p class="body-small txt-on-dark mb-6">
						Aplikacja webowa została zaprojektowana jako uzupełnienie edukacyjnej gry planszowej.
					</p>
					<p class="body-small txt-on-dark">
						Pomaga graczom pogłębić zrozumienie koncepcji delegowania i ćwiczyć umiejętności w
						środowisku cyfrowym.
					</p>
				</div>
				<!-- <div class="overline mb-20">Lorem Ipsum has</div>
				<div class="w-layout-grid grid-2col-max-30 grid-hor-cent">
					<img src="" loading="lazy" width="42" alt="social logo" />
					<img src="" loading="lazy" width="42" alt="social logo" />
				</div> -->
			</div>
			<img src="/images/sreenshot.png" loading="lazy" sizes="100vw" alt="" class="proj-mockup" />
			<!-- <div class="ctm-proj-wrap right body-small">
				<p class="italic">
					“Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to make a type specimen book.”
				</p>
				<div class="w-layout-grid client-name-wrap mt-20 mb-30">
					<div class="client-name">Lorem Ipsum has been</div>
					<div class="caption">Lorem Ipsum has been &amp; Lorem Ipsum</div>
				</div>
				<a href="/" target="_blank" class="btn btn-white w-button">See results</a>
			</div> -->
		</div>
	</div>
</section>

<style lang="postcss">
</style>
