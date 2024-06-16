import {browser} from '$app/environment'
import '$lib/i18n' // Import to initialize. Important :)
import {locale, waitLocale} from 'svelte-i18n'
import type {LayoutLoad} from './$types'

export const load: LayoutLoad = async () => {
  console.log('root layout load')
  if (browser) {
    console.log('window.navigator.language', window.navigator.language)
  }
  // await waitLocale()
  // if (browser) {
  //     locale.set(window.navigator.language)
  // }
  // await waitLocale()
}
