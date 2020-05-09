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
  import ViewLink from "../components/ViewLink.svelte";
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
    padding: 1rem 0;
  }

  .entry h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .entry h2 span {
    color: #a3a3a3;
    font-size: 1.25rem;
  }

  .image-container {
    position: relative;
  }

  .image-container::before {
    background: repeating-linear-gradient(
      -45deg,
      #a3a3a3,
      #a3a3a3 1px,
      transparent 1px,
      transparent 4px
    );
    border-radius: 4px;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    transition: bottom 250ms, left 250ms;
    width: 100%;
  }

  .image-container:hover::before {
    left: -10px;
    bottom: -10px;
  }

  .entry img {
    border-radius: 4px;
    display: block;
    max-width: 100%;
    position: relative;
  }

  .content {
    align-items: flex-start;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
        <a href={entry.link}>
          {entry.title}
          <span>({entry.year})</span>
        </a>
      </h2>

      <div class="content">
        <a class="image-container" href={entry.link}>
          <img src={entry.image} alt={entry.image_description} />
        </a>

        <div class="text">
          <div>
            {@html entry.html}
          </div>
          <p>
            <ViewLink link={entry.link} />
          </p>

          <dl class="details">
            <dt>Contributions:</dt>
            <dd>{entry.contributions}</dd>

            {#if entry.tools}
              <dt>Tools:</dt>
              <dd>{entry.tools}</dd>
            {/if}
          </dl>
        </div>
      </div>
    </section>
  {/each}
</main>
