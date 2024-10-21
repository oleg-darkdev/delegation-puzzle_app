<script lang="ts">
	import { SEO } from '$shared';
  // Free_desc,
	import { Footer, Header, About, Benefits, Faq, Price, OtherBoardgames, TargetAudience, DelegationLevels,  BigHero, SmallHero,  } from '$widgets';
  // import {  } from ''

  export let data;


  const otherBoardgames = [
    {
      title: 'Lorem impsum',
      link: '/',
      logo: 'logos/darkdev_turq.svg'
    },
    {
      title: 'Lorem impsum',
      link: '/',
      logo: 'logos/darkdev_turq.svg'
    },
    {
      title: 'Lorem impsum',
      link: '/',
      logo: 'logos/darkdev_turq.svg'
    },
    {
      title: 'Lorem impsum',
      link: '/',
      logo: 'logos/darkdev_turq.svg'
    },
    {
      title: 'Lorem impsum',
      link: '/',
      logo: 'logos/darkdev_turq.svg'
    },
    {
      title: 'Lorem impsum',
      link: '/',
      logo: 'logos/darkdev_turq.svg'
    },
    {
      title: 'Lorem impsum',
      link: '/',
      logo: 'logos/darkdev_turq.svg'
    },
    {
      title: 'Lorem impsum',
      link: '/',
      logo: 'logos/darkdev_turq.svg'
    },
  ]
</script>


<SEO title="Home"/>

<Header />

<main class="main">
  <!-- <SmallHero /> -->

  <BigHero />

  <About />

  <DelegationLevels />

  <TargetAudience />

  <Price />

  <Faq />

  <!-- <Free_desc /> -->

  <OtherBoardgames {otherBoardgames}/>

  <Benefits />
</main>

<Footer />

<style lang="postcss">

</style>
