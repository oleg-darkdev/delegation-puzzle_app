

<script lang="ts">
    import { delegationLevels } from '$shared';
    // import {  } from '$widgets';
    // import {  } from '$entities';
</script>


<section class="section-delegation-levels bg-black wf-section">

  <div class="container">
   <div class="w-layout-grid grid-row-30 _50w">
      <div class="overline">Lorem Ipsum has been</div>
      <h3 class="h3-heading">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>
      <p class="paragraph txt-on-dark">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div class="process-wrap">
      <div class="max-w-2xl">
        <div class="process-block ">
          <div class="txt-on-dark mt-10 mt-0-mob">0</div>
          <h4 class="h4-heading">Lorem Ipsum has been </h4>
          <div class="w-layout-grid grid-row-20 mt-10 mt-0-mob grid-left-al">
            <p class="txt-on-dark">Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <a href="/" class="btn w-button">Start here</a>
          </div>
        </div>

<div class="flex flex-row pt-20">
    <img src="/images/delegation_levels.svg" loading="lazy" alt="" class="mt-[40px] h-screen w-20 process-illustr-1">

        <div class="w-layout-grid grid-row-100 grid-row-30-mob rel-z-2 max-w-2xl">
      {#each delegationLevels as level}
      <div class="process-block">
        <div class="txt-on-dark mt-10 mt-0-mob">0{level.id}</div>
        <h3 class="h4-heading">{level.title}</h3>
        <p class="txt-on-dark">{level.shortDesc}</p>
      </div>
      {/each}
      </div>
      </div>


      </div>
    </div>
  </div>
</section>


<!-- <section class="section-100-150 wf-section">
  <div class="container">
    <div class="w-layout-grid grid-row-30 _50w">
      <h2  class="h3-heading">Lorem Ipsum has been the.</h2>
      <p  class="paragraph txt-on-white">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div class="process-wrap">
      <img src="/images/levels-bg.svg" class='h-screen w-40' alt="">
      <div  class="process-lottie service-pg" ></div>
      <div class="  ">

        {#each delegationLevels as level}
        <div class="process-block">
          <div class="txt-on-dark mt-10 mt-0-mob">0{level.id}</div>
          <h3 class="h4-heading">{level.title}</h3>
          <div class=" mt-10 mt-0-mob ">
            <p class="txt-on-dark mb-10">{level.shortDesc}</p>
             <a href="/" target="_blank" class="txt-on-dark">
              <strong></strong>
            </a>
            <a href="/" class="btn w-button ">Start here</a>
          </div>
        </div>
        {/each}


        <img src="/images/delegation_levels.svg" loading="lazy" alt="" class="process-illustr-2 ">
      </div>
    </div>
  </div>
</section> -->

<style lang="postcss">
.section-delegation-levels {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-top: 9.375rem;
  /* padding-bottom: 9.375rem; */
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.process-wrap {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 100px;
  /* margin-bottom: 330px; */
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  justify-items: flex-start;
}
@media screen and (max-width: 991px) {
  .process-wrap {
    display: -ms-grid;
    display: grid;
    /* margin-bottom: 100px; */
    justify-items: end;
    -webkit-box-align: start;
    -webkit-align-items: start;
    -ms-flex-align: start;
    align-items: start;
    grid-auto-columns: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }
}
@media screen and (max-width: 767px) {
  .section-150-150 {
    padding-top: 6.25rem;
    /* padding-bottom: 6.25rem; */
  }

  .process-wrap {
    grid-auto-columns: 1fr;
    grid-column-gap: 20px;
  }
}
@media screen and (max-width: 479px) {
  .process-wrap {
    -webkit-box-align: start;
    -webkit-align-items: start;
    -ms-flex-align: start;
    align-items: start;
    -ms-grid-columns: 1fr 2fr;
    grid-template-columns: 1fr 2fr;
  }
}
</style>
