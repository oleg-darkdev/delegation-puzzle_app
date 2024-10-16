
<script lang="ts">
    import SvelteSeo from 'svelte-seo'
    import { siteSeoBase } from '$lib/config.ts'

    export let title: string = ''
    export let description: string = ''

    export let ogUrl: string = ''

</script>

<SvelteSeo
  title={title ? `${siteSeoBase.title} | ${title}` : siteSeoBase.title }
  description={description || siteSeoBase.description}
  keywords={siteSeoBase.keywords}
/>
