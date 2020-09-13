<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`blog/${params.slug.replace('.md', '')}.json`);

    return res.ok ? { post: await res.json() } : this.error(404, 'Not found');
  }
</script>

<script>
  import ExploreMore from "../../components/ExploreMore.svelte";
  export let post;
</script>

<svelte:head>
  <title>Blog • {post.title}</title>
  <meta name="description"
        content="post.description"/>
</svelte:head>

<article>
  <h1>{post.title}</h1>

  <p class="date">{post.presentationDate}</p>

  <p>{@html post.html}</p>
</article>

<ExploreMore destination="blog" link="blog" />

<style>
  h1 {
    border-bottom: 1px solid rgba(163, 163, 163, 0.3);
    color: #a3a3a3;
    font-family: Source Code Pro, Consolas, "Courier New", monospace;
    font-size: 1.5rem;
    margin: 0 0 2rem;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
  }
</style>