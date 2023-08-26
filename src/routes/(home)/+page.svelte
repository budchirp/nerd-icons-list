<script lang="ts">
  import { copy } from '$lib/copy'
  import MiniSearch from 'minisearch'

  export let data

  let icons: any[] = data.icons

  let miniSearch = new MiniSearch({
    fields: ['key'],
    storeFields: ['key', 'icon']
  })
  miniSearch.addAll(data.icons)

  let searchText: string = ''
  const search = () => {
    if (searchText) {
      icons = miniSearch.search(searchText) as any
    }
  }

  $: if (searchText === '' && icons !== data.icons) {
    icons = data.icons
  }
</script>

<svelte:head>
  <title>Nerd icons list</title>
</svelte:head>

<div class="space-y-4">
  <input
    class="bg-secondary !outline-none rounded-full w-full border border-primary placeholder-gray-800 dark:placeholder-gray-200 py-3 px-8"
    placeholder="Search icons"
    type="text"
    bind:value={searchText}
    on:change={search}
    on:input={search}
  />

  <div class="flex justify-center">
    <div class="grid gap-4 grid-cols-5 md:grid-cols-9">
      {#each icons as icon}
        <div class="w-min h-min flex items-center justify-center flex-col text-center">
          <button
            on:click={() => copy(icon.icon)}
            class="bg-secondary hover:bg-primary rounded-2xl h-14 w-14 flex items-center text-center text-lg justify-center flex-col border border-primary"
          >
            {icon.icon}
          </button>
        </div>
      {/each}
    </div>
  </div>
</div>
