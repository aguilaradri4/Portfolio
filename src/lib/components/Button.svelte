<!-- Button.svelte -->
<script>
let { href = "#", variant = "cyan" } = $props();
</script>

<a
  {href}
  class="neon-button {variant}">
  <slot />
</a>

<style>
  .neon-button {
    display: inline-block;
    padding: 0.75rem 2rem;
    border-radius: 9999px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(4px);
    border: .75px solid;
    letter-spacing: 0.02em;
    cursor: pointer;
    text-align: center;
  }

  /* ===== CYAN VARIANT ===== */
  .neon-button.cyan {
    color: var(--neon-cyan, #00f0ff);
    border-color: var(--neon-cyan, #00f0ff);
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.2), inset 0 0 10px rgba(0, 240, 255, 0.05);
  }

  .neon-button.cyan:hover {
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.5), 0 0 60px rgba(0, 240, 255, 0.15);
    transform: scale(1.02);
    background: rgba(0, 240, 255, 0.08);
  }

  /* ===== MAGENTA VARIANT ===== */
  .neon-button.magenta {
    color: var(--neon-magenta, #ff00e6);
    border-color: var(--neon-magenta, #ff00e6);
    box-shadow: 0 0 10px rgba(255, 0, 230, 0.2), inset 0 0 10px rgba(255, 0, 230, 0.05);
  }

  .neon-button.magenta:hover {
    box-shadow: 0 0 20px rgba(255, 0, 230, 0.5), 0 0 60px rgba(255, 0, 230, 0.15);
    transform: scale(1.02);
    background: rgba(255, 0, 230, 0.08);
  }

  /* ===== PURPLE VARIANT ===== */
  .neon-button.purple {
    color: var(--neon-purple, #7b2ffc);
    border-color: var(--neon-purple, #7b2ffc);
    box-shadow: 0 0 10px rgba(123, 47, 252, 0.2), inset 0 0 10px rgba(123, 47, 252, 0.05);
  }

  .neon-button.purple:hover {
    box-shadow: 0 0 20px rgba(123, 47, 252, 0.5), 0 0 60px rgba(123, 47, 252, 0.15);
    transform: scale(1.02);
    background: rgba(123, 47, 252, 0.08);
  }

  /* ===== GOLD VARIANT ✨ ===== */
  .neon-button.gold {
    color: #ffd700;
    border-color: #ffd700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.25), inset 0 0 10px rgba(255, 215, 0, 0.06);
    background: rgba(255, 215, 0, 0.04);
  }

  .neon-button.gold:hover {
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.6), 0 0 70px rgba(255, 215, 0, 0.2);
    transform: scale(1.02);
    background: rgba(255, 215, 0, 0.1);
    color: #ffe44d;
    border-color: #ffe44d;
  }

  /* ===== DARK GOLD (More subtle, premium) ===== */
  .neon-button.gold-dark {
    color: #c9a84c;
    border-color: #c9a84c;
    box-shadow: 0 0 10px rgba(201, 168, 76, 0.2), inset 0 0 10px rgba(201, 168, 76, 0.05);
    background: rgba(201, 168, 76, 0.04);
  }

  .neon-button.gold-dark:hover {
    box-shadow: 0 0 20px rgba(201, 168, 76, 0.5), 0 0 60px rgba(201, 168, 76, 0.15);
    transform: scale(1.02);
    background: rgba(201, 168, 76, 0.08);
    color: #e8c84e;
    border-color: #e8c84e;
  }

  /* ===== GOLD GRADIENT (Extra fancy!) ===== */
  .neon-button.gold-gradient {
    color: #fff8e7;
    border-color: #ffd700;
    background: linear-gradient(135deg, #c9a84c, #ffd700, #f0c040);
    background-size: 200% 200%;
    animation: gold-shimmer 3s ease-in-out infinite alternate;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.25);
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  .neon-button.gold-gradient:hover {
    animation: gold-shimmer 1.5s ease-in-out infinite alternate;
    transform: scale(1.02);
    box-shadow: 0 0 40px rgba(255, 215, 0, 0.4), 0 0 80px rgba(255, 215, 0, 0.15);
  }

  @keyframes gold-shimmer {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
</style>
