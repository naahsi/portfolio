<script>
  import { onMount } from 'svelte';
  import Portfolio from '$lib/Portfolio.svelte';
  import Tools from '$lib/Tools.svelte';

  let copyEl;
  let msg;

  onMount(() => {
    const canHover = window.matchMedia('(hover: hover)').matches;

    if (canHover) {
      msg = 'Click to copy';
      copyEl.innerText = msg;
    } else {
      msg = 'Tap to copy';
      copyEl.innerText = msg;
    }
  });

  async function getWork() {
    const response = await fetch('work');
    const data = await response.json();
    return data;
  }

  function copy() {
    navigator.clipboard.writeText('ishaan.sinhaa@gmail.com')
      .then(() => {
        copyEl.innerText = 'Copied!';
        setTimeout(() => copyEl.innerText = msg, 2000);
      })
      .catch(() => {
        copyEl.innerText = 'Could not copy';
        setTimeout(() => copyEl.innerText = msg, 2000);
      });
  }
</script>

<svelte:head>
  <title>naahsi</title>
</svelte:head>
<section class="welcome">
  $greeting, $pronoun $verb $noun. $pronoun $verb $conjunction $verb. $verb $preposition $noun.
</section>
{#await getWork() then projects}
  <Portfolio {projects} />
{/await}
<Tools />
<section id="contact">
  <h1>
    Send me a message @ 
    <span class="email" on:click={copy}>$email</span>
    <span class="copy" bind:this={copyEl}></span>
  </h1>
</section>

<style>
  .welcome {
    padding-right: 40%;
    padding-bottom: 5rem;
    border-bottom: 1px solid;
  }

  #contact {
    padding-top: 5rem;
  }

  h1 {
    font-size: 4rem;
  }

  .email {
    cursor: pointer;
  }

  .copy {
    font-size: 1rem;
  }

  @media (hover: hover) {
    .copy {
      display: none;
    }

    .email:hover + .copy {
      display: initial;
    }
  }

  @media (min-width: 768px) {
    .welcome {
      font-size: 3rem;
    }
  }

  @media (max-width: 767px) {
    .welcome {
      font-size: 2rem;
    }
  }
</style>