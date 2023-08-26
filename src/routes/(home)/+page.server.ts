import type { PageServerLoad } from './$types'

const load: PageServerLoad = async () => {
  try {
    const res = await fetch('https://nerd-fonts-glyph.deno.dev/')
    let icons = await res.json()

    delete icons['METADATA']

    icons = Object.keys(icons).map((key) => ({
      id: key,
      key,
      icon: icons[key].char
    }))

    return { icons }
  } catch (error) {
    console.error(error)

    return { icons: [] }
  }
}

export { load }
