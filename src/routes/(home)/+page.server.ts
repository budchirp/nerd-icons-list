import type { PageServerLoad } from './$types'

const load: PageServerLoad = async () => {
  try {
    const res = await fetch('https://nerd-fonts-glyph.deno.dev/')
    let icons = await res.json()

    delete icons['METADATA']

    icons = Object.keys(icons).map((key, index) => {
      return {
        id: index,
        key,
        icon: icons[key].char,
        unicode: icons[key].code
      }
    })

    return { icons }
  } catch (error) {
    console.error(error)

    return { icons: [] }
  }
}

export { load }
