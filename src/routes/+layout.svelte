<script lang="ts">
  import { Toaster } from 'svelte-french-toast'
  import Header from '../components/Header.svelte'

  import '../styles/globals.css'
</script>

<Header />

<main>
  <slot />
</main>

<Toaster />
