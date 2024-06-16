<script lang="ts">
  // import { _ } from 'svelte-i18n'

  import {getMessages} from '$lib/i18n/pathlocales'

  export let data
  const _ = getMessages(data.lang)
</script>


<div>

  Hello, {_('welcome')}
</div>
