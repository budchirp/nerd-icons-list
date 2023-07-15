<script>
  import { Toaster } from 'svelte-french-toast'
  import Header from '../components/Header.svelte'

  import '../styles/globals.css'
</script>

<Toaster />

<div>
  <Header />

  <main>
    <slot />
  </main>
</div>
