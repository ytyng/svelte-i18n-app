import type { Handle } from '@sveltejs/kit'
// import { locale } from 'svelte-i18n'

export const handle: Handle = async ({ event, resolve }) => {
 const lang = event.url.toString().match(/\/([a-z]{2})\//)?.[1] || 'en'
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', lang)
  })
}
