

<script lang="ts">
    // import {  } from '$shared';
    // import {  } from '$widgets';
    // import {  } from '$entities'
  export let faqData;
</script>

<div  class="accordion w-dropdown">
  <div class="accordion-toggle w-dropdown-toggle">
    <div class="accordion-icon">
      <div class="accordion-lottie"></div>
    </div>
    <div class="h5-heading flex flex-row">
      <h5>{faqData.q}</h5>

      <div class="w-10 h-10">

      </div>

    </div>
  </div>
  <nav class="accordion-list w-dropdown-list">
    <div class="accordion-content">
      {#each faqData.a as answer}
        <p class="txt-on-white">
          {answer}
        </p>
      {/each}
    </div>
  </nav>
</div>

<style lang="postcss">

</style>
