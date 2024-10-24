

<script lang="ts">
    // import {  } from '$shared';
    // import {  } from '$widgets';
    // import {  } from '$entities'
  const targetAudience = [
    {
      title: 'Założycieli',
      desc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      title: 'Liderów',
      desc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      title: 'Lorem Ipsum has',
      desc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
  ]
</script>


<section class="section-150-150 bg-black wf-section">
  <div class="container">

    <a name="for-whom"></a>

    <div class="w-layout-grid grid-row-30 _50w">
      <!-- Is it right for me -->
      <div class="overline">Czy jest <span class="txt-col-yellow">Delegation Puzzle</span> dla mnie odpowiedni?</div>
      <!-- For founders, small to medium sized businesses and people with ideas. -->
      <h3 class="h3-heading">Dla założycieli, małych i średnich firm, liderów zespołów, którzy chcą rozwijać kulturę delegowania zadań.</h3>
      <p class="paragraph txt-on-dark">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>

    
    <div class="w-layout-grid grid-3col col-80 mt-100">
      {#each targetAudience as {title, desc}}
        <div class="w-layout-grid grid-row-20 grid-dist-top-left-al">
          <h4 class="h5-heading">Dla <span class="txt-col-yellow">{title}</span>, </h4>
          <p class="txt-on-dark">
            {desc}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">

</style>
