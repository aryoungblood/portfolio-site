<script context="module">
  export function preload({ params, query }) {
    return this.fetch('blog/blog.json')
        .then(r => r.json())
        .then(posts => {
          return { posts };
        });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog • Alyson Youngblood</title>
  <meta name="description"
        content="Alyson Youngblood's blog."/>
  <meta name="keywords"
        content="design, front-end development, designer, developer, data visualization"/>
</svelte:head>

<h1>Blog Posts</h1>

{#each posts as post}
  <section>
    <h2>
      <a
              href="blog/{post.slug}.md">{post.title}</a>
    </h2>
    <p class="date">{post.presentationDate}</p>
    <p>{post.summary}</p>
  </section>
{/each}

<style>
  section {
    margin-bottom: 4rem;
  }

  h1 {
    border-bottom: 1px solid rgba(163, 163, 163, 0.3);
    color: #a3a3a3;
    font-family: Source Code Pro, Consolas, "Courier New", monospace;
    font-size: 1.5rem;
    margin: 0 0 2rem;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }


</style>
