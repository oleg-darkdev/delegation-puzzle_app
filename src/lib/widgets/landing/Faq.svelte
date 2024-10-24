

<script lang="ts">
    import { faq } from '$shared';
    // import {  } from '$widgets';
    import { FaqCard } from '$entities'

</script>

<div class="section-150-150 wf-section">
  <div class="container rel-z-2">

    <a name="contact"></a>

    <div  class="w-layout-grid grid-row-30 _50w">
      <h2 class="overline txt-on-white">About author.</h2>
      <h3  class="h3-heading">Lorem Ipsum is simply dummy text.</h3>
      <p class="paragraph txt-on-white">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>

    <a name="faq"></a>


    <div  class="wrap mt-50">
      <a href="/" class="btn w-button">About us</a>
      
    </div>
    <h3  class="h3-heading mt-100 _50w-vert-left-al mb-50">Some questions we get asked regularly</h3>
    <div class="w-layout-grid grid-2col-row-50 ctm-mob-grid">
      {#each faq as faqData }
        <FaqCard {faqData}/>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">

</style>
