<script context="module">
  export function preload({ params, query }) {
    return this.fetch("resume/resume.json")
      .then(r => r.json())
      .then(resume => {
        return { resume };
      });
  }
</script>

<script>
  export let resume;
</script>

<h1>Resume</h1>

<p>
  {@html resume}
</p>
