<script>
  import IconExternalLink from "../components/icons/IconExternalLink.svelte";

  export let link;
</script>

<style>
  svg {
    fill: #cc89e8;
    height: 25.484px;
    width: 30px;
  }

  .bold-link:hover .mag-glass {
    animation-direction: alternate;
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-name: bounce;
  }

  @keyframes bounce {
    from {
      transform: translateX(-10px);
    }

    to {
      transform: none;
    }
  }
</style>

<a class="bold-link" href={link}>
  <svg
    class="mag-glass"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 25.484">
    <path
      d="M12.659,4.378a9.459,9.459,0,1,1,1.109,11.578c-1.728,1.506-9.649,8.368-11.7,9.461-.878.468-2.492-1.66-1.8-2.38,1.605-1.681,10.349-7.458,12.265-8.716a9.39,9.39,0,0,1-1.117-2.793c-1.73-.71-2.852-1.8-2.852-3.171,0-1.713,1.656-3.2,4.1-3.979Zm.167,7.612a8.211,8.211,0,1,0,1.716-8.037,13.492,13.492,0,0,1,1.936-.137c4.371,0,8.69,3.08,7.92,5.449-.642,1.977-3.977,3.179-7.706,3.179a15.83,15.83,0,0,1-3.866-.454Zm-.2-.723a12.262,12.262,0,0,0,4.287.706c3.146,0,5.96-1.015,6.5-2.683.65-2-2.994-4.6-6.682-4.6a10.861,10.861,0,0,0-3.071.428,8.247,8.247,0,0,0-1.035,6.147Zm5.14-6.289a3.236,3.236,0,1,1-3.236,3.235,3.237,3.237,0,0,1,3.236-3.235Zm-5.888.914a3.245,3.245,0,0,0-1.828,2.632,2.514,2.514,0,0,0,1.192,2.016,9.525,9.525,0,0,1,.636-4.648Z"
      transform="translate(-0.097 0)"
      fill-rule="evenodd" />
  </svg>
  view
  <IconExternalLink />
</a>
