<svelte:options tag="custom-button" />

<script>
  import { createEventDispatcher } from 'svelte'
  import { get_current_component } from 'svelte/internal'
  import Loading from './Loading.svelte'
  const component = get_current_component()
  const svelteDispatch = createEventDispatcher()
  const dispatch = (name, detail) => {
    component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
    return svelteDispatch(name, detail)
  }
  export let text = ''
  export let loading = false
  function onClick(e) {
    dispatch('tap')
  }
</script>

<button class="custom-button" on:click={onClick}>
  {#if loading}
    <Loading />
  {/if}
  <slot>{text}</slot>
</button>

<style>
  .custom-button {
    font-size: 2rem;
    background-color: #256eff;
    box-shadow: 0px 15px 27px 2px rgba(37, 110, 255, 0.28);
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 3rem;
    border-radius: 1rem;
    color: #fff;
    cursor: pointer;
  }
</style>
