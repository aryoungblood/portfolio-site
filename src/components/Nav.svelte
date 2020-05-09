<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(163, 163, 163, 0.3);
    font-family: Source Code Pro, Plex Mono, Fira Mono, Consolas, Courier,
      monospace;
    margin: 2rem 0 4rem;
    padding: 0 2em;
  }

  ul {
    align-items: end;
    column-gap: 1rem;
    display: grid;
    grid-template-columns: 1fr repeat(3, max-content);
    justify-content: space-between;
    margin: 0 auto;
    max-width: 72rem;
    padding: 0;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 5px;
    background-color: #cc89e8;
    display: block;
    bottom: -3px;
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
    display: block;
  }

  .name {
    font-family: Proxima Nova, Source Sans Pro, Roboto, -apple-system,
      BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans,
      Droid Sans, Helvetica Neue, sans-serif;
    font-size: 3.25rem;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: -1.25rem;
  }

  .name a {
    background: #2a2a2a;
    color: #6ed4bc;
    display: inline-block;
  }

  @media screen and (max-width: 55em) {
    nav {
      padding: 0.5em;
    }

    ul {
      row-gap: 0.25rem;
      grid-template-columns: 1fr;
    }

    a {
      padding-left: 0;
      padding-right: 0;
    }

    [aria-current]::after {
      bottom: 4px;
      height: 2px;
    }

    .name {
      margin-bottom: 0;
    }
  }
</style>

<nav>
  <ul>
    <li class="name">
      <a rel="prefetch" href=".">Alyson Youngblood</a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">
        work
      </a>
    </li>

    <!-- use rel=prefetch for resume so that Sapper prefetches
		     the resume data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'resume' ? 'page' : undefined}
        href="resume">
        resume
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li>
  </ul>
</nav>
