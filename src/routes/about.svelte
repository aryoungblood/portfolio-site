<script>
  import ExploreMore from "../components/ExploreMore.svelte";
</script>

<svelte:head>
  <title>About • Alyson Youngblood</title>
  <meta
    name="description"
    content="About Alyson Youngblood, designer and developer." />
  <meta
    name="keywords"
    content="design, front-end development, designer, developer, data
    visualization" />
</svelte:head>

<h1>About</h1>

<p>
  I design and build digital products. From data visualizations to
  interactives to animations, I explore the possibilities of digital
  communication with interdisciplinary teams. I work at every stage of the
  creative process, including concept development, ideation, wireframing,
  prototyping, visual design, and front end development.
</p>

<ExploreMore destination="work" link="."/>

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