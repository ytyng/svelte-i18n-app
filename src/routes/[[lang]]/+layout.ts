import '$lib/i18n' // Import to initialize. Important :)
import {locale, waitLocale} from 'svelte-i18n'
import type {LayoutLoad} from './$types'

export const load: LayoutLoad = async ({params}) => {
  console.log('layout load', params.lang)
  await waitLocale()
  if (params.lang) {
    console.log('locale set', params.lang)
    locale.set(params.lang)
  }
}

export const prerender = true;
export const trailingSlash = 'always';
