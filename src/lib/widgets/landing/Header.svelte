

<script lang="ts">
    import { navigation } from '$shared';
    // import {  } from '$widgets';
    // import {  } from '$entities'

    let showMenu = false;
</script>

<header class="navbar wf-section">
  <div class="navbar-container">
    <div class="flex justify-between w-full">
      <a href="/" class="nav-logo-link w-inline-block my-auto">
        <img src="/images/logo.svg" loading="lazy" alt="" class="h-10 nav-logo">
      </a>

      {#if showMenu}
      <div class="menu-wrap" on:click={()=> showMenu = !showMenu}>
        <div class="menu-mobile">
          <div class="menu-grid">
            {#each navigation as {title, link}}
              <a href="{link}" class="nav-link">{title}</a>
            {/each}

            <a href="#" class="btn btn-white w-button">Get Started</a>
          </div>

        </div>
      </div>
      {/if}

      <div class="hide-ipad">
        {#each navigation as {title, link}}
          <a href="{link}" class="nav-link">{title}</a>
        {/each}
      <!-- <a href="#" class="btn btn-white w-button">Get Started</a> -->
      </div>

      
      <button on:click={()=> showMenu = !showMenu} class="menu-btn w-inline-block">
        <img src="/images/menu.svg" loading="lazy" alt="" class="menu-icon">
      </button>
    </div>
  </div>
</header>

<style lang="postcss">
.menu-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 80%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

@media screen and (max-width: 991px) {
 .menu-wrap {
    position: absolute;
    left: 0%;
    top: 70px;
    right: 0%;
    bottom: 0%;
    z-index: 98;
    /* display: none; */
    width: 100%;
    height: 100vh;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .menu-mobile {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100vh;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #ffe600;
  }
  .menu-btn {
    position: relative;
    z-index: 99;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    width: 50px;
    height: 50px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border: 2px solid #000;
    border-radius: 50px;
    background-color: #ffe600;
  }
}
</style>
