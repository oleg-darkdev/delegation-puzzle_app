

<script lang="ts">
    // import {  } from '$shared';
    // import {  } from '$widgets';
    // import {  } from '$entities'
  // export let selectedMenu;
</script>

<footer class="footer wf-section">
  <div class="container">
    <div class="footer-content">
      <div class="w-layout-grid grid-row-30 _40w ">
        <!-- <div class="overline">Lorem Ipsum is simply dummy text</div> -->
        <h3 class="h3-heading">Rozłóż delegowanie zadań - jak puzzle.</h3>
        <p class="overline z-20">Projekt jest częścią projektu <a href="https://puzzle-management.vercel.app/" class='txt-col-yellow' target="_blank">Puzzle Management</a> </p>
      </div>
      <div class="abs-wrap flex-hor-all-cent ">
        <div class="abs-container flex-hor-all-cent">
          <div class="footer-cta-wrap">
            <img src="/images/footer_doodle_arrow.svg" loading="lazy" alt="doodle arrow" class="footer-arrow">
            <slot></slot>
          </div>
        </div>
      </div>
      
      <img src="/images/logo.svg" loading="lazy" class='h-60 mt-100' alt="Delegation puzzle logo">
      <!-- <div class="footer-copyr-wrap mt-100">
        <div  class="copyright-txt txt-on-dark">©2024-2025 44games™. All rights reserved.</div>
        <img src="/images/logo.svg" loading="lazy" class='h-16' alt="Delegation puzzle logo">
      </div> -->
    </div>
  </div>
</footer>


<style lang="postcss">
.footer-landing {
  padding-bottom: 6.25rem;
}

.footer-yellow-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50px;
  background-color: #ffe600;
}


.footer-arrow {
  position: relative;
  bottom: -40px;
  -webkit-transform: rotate(-20deg);
  -ms-transform: rotate(-20deg);
  transform: rotate(-20deg);
}

.footer-copyr-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
}

.footer-cta-wrap {
  position: relative;
  left: 140px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.footer {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 150px;
  padding-bottom: 100px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
}

@media screen and (min-width: 1920px) {
    .footer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

@media screen and (max-width: 991px) {
.footer-arrow {
    bottom: -90px;
    width: 180px;
  }

  .footer-cta-wrap {
    left: 180px;
  }

  .footer {
    padding-top: 100px;
    padding-bottom: 40px;
  }
}


@media screen and (max-width: 479px) {
  .footer-yellow-wrap {
    padding-right: 20px;
    padding-left: 20px;
  }
.footer-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .footer-arrow {
    bottom: auto;
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
  }

  .footer-copyr-wrap {
    display: -ms-grid;
    display: grid;
    margin-top: 0px;
    justify-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
  }

  .footer-cta-wrap {
    left: -5%;
    top: 7vh;
  }

  .footer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100vh;
    min-height: 667px;
    padding-bottom: 30px;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
}
</style>
