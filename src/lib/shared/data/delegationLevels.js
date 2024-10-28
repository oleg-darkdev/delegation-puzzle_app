const delegationLevels = [
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
	{
		title: `Sprzedaż`,
		subTitle: 'Spróbuję im to sprzedać',
		// title: `Sell`,
		// subTitle: 'I will try and sell it to them',
		shortDesc: `Podejmujesz decyzję za innych, ale starasz się ich przekonać, że dokonałeś właściwego wyboru i pomagasz im poczuć się zaangażowanymi.`,
		desc: [
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],
		id: 2,
		textColor: 'text-sell',
		bgColor: 'bg-sell',
		icon: 'sell_icon.svg',
		img: 'logo.svg'
	},
	{
		title: `Konsultacja`,
		subTitle: 'Skonsultuję się i podejmę decyzję',
		shortDesc: `Najpierw prosisz o opinie, a następnie bierzesz je pod uwagę przed podjęciem decyzji, szanując opinie innych.`,
		desc: [
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],
		id: 3,
		textColor: 'text-consult',
		bgColor: 'bg-consult',
		icon: 'consult_icon.svg',
		img: 'logo.svg'
	},
	{
		title: `Zgadzam się`,
		subTitle: 'Uzgodnimy to razem',
		shortDesc: `Wdajesz się w dyskusję ze wszystkimi zaangażowanymi osobami i jako grupa osiągasz konsensus w sprawie decyzji.`,
		desc: [
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],
		id: 4,
		textColor: 'text-agree',
		bgColor: 'bg-agree',
		icon: 'agree_icon.svg',
		img: 'logo.svg'
	},
	{
		title: `Doradztwo`,
		subTitle: 'Doradzę, ale to oni zdecydują',
		shortDesc: `Oferujesz innym swoją opinię i masz nadzieję, że wysłuchają twoich mądrych słów, ale to będzie ich decyzja, a nie twoja.`,
		desc: [
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],
		id: 5,
		textColor: 'text-advise',
		bgColor: 'bg-advise',
		icon: 'advise_icon.svg',
		img: 'logo.svg'
	},
	{
		title: `Zapytanie`,
		subTitle: 'Zapytam po tym, jak podejmą decyzję',
		shortDesc: `Najpierw pozostawiasz decyzję innym, a następnie prosisz ich, aby przekonali cię o mądrości swojej decyzji.`,
		desc: [
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],
		id: 6,
		textColor: 'text-inquire',
		bgColor: 'bg-inquire',
		icon: 'inquire_icon.svg',
		img: 'logo.svg'
	},

	{
		title: `Delegowanie`,
		subTitle: 'W pełni oddeleguję',
		shortDesc: `Pozostawiasz decyzję im i nie chcesz nawet wiedzieć o szczegółach, które tylko zaśmiecają twój mózg.`,
		desc: [
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
			`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
		],
		id: 7,
		icon: 'delegate_icon.svg',
		textColor: 'text-delegate',
		bgColor: 'bg-delegate',
		img: 'logo.svg'
	}
];


export default delegationLevels;
