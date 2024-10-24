

<script lang="ts">
    // import {  } from '$shared';
    // import {  } from '$widgets';
    // import {  } from '$entities'

  const price = [
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
    {
      title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      free: false,
      subscription: false,
      box: false
    },
  ]
</script>

<section class="section-0-150 bg-black wf-section">
  <div class="container">
    <div class="w-layout-grid grid-row-30 _50w">
      <div class="overline">Dlaczego warto wybrać <span class="txt-col-yellow">Delegation Puzzle</span>?</div>
      <h3 class="h3-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      <p class="paragraph txt-on-dark"></p>
    </div>

    <a name="pricing"></a>
  </div>

  <div class="mob-0pad-container">
    <div class="w-layout-grid grid-row-0 mt-100">
      <div class="w-layout-grid table-row bg-black-80p">
        <div class="table-title-row">
          <div class="subtitle">Co otrzymujesz</div>
        </div>

        <div class="flex flex-row table-header-mobile justify-end pr-8" >
          <div class="subtitle  table-header">Bezpłatnie</div>
          <div class="subtitle  table-header">Subskrypcja</div>
          <div class="subtitle  table-header">Pudełko</div>
        </div>
      </div>
      {#each price as {title, free, box, subscription}}
      <div class="w-layout-grid table-row">
          <div class="subtitle table-title-row">
            {title}
          </div>

          
        <div class="flex flex-row table-header-mobile" >
          <img src="/images/{free ? 'check-icon.svg': 'price-error.svg'}" loading="lazy" alt="{free ? '': ''}">
          <img src="/images/{box ? 'check-icon.svg': 'price-error.svg'}" loading="lazy" alt="{box ? '': ''}">
          <img src="/images/{subscription ? 'check-icon.svg': 'price-error.svg'}" loading="lazy" alt="{subscription ? '': ''}">
        </div>
        <!--  class="hide-mob" -->
      </div>
      {/each}

    </div>
  </div>
</section>

<style lang="postcss">

</style>
