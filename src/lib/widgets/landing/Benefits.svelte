

<script lang="ts">
    // import {  } from '$shared';
    // import {  } from '$widgets';
    // import {  } from '$entities'
  const benefits = [
    {
      title: `Lorem Ipsum has been`,
      desc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      width: `_70w`
    },
    {
      title: `Lorem Ipsum has been`,
      desc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      width: `_80w`
    },
    {
      title: `Lorem Ipsum has been`,
      desc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      width: `_70w`
    },
    {
      title: `Lorem Ipsum has been`,
      desc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      width: `_80w`
    },
  ]
</script>

<div class="section-150-150  tf10-pattern-bg">
  <div class="container">
    <div  class="w-layout-grid grid-row-30 _50w">
      <div class="overline txt-on-white"></div>
      <h2 class="h3-heading">What are the benefits?</h2>
      <p   class="paragraph txt-on-white">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
    <div class="_50w mb-150"></div>
    <div class="w-layout-grid grid-2col-row-50">
     {#each benefits as {title, desc, width}}
      <div   class="{width}">
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
