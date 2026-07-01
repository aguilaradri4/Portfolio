<!-- src/routes/+page.svelte -->
<script>
  import Button from '$lib/components/Button.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data/projects.js';
  import { YouTube } from 'sveltekit-embed';
  import gallery from '$lib/assets/gallery/GRIEF4 1.gif';
  import art1 from '$lib/assets/gallery/illustration/art1.png';
  import art2 from '$lib/assets/gallery/Critical Mind_2.png';
  import art3 from '$lib/assets/gallery/NAATV_2024_COVER.png';
  import art5 from '$lib/assets/gallery/horiz_our_american_pride_in_history__1_.png';
  import art13 from '$lib/assets/gallery/DATA_ANIM.gif';
	import BackToTop from '$lib/components/BackToTop.svelte';
</script>

<div class="home-page">
  <!-- HERO SECTION - Reduced height -->
  <section class="hero">
    <div class="hero-content">
      <h1>
        <span class="text-glow-cyan">Adriana Aguilar</span>
      </h1>
      <p class="subtitle">
        <span class="star-divider">✦</span>
        Visual Content Producer
        <span class="star-divider">✦</span>
        Interactive Designer
        <span class="star-divider">✦</span>
      </p>
      <p class="bio">
        I make cool stuff for journalism using design, animation and code!
        <br />
        <span class="text-glow-cyan">My work has been in multiple projects that have been recognized with Emmy wins, nominations, Edward R. Murrows, and more.</span><span class="text-glow-magenta"></span>
      </p>
      <p class="bio text-sm! text-gray-400!">
      I designed and built this portfolio page using Svelte 5 and Tailwind.
      </p>
      <div class="cta">
        <Button href="#work" variant="cyan">View My Work</Button>
        <Button href="/about" variant="cyan">About Me</Button>
        <Button href="/resume" variant="cyan">View Resume</Button>
        
      </div>
    </div>
  </section>
 
<!-- Featured Projects -->
<section id="work" class="work-section">
<h2 class="section-title">
  <span class="star-divider">✦</span>
  Featured Projects
  <span class="star-divider">✦</span>
</h2>
<div class="project-grid">
      {#each projects as project}
        <ProjectCard {project} />
      {/each}
    </div>
</section>

<section class="reel-section">
  <h2 class="section-title">
    <span class="star-divider text-(--neon-magenta)!">✦</span>
    Motion Reel
    <span class="star-divider text-(--neon-magenta)!">✦</span>
  </h2>
  <p class="reel-subtitle">A selection of my motion graphics work</p>
  <div class="reel-wrapper">
    <YouTube youTubeId="T2pnYVmAU6c" aspectRatio="16:9" />
  </div>
  <div class="gallery-cta">
      <Button href="/videos" variant="magenta">View More Motion Work</Button>
    </div>
</section>

  <!-- NEW: GALLERY PREVIEW SECTION -->
  <section class="gallery-preview">
    <h2><span class="star-divider text-(--neon-gold)!">✦</span> More Work <span class="star-divider text-(--neon-gold)!">✦</span></h2>
    <p class="gallery-subtitle">A selection of other data work, personal illustrations, and designs</p>
    
    <div class="gallery-grid">
      <!-- gallery items -->
       <!--<a href="https://youtu.be/T2pnYVmAU6c" class="gallery-link">-->
      <div class="gallery-item"> 
        <img  src={art13} alt="Motion Graphics Reel" />
        <span class="gallery-label">Motion Graphics</span>
      </div>

      <div class="gallery-item">
        <img src= {gallery} alt="My First Valentine" />
        <span class="gallery-label">Illustration/Motion Graphics</span>
      </div>
      <div class="gallery-item">
        <img src={art1} alt="Project thumbnail" />
        <span class="gallery-label">Illustration</span>
      </div>
      <div class="gallery-item">
        <img src={art5} alt="Project thumbnail" />
        <span class="gallery-label">Intro</span>
      </div>
      <div class="gallery-item">
        <img src={art2} alt="Project thumbnail" />
        <span class="gallery-label">Data Viz</span>
      </div>
      <div class="gallery-item">
        <img src={art3} alt="Project thumbnail" />
        <span class="gallery-label">Design</span>
      </div>
    </div>
    
    <div class="gallery-cta">
      <Button href="/gallery" variant="gold">View Full Gallery</Button>
    </div>
  </section>

  <!-- projects page -->
<BackToTop color="cyan" />
</div>

<style>
  /*  Home page wrapper */
  .home-page {
    display: flex;
    flex-direction: column;
    gap: 1rem;  /* Minimal gap between sections */
  }

  /* HERO SECTION  */
  .hero {
    min-height: 40vh;  /* can change the gap between sections */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 2rem 1rem 2rem;  /*  reduced bottom padding */
  }

  .hero-content {
    max-width: 720px;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    background: linear-gradient(to right, #ffffff, #b0b0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #ffffff;
    margin: 0 0 1.5rem 0;
    letter-spacing: 0.06em;
  }


  .bio {
    font-size: 1.1rem;
    color: #ffffff;
    line-height: 1.8;
    margin: 0 0 2rem 0;
  }

  .cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* featured project section */
  .work-section {
    padding: 2rem 2rem 3rem 2rem;  /* Reduced padding */
    padding-left: 150px;
    padding-right: 150px;
    max-width: fit-content;
    margin: 0 auto;
    width: 100%;
  }

  .work-section h2 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 2.5rem;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 30px rgba(0, 240, 255, 0.08);
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }

  /* gallery css */
  .gallery-preview {
    padding: 2rem 2rem 4rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }

  .gallery-preview h2 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 30px rgba(0, 240, 255, 0.08);
  }

  .gallery-subtitle {
    text-align: center;
    color: #b0b0c0;
    font-size: 1.05rem;
    margin-bottom: 2rem;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.25rem;
  }
.gallery-item {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgba(0, 240, 255, 0.1);
    transition: all 0.4s ease;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.03);
    aspect-ratio: 1 / 1; /* Keeps it square */
  }
   .gallery-item img[src$=".gif"] {
    width: 100% !important;
    height: 100% !important;
    top: 0%;
    left: 0%;
    transform: scale(1.2);
    object-fit: cover !important;
    display: block !important;
    /* Force GIF to fill the container */
    position: relative !important;
    min-width: 100% !important;
    min-height: 100% !important;
  }
  .gallery-item img[src$=".gif"]:hover {
  transform: scale(1.3);

  }

  .gallery-item:hover {
    transform: scale(1.03);
    border-color: var(--neon-cyan);
    box-shadow: 0 0 30px rgba(0, 240, 255, 0.15);
  }

  .gallery-item img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    display: block !important;
    transition: transform 0.4s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  .gallery-label {
    position: absolute;
    bottom: 0.75rem;
    left: 0.75rem;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.7rem;
    color: var(--neon-cyan);
    border: 1px solid rgba(0, 240, 255, 0.15);
    letter-spacing: 0.04em;
  }

  .gallery-cta {
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 768px) {
    .hero {
      min-height: 50vh;  /* smaller on mobile */
      padding: 1.5rem 1.5rem 1rem 1.5rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .project-grid {
      grid-template-columns: 1fr;
    }
    .work-section {
      padding: 1.5rem 1.5rem 2rem 1.5rem;
    }

    .gallery-preview {
      padding: 1.5rem 1.5rem 3rem 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .hero {
      min-height: 40vh;
    }

    h1 {
      font-size: 2rem;
    }

    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }
  }

  /** Star animation **/

  /* twinkle stars */
.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 30px rgba(0, 240, 255, 0.08);
  flex-wrap: wrap;
}

.star-divider {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--neon-cyan);
  font-size: 1.2rem;
  text-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
  animation: twinkle 2s ease-in-out infinite alternate;
}

/* Stagger the twinkling so they don't twinkle at the same time */
.star-divider:first-child {
  animation-delay: 0s;
}

.star-divider:last-child {
  animation-delay: 1.5s;
}

@keyframes twinkle {
  0% {
    opacity: 0.4;
    transform: scale(0.9) rotate(0deg);
    text-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1) rotate(5deg);
    text-shadow: 0 0 30px rgba(0, 240, 255, 0.6), 0 0 60px rgba(0, 240, 255, 0.2);
  }
  100% {
    opacity: 0.6;
    transform: scale(1) rotate(-3deg);
    text-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
  }
}

/* ===== REEL SECTION ===== */
.reel-section {
  padding: 2rem 2rem 3rem 2rem;
  max-width: 800px;  /* Controls the overall width */
  margin: 0 auto;
  width: 100%;
}

.reel-subtitle {
  text-align: center;
  color: #b0b0c0;
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
}

.reel-wrapper {
  width: 100%;
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid rgba(123, 47, 252, 0.15);
  box-shadow: 
    0 0 40px rgba(123, 47, 252, 0.08),
    0 0 80px rgba(0, 240, 255, 0.03);
  background: #0a0a0f;
  transition: box-shadow 0.4s ease;
}

.reel-wrapper:hover {
  box-shadow: 
    0 0 50px rgba(123, 47, 252, 0.15),
    0 0 100px rgba(0, 240, 255, 0.05);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .reel-section {
    max-width: 90%;
    padding: 1.5rem;
  }

  .reel-wrapper {
    border-radius: 0.75rem;
  }
}

@media (max-width: 480px) {
  .reel-section {
    max-width: 95%;
    padding: 1rem;
  }

  .reel-wrapper {
    border-radius: 0.5rem;
  }
}
</style>