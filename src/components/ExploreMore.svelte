<script>
  import IconExploreMore from '../components/icons/IconExploreMore.svelte';

  export let destination;
  export let link;
</script>

<style>
  div {
    border-top: 1px solid rgba(163, 163, 163, 0.3);
    margin-top: 3rem;
    padding-top: 2rem;
    text-align: center;
  }

  p {
    font-family: Source Code Pro, Consolas, "Courier New", monospace;
  }

  div :global(.bold-link:hover svg) {
    animation-direction: alternate;
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-name: bounce;
  }

  @keyframes bounce {
    from {
      transform: none;
    }

    to {
      transform: translateX(-10px);
    }
  }
</style>

<div>
  <p>
    <a class="bold-link"
       href={link}>
      <IconExploreMore/>

      {#if destination === 'blog'}
        more
      {:else}
        explore
      {/if}
      {destination}
    </a>
  </p>
</div>
