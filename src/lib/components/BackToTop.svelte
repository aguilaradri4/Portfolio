<!-- src/lib/components/BackToTop.svelte -->
<script>

  import { onMount } from 'svelte'; 
  let { color = 'cyan' } = $props();
  
  const colorMap = {
    cyan: '--neon-cyan',
    magenta: '--neon-magenta',
    purple: '--neon-purple',
    gold: '--neon-gold',
  };
  
  let isVisible = $state(false);

  function handleScroll() {
    isVisible = window.scrollY > 300;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  });

</script>

{#if isVisible}
  <button
    class="back-to-top"
    class:cyan={color === 'cyan'}
    class:magenta={color === 'magenta'}
    class:purple={color === 'purple'}
    class:gold={color === 'gold'}
    onclick={scrollToTop}
    aria-label="Back to top"
  >
    <span class="arrow">↑</span>
  </button>
{/if}

<style>
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid;
    background: rgba(10, 10, 15, 0.8);
    backdrop-filter: blur(8px);
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fade-in 0.3s ease;
  }

  .back-to-top:hover {
    transform: scale(1.1) translateY(-2px);
  }

  .back-to-top:active {
    transform: scale(0.95);
  }

  /* ===== COLOR VARIANTS ===== */
  .cyan {
    border-color: var(--neon-cyan, #00f0ff);
    color: var(--neon-cyan, #00f0ff);
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.15), inset 0 0 20px rgba(0, 240, 255, 0.05);
  }
  .cyan:hover {
    box-shadow: 0 0 30px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.1), inset 0 0 30px rgba(0, 240, 255, 0.08);
  }

  .magenta {
    border-color: var(--neon-magenta, #ff00e6);
    color: var(--neon-magenta, #ff00e6);
    box-shadow: 0 0 20px rgba(255, 0, 230, 0.15), inset 0 0 20px rgba(255, 0, 230, 0.05);
  }
  .magenta:hover {
    box-shadow: 0 0 30px rgba(255, 0, 230, 0.3), 0 0 60px rgba(255, 0, 230, 0.1), inset 0 0 30px rgba(255, 0, 230, 0.08);
  }

  .purple {
    border-color: var(--neon-purple, #a11dff);
    color: var(--neon-purple, #a11dff);
    box-shadow: 0 0 20px rgba(161, 29, 255, 0.15), inset 0 0 20px rgba(161, 29, 255, 0.05);
  }
  .purple:hover {
    box-shadow: 0 0 30px rgba(161, 29, 255, 0.3), 0 0 60px rgba(161, 29, 255, 0.1), inset 0 0 30px rgba(161, 29, 255, 0.08);
  }

  .gold {
    border-color: var(--neon-gold, #ffec1c);
    color: var(--neon-gold, #ffec1c);
    box-shadow: 0 0 20px rgba(255, 236, 28, 0.15), inset 0 0 20px rgba(255, 236, 28, 0.05);
  }
  .gold:hover {
    box-shadow: 0 0 30px rgba(255, 236, 28, 0.3), 0 0 60px rgba(255, 236, 28, 0.1), inset 0 0 30px rgba(255, 236, 28, 0.08);
  }

  .arrow {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .back-to-top:hover .arrow {
    transform: translateY(-2px);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    .back-to-top {
      bottom: 1.5rem;
      right: 1.5rem;
      width: 44px;
      height: 44px;
      font-size: 1.25rem;
    }
  }

  @media (max-width: 480px) {
    .back-to-top {
      bottom: 1rem;
      right: 1rem;
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }
  }
</style>