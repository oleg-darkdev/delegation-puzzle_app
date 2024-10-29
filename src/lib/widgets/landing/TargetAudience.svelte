

<script lang="ts">
    // import {  } from '$shared';
    // import {  } from '$widgets';
    // import {  } from '$entities'
  const targetAudience = [
    {
      title: 'Założycieli',
      desc: `Odpowiednia dla założycieli małych firm i start-upów, ponieważ uczy, jak skutecznie rozdzielać zadania i obowiązki w zespole - kluczowa umiejętność dla pomyślnego rozwoju młodego biznesu. Jest to szczególnie ważne, gdy zasoby są ograniczone: właściwe delegowanie pozwala założycielom skupić się na strategicznych zadaniach bez utraty kontroli nad procesami.`
    },
    {
      title: 'Liderów',
      desc: `Liderzy mogą zrozumieć, jak określić najbardziej odpowiedni poziom kontroli i autonomii - w oparciu o informacje zwrotne od zespołu, zachowując równowagę między zaufaniem a odpowiedzialnością.`
    },
    {
      title: 'Samoorganizujący się',
      desc: `Nadaje się do samoorganizujących się zespołów, ponieważ pomaga uczestnikom rozwijać umiejętności niezależnego podejmowania decyzji i zrozumienia podziału odpowiedzialności i pomaga budować kulturę świadomego delegowania zadań. `
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
      <!-- <p class="paragraph txt-on-dark">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p> -->
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
