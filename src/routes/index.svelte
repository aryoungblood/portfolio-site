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
  import IconMagGlass from "../components/icons/IconMagGlass.svelte";
  import IconExternalLink from "../components/icons/IconExternalLink.svelte";

  export let work;
</script>

<style>
  h1 {
    color: #a3a3a3;
    font-family: Source Code Pro, Plex Mono, Fira Mono, Consolas, Courier,
      monospace;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .entry {
    border: 1px dotted #a3a3a3;
    border-left: none;
    border-right: none;
    padding-top: 1rem;
  }

  .entry h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .entry h2 span {
    color: #a3a3a3;
    font-size: 1.25rem;
  }

  .entry img {
    border-radius: 4px;
    max-width: 425px;
  }

  .content {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
  }

  .details {
    color: #a3a3a3;
    font-size: 1rem;
  }

  .details dt {
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  .details dd {
    margin: 0 0 1rem;
  }
</style>

<svelte:head>
  <title>Alyson Youngblood</title>
</svelte:head>

<main>
  <h1>Work</h1>

  {#each work as entry}
    <section class="entry">
      <h2>
        {entry.title}
        <span>({entry.year})</span>
      </h2>

      <div class="content">
        <a href={entry.link}>
          <img src={entry.image} alt={entry.image_description} />
        </a>

        <div class="text">
          <div>
            {@html entry.html}
          </div>
          <p>
            <a class="bold-link" href={entry.link}>
              <IconMagGlass width="30" height="25.484" />
              view
              <IconExternalLink />
            </a>
          </p>

          <dl class="details">
            <dt>Contributions:</dt>
            <dd>{entry.contributions}</dd>

            <dt>Tools:</dt>
            <dd>{entry.tools}</dd>
          </dl>
        </div>
      </div>
    </section>
  {/each}
</main>
