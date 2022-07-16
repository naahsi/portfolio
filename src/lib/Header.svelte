<script>
  function toggle() {
    const body = document.querySelector('body');
    body.classList.toggle('alt');
  }
</script>

<header>
  <a href="/">/\/</a>
  <nav>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
    <button type="button" class="toggle" on:click={toggle} />
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }

  a + :is(a, button) {
    margin-left: 1rem;
  }

  nav {
    display: flex;
    align-items: center;
  } /* repeated for footer*/

  button.toggle {
    position: relative;
    border: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    font: inherit;
    font-size: 0.8em;
    background: none;
    overflow: hidden;
    cursor: pointer;
  }

  button.toggle::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: left 250ms ease-in-out;
  }

  @media (prefers-color-scheme: light) {
    :global(body:not(.alt)) button.toggle::after {
      left: 100%;
    }
    :global(body.alt) button.toggle::after {
      left: 33%;
    }
  }

  @media (prefers-color-scheme: dark) {
    :global(body:not(.alt)) button.toggle::after {
      left: 33%;
    }
    :global(body.alt) button.toggle::after {
      left: 100%;
    }
  }

  @media (min-width: 768px) {
    button.toggle {
      border: 2px solid var(--a);
    }
    button.toggle::after {
      background: var(--a);
    }
  }

  @media (max-width: 767px) {
    header {
      position: fixed;
      bottom: 1rem;
      width: calc(100% - 2rem);
      padding: 0.5rem;
      background: var(--a);
      color: var(--c);
      border-radius: 4px;
      z-index: 9;
    }
    button.toggle {
      border: 2px solid var(--c);
    }
    button.toggle::after {
      background: var(--c);
    }
  }
</style>