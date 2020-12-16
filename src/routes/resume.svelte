<script>
  import ExploreMore from "../components/ExploreMore.svelte";
</script>

<style>
  h2 {
    border-bottom: 1px solid rgba(163, 163, 163, 0.3);
    color: #a3a3a3;
    font-family: Source Code Pro, Consolas, "Courier New", monospace;
    font-size: 1.5rem;
    margin: 0 0 2rem;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
  }

  h3 {
    color: #a3a3a3;
    font-size: 1rem;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.5rem;
  }

  h4 span {
    color: #a3a3a3;
    font-size: 0.78em;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .container {
    display: grid;
    column-gap: 4rem;
    grid-template-columns: 1fr max-content;
  }

  .note {
    color: #a3a3a3;
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  .segment {
    margin-bottom: 3rem;
  }

  .role {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 37em) {
    .container {
      grid-template-columns: 1fr;
    }
  }
</style>

<svelte:head>
  <title>Resume • Alyson Youngblood</title>
  <meta
    name="description"
    content="Resume for Alyson Youngblood, designer and developer." />
  <meta
    name="keywords"
    content="design, front-end development, resume, designer, developer, data
    visualization" />
</svelte:head>

<h1 class="access">Resume</h1>

<div class="container">
  <div class="main">
    <h2>Work Experience</h2>

    <section class="segment">
      <h3>RAND Corporation</h3>

      <div class="role">
        <h4>
          UX/UI Designer
        </h4>

        <p class="note">
          Internal titles in this role: Communications Analyst (2019–present),
          Front End Developer (2016–2019)
        </p>

        <p>
          Working closely with colleagues, I design and develop digital
          products—tools, interactives, articles, data visualizations, animations, and
          more—that tell stories about policy research. I contribute at every
          stage of the creative process, including concept development,
          ideation, wireframing, prototyping, visual design, and front end
          development.
        </p>
      </div>

      <div class="role">
        <h4>
          Website Specialist
        </h4>

        <p class="note">
          2012–2016
        </p>

        <p>
          Responsible for a wide variety of work on and for RAND’s website,
          including analytics, design, and front-end development. A key
          accomplishment in this role was designing an internal dashboard
          for publication metrics.
        </p>
      </div>
    </section>

    <h2>Education</h2>

    <section class="segment">
      <h3>University of Pittsburgh</h3>

      <p>Master of Library and Information Science</p>
    </section>

    <section class="segment">
      <h3>San Francisco State University</h3>

      <p>Bachelor of Arts in Political Science, minor in Russian</p>
    </section>
  </div>

  <div class="side">
    <h2>Skills</h2>

    <section class="segment">
      <h3>Design</h3>

      <ul>
        <li>UX design</li>
        <li>UI design</li>
        <li>Graphic design</li>
        <li>Data visualization</li>
      </ul>
    </section>

    <section class="segment">
      <h3>Development</h3>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Svelte</li>
      </ul>
    </section>

    <h3>Tools</h3>

    <section class="segment">
      <ul>
        <li>Adobe XD</li>
        <li>Illustrator</li>
        <li>Photoshop</li>
      </ul>
    </section>
  </div>
</div>

<ExploreMore destination="work" link="."/>
