<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <link rel="preload" href="/portfolio/fonts/terminal-grotesque-webfont.woff2" as="font" type="font/woff2" crossorigin />
</svelte:head>
<Header />
<main>
  <slot></slot>
</main>
<Footer />

<style>
  @font-face {
    font-family: 'Terminal Grotesque';
    src: local('Terminal Grotesque'),
      url('/portfolio/fonts/terminal-grotesque-webfont.woff2') format('woff2'),
      url('/portfolio/fonts/terminal-grotesque-webfont.woff') format('woff'),
      url('/portfolio/fonts/terminal-grotesque-webfont.ttf') format('truetype'),
      url('/portfolio/fonts/terminal-grotesque-webfont.eot') format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    max-width: 1280px;
    margin: auto;
    font-family: 'Terminal Grotesque', sans-serif;
    font-size: 1.25rem;
    line-height: 1.125;
    background: var(--c);
    color: var(--a);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 250ms ease-in-out, color 250ms ease-in-out;
  }

  :global(a) {
    color: inherit;
  }
  
  main {
    padding: 5rem 0;
  }

  @media (prefers-color-scheme: light) {
    :global(body:not(.alt)) {
      --a: #4258ED;
      --b: #ED815A;
      --c: #fff;
    }
    :global(body.alt) {
      --a: #FFBB00;
      --b: #D6BFFF;
      --c: #000;
    }
  }

  @media (prefers-color-scheme: dark) {
    :global(body:not(.alt)) {
      --a: #FFBB00;
      --b: #D6BFFF;
      --c: #000;
    }
    :global(body.alt) {
      --a: #4258ED;
      --b: #ED815A;
      --c: #fff;
    }
  }

  @media (min-width: 768px) {
    :global(body) {
      padding: 4rem 12vw 2rem 12vw;
    }
  }

  @media (max-width: 767px) {
    :global(body) {
      padding: 2rem 1rem 3rem 1rem;
    }
  }
</style>