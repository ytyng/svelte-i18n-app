<script lang="ts">
  import {getMessages} from '$lib/i18n/pathlocales'

  export let data
  const _ = getMessages(data.lang)
</script>


<div>

  Hello, {_('welcome')}
</div>
