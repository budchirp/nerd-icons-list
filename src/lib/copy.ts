import toast from 'svelte-french-toast'

const copy = (content: string): void => {
  navigator.clipboard.writeText(content)

  toast('Successfully copied!', {
    style: '',
    className: '!bg-secondary !shadow-none !py-1 !px-4 !border !text-sm !text-primary !font-medium !border-primary !rounded-full',
    position: 'bottom-center'
  })
}

export { copy }
