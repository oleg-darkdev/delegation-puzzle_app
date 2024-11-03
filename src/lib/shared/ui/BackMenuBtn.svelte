<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	import { selectedMenu } from '$stores/app';
</script>

<button on:click={() => ($selectedMenu = 0)} class=" btn w-button mx-auto"
	><span class="hidden sm:inline">Menu</span> <span class="inline sm:hidden">=</span>
</button>

<style lang="postcss">
</style>
