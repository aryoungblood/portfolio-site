<script>
  import IconExploreMore from "../components/icons/IconExploreMore.svelte";
</script>

<style>
  div {
    border-top: 1px solid rgba(163, 163, 163, 0.3);
    margin-top: 3rem;
    padding-top: 2rem;
    text-align: center;
  }

  p {
    font-family: Source Code Pro, Plex Mono, Fira Mono, Consolas, Courier,
      monospace;
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
    <a class="bold-link" href=".">
      <IconExploreMore />
      explore work
    </a>
  </p>
</div>
