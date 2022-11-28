<script>
  import CustomButton from './lib/Button.svelte'
  let loading = false
  function onTap(e) {
    loading = true
    setTimeout(() => {
      loading = false
    }, 2000)
  }
</script>

<main>
  <CustomButton bind:loading on:tap={onTap}>Start</CustomButton>
</main>
