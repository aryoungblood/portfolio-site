<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 48em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media screen and (max-width: 55em) {
    main {
      padding: 0 0.5em;
    }
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
