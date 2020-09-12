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
  <h2>
    <a
         href="blog/{post.slug}.md">{post.title}</a>
  </h2>
  <p>{post.presentationDate}</p>
  <p>Hello</p>
{/each}

