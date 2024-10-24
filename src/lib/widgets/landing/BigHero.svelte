

<script lang="ts">
    // import {  } from '$shared';
    // import {  } from '$widgets';
    // import {  } from '$entities'

</script>

<section class="section-100w-100h-full rel-z-3 wf-section">
  <div class="pg-hero-mob-pb">
    <div class="container">
      <div class="grid-row-30 _70w rel-z-2">
        <h1  class="txt-white">Rozłóż delegowanie zadań w zespole.</h1>
        <div  class="_70w">
          <p class="paragraph txt-on-dark mb-1">
            Wykorzystaj <span class="txt-col-yellow">Delegation Puzzle</span>, aby wyjaśnić, kto jest odpowiedzialny za co i na jakim poziomie.
          </p>
          <p class="paragraph txt-on-dark">
            Jest to edukacyjna gra planszowa, której możesz użyć, aby zacząć praktykować zaangażowanie pracowników poprzez kontrolowaną samoorganizację i podejmowania decyzji.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="abs-wrap flex-hor-all-cent">
    <div class="abs-container flex-hor-all-cent">
      <div  class="home-hero-cta-wrap">
        <div class="arrow-wrap">
          <img src="/images/normal_arrow.svg" loading="lazy" alt="" class="">
          <!-- <div class="arrow-overlay"></div> -->
        </div>
        <a href="/app" class="yellow-cta home-hero w-inline-block ">
          <img src="images/yellow_octagon.svg" loading="eager" alt="" class="ye-cta-icon">
          <div class="btn-txt">Rozpocząć <br/> delegowanie</div>
        </a>
      </div>
    </div>
  </div>
  <!-- <div class="abs-wrap">
    <div class="abs-container is--hero-lottie">
      <div class="tf-shape-lottie" ></div>
    </div>
  </div> -->
</section>

<style lang="postcss">
.btn-txt {
  position: relative;
  z-index: 2;
  font-size: 1.1em;
  font-weight: 500;
}
.home-hero-cta-wrap {
  position: relative;
  left: 250px;
  top: 150px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
@media screen and (max-width: 991px) {
  .home-hero-cta-wrap {
    left: 0px;
    top: 30vh;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}
@media screen and (max-width: 767px) {
  .home-hero-cta-wrap {
    margin-top: -60px;
    margin-bottom: -1px;
  }
}
@media screen and (max-width: 479px) {
  .home-hero-cta-wrap {
    top: 30vh;
  }
  .btn-txt {
    position: relative;
    z-index: 2;
    font-size: 0.8em;
    font-weight: 500;
  }
}
</style>
