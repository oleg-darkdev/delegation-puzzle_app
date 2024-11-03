<script lang="ts">
	export let delegationLevel;

	console.log(delegationLevel);
</script>

<div class="max-w-2xl mb-20 px-6">
	<!-- <div class="process-block lg:max-w-2xl"> -->
	<div class="flex flex-row">
		<div class="txt-on-dark mt-0-mob mr-4 mt-10">0{delegationLevel.id}</div>
		<h3 class="h4-heading">
			<span class={delegationLevel.textColor}>{delegationLevel.title}</span>
			<img src="/images/{delegationLevel.icon}" class="h-6 w-auto mb-1" alt="" />
		</h3>
	</div>
	<p class="mb-10 flex flex-row content-center {delegationLevel.textColor}">
		<span class="txt-on-dark mr-2">Pozycja:</span>
		{delegationLevel.subTitle}
	</p>

	<div class="mb-20">
		<span class="txt-on-dark mr-2">Krótki opis:</span>
		<p class="{delegationLevel.textColor} paragraph">{delegationLevel.shortDesc}</p>
	</div>

	<div class="">
		{#each delegationLevel.desc as desc}
			<p class="txt-on-dark paragraph mb-2">{desc}</p>
		{/each}
	</div>

	<!-- 
	
	
	{
		title: `Powiedzieć`,
		subTitle: 'Powiem im to',
		// title: `Tell`,
		// subTitle: 'I will tell them',
		shortDesc: `Podejmujesz decyzję za innych i możesz wyjaśnić swoją motywację. Dyskusja na ten temat nie jest ani pożądana, ani zakładana.`,
		desc: [
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],
		id: 1,
		textColor: 'text-tell',
		bgColor: 'bg-sell',
		icon: 'tell_icon.svg',
		img: 'logo.svg'
	},
	
	-->
</div>
