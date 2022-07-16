<script>
  const canHover = window.matchMedia('(hover: hover)').matches;

  function handleMouseEnter(e) {
    if (canHover) {
      e.target.closest('li')
        .setAttribute('style', 'color: var(--c);');
    }
  }

  function handleMouseLeave(e) {
    if (canHover) {
      e.target.closest('li')
        .setAttribute('style', 'color: var(--a);');
    }
  }

  export let projects;
</script>

<section id="work">
  <h1>Selected works</h1>
  <ul>
    {#each projects as project}
      <li>
        {project.emoji}
        <a 
          href={project.url} 
          target="_blank"
          on:mouseenter={handleMouseEnter}
          on:mouseleave={handleMouseLeave}
        >{project.title}</a>
        {project.blurb}
        <aside>
          <h3>{project.scope}</h3>
          <p>{project.tools}</p>
        </aside>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    padding-top: 5rem;
  }

  h1 {
    font-size: 1em;
  } /* repeated for tools */

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    margin: 2rem 0 5rem;
  }

  li {
    position: relative;
  }

  aside {
    font-size: 0.8em;
  }

  h3 {
    font-size: 0.8em;
    text-transform: uppercase;
  }

  p {
    line-height: 1.33;
  }

  @media (hover: hover) {
    li:hover {
      z-index: 9;
    }
    aside {
      display: none;
      background-color: var(--a);
      position: absolute;
      left: -1.25rem;
      top: -3.25rem;
      width: calc(100% + 2.5rem);
      height: calc(200% + 4.5rem);
      flex-direction: column;
      justify-content: space-between;
      border-radius: 2px;
      padding: 1.25rem;
      z-index: -1;
    }
    a:hover + aside {
      display: flex;
    }
  }

  @media (hover: none) {
    li {
      padding: 3.5rem 0.5rem 1rem;
      border: 1px solid;
      border-radius: 4px;
    }
    h3 {
      position: absolute;
      left: 0;
      top: 0;
      padding: 0.5rem 0.25rem;
      width: 100%;
      background: var(--a);
      color: var(--c);
    }
    aside {
      margin-top: 2rem;
    }
  }

  @media (min-width: 768px) {
    ul {
      gap: 3rem;
    }
  }

  @media (max-width: 767px) {
    ul {
      gap: 2rem;
    }
  }
</style>