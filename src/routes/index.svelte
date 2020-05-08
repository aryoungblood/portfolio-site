<script context="module">
  export function preload({ params, query }) {
    return this.fetch("work/work.json")
      .then(r => r.json())
      .then(work => {
        return { work };
      });
  }
</script>

<script>
  export let work;
</script>

<svelte:head>
  <title>Alyson Youngblood</title>
</svelte:head>

<main>
  <h1>Work</h1>

  {#each work as entry}
    <section>
      <h2>{entry.title}</h2>
      <p>{entry.year}</p>
      <p>{entry.link}</p>
      <p>{entry.contributions}</p>
      <p>{entry.tools}</p>
      <p>
        {@html entry.html}
        <img src={entry.image} alt="" />
      </p>
    </section>
  {/each}
</main>
