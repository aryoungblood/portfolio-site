<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`blog/${params.slug.replace('.md', '')}.json`);

    return res.ok ? { post: await res.json() } : this.error(404, 'Not found');
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>Blog • {post.title}</title>
  <meta name="description"
        content="post.description"/>
</svelte:head>

<article>
  <h1>{post.title}</h1>
</article>
