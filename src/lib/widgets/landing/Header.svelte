

<script lang="ts">
    import { navigation } from '$shared';
    // import {  } from '$widgets';
    // import {  } from '$entities'
</script>

<header class="navbar wf-section">
  <div class="navbar-container">
    <div class="flex justify-between w-full">
      <a href="/" class="nav-logo-link w-inline-block">
        <img src="/images/logo.svg" loading="lazy" alt="" class="h-10 nav-logo">
      </a>
      <!-- <div class="menu-wrap">
        <div class="menu-ye-bg-60h">
          <div class="menu-grid">
            {#each navigation as {title, link}}
              <a href="{link}" class="nav-link">{title}</a>
            {/each}

            <a href="#" class="btn btn-white w-button">Get Started</a>
          </div>

        </div>
      </div> -->

           <div class="">
            {#each navigation as {title, link}}
              <a href="{link}" class="nav-link">{title}</a>
            {/each}

            <!-- <a href="#" class="btn btn-white w-button">Get Started</a> -->
           </div>

      <a href="#" class="menu-btn w-inline-block">
        <img src="/images/menu.svg" loading="lazy" alt="" class="menu-icon">
      </a>
    </div>
  </div>
</header>

<style lang="postcss">

</style>
