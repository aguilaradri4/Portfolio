<!-- src/routes/gallery/+page.svelte -->
<script>
  import Button from '$lib/components/Button.svelte';
  import Zoom from 'svelte-medium-image-zoom';
  import 'svelte-medium-image-zoom/dist/styles.css';
  import gallery1 from '$lib/assets/gallery/Critical Mind Logo.png';
  import gallery2 from '$lib/assets/gallery/Critical Mind_1.png';
  import gallery3 from '$lib/assets/gallery/Critical Mind_2.png';
  import gallery4 from '$lib/assets/gallery/Critical Mind_3.png';
  import gallery5 from '$lib/assets/gallery/Critical Mind_4.png';
  import gallery6 from '$lib/assets/gallery/Critical Mind_5.png';
  import gallery7 from '$lib/assets/gallery/Critical Mind_6.png';
  import gallery8 from '$lib/assets/gallery/Critical Mind_7.png';
  import gallery9 from '$lib/assets/gallery/horiz_our_american_pride_in_history__1_.png';
  import gallery10 from '$lib/assets/gallery/NAATV_2024_COVER.png';
  import gallery11 from '$lib/assets/gallery/wls_invite_hhm.png';
  import gallery12 from '$lib/assets/gallery/vlcsnap-2024-11-19-19h48m58s184.png';
  import gallery13 from '$lib/assets/gallery/Dnd.png';
  import art1 from '$lib/assets/gallery/illustration/art1.png';
  import art2 from '$lib/assets/gallery/illustration/art2.png';
   import art3 from '$lib/assets/gallery/illustration/art3.png';
  import art4 from '$lib/assets/gallery/illustration/art4.png';
  import art5 from '$lib/assets/gallery/illustration/art5.png';
  import art6 from '$lib/assets/gallery/illustration/art6.png';
  import art7 from '$lib/assets/gallery/illustration/art7.png';
  import art8 from '$lib/assets/gallery/illustration/art8.png';
  import art9 from '$lib/assets/gallery/illustration/art9.png';
  import art10 from '$lib/assets/gallery/illustration/art10.jpg';
  import art11 from '$lib/assets/gallery/illustration/art11.png';
  import art12 from '$lib/assets/gallery/illustration/art12.jpg';
  import art13 from '$lib/assets/GRIEF4 1.gif';
  import art14 from '$lib/assets/gallery/DATA_ANIM.gif';

  
  const galleryItems = [
    { src: gallery1, label: 'Data Viz', span: 'col-span-2 row-span-2' },
    { src: gallery2, label: 'Data Viz', span: '' },
    { src: gallery3, label: 'Data Viz', span: '' },
    { src: gallery4, label: 'Data Viz', span: 'col-span-2' },
    { src: gallery5, label: 'Data Viz', span: '' },
    { src: gallery6, label: 'Data Viz', span: '' },
    { src: gallery7, label: 'Data Viz', span: '' },
    { src: gallery8, label: 'Data Viz', span: '' },
    {src: gallery9, label: 'Intro', span: 'col-span-2' },
    { src: gallery10, label: 'Book Cover', span: '' },
    { src: gallery11, label: 'Invite', span: '' },
    { src: gallery12, label: 'Historical', span: '' },
    { src: gallery13, label: 'Illustration', span: '' },
    { src: art1, label: 'Illustration', span: '' },
    { src: art2, label: 'Illustration', span: '' },
    { src: art3, label: 'Illustration', span: '' },
    { src: art4, label: 'Illustration', span: 'row-span-2' },
    { src: art5, label: 'Illustration', span: '' },
    { src: art6, label: 'Illustration', span: '' },
    { src: art7, label: 'Illustration', span: '' },
    { src: art13, label: 'Mograph', span: '' },
    { src: art8, label: 'Illustration', span: 'row-span-2' },
    { src: art9, label: 'Illustration', span: '' },
    { src: art11, label: 'Illustration', span: '' },
    { src: art12, label: 'Illustration', span: 'row-span-2' },
    { src: art10, label: 'Illustration', span: 'col-span-2 row-span-2' },
    
    { src: art14, label: 'Mograph', span: ''}
   
  ];
</script>

<div class="gallery-page">
  <div class="page-header">
    <a href="/" class="back-link">⬅ Back to Home</a>
    <h1 class="section-title">
      <span class="star-divider">✦</span>
      Image Gallery
      <span class="star-divider">✦</span>
    </h1>
    <p class="page-subtitle">Some of my illustration and design work. Some of it is personal and fun, some is from professional use cases.</p>
  </div>

  <!-- BENTO GRID -->
  <div class="bento-grid">
    {#each galleryItems as item, index}
      <div
        class="bento-item {item.span}" 
        style="--index: {index}"
      > 
      <Zoom class_dialog="dark-zoom-overlay">
        <div class="image-wrapper">
        <img src={item.src} alt={item.label} />
        <span class="bento-label">{item.label}</span>
        </div>
        </Zoom>
      </div>
    {/each}
  </div>

  <div class="gallery-cta">
    <Button href="/#work" variant="gold">Back to Home</Button>
  </div>
</div>

<style>

  .gallery-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .page-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
  }

  .back-link {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--neon-gold);
    text-decoration: none;
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  .back-link:hover {
    opacity: 1;
  }

  .section-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #ffffff;
    text-shadow: 0 0 30px rgba(0, 240, 255, 0.08);
    flex-wrap: wrap;
  }

  .star-divider {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--neon-gold);
    font-size: 1.2rem;
    text-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
    animation: twinkle 2s ease-in-out infinite alternate;
  }

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

  .page-subtitle {
    color: #b0b0c0;
    font-size: 1.05rem;
    margin-top: 0.5rem;
  }

  /* ===== BENTO GRID ===== */
  .bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
    gap: 1rem;
    margin: 2rem 0;
  }

  .bento-item {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    border: 1.3px solid rgba(0, 240, 255, 0.08);
    transition: all 0.4s ease;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.03);
    animation: fade-in 0.6s ease-out forwards;
    opacity: 0;
    animation-delay: calc(var(--index, 0) * 0.08s);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .bento-item:hover {
    transform: scale(1.02);
    border-color: var(--neon-gold);
    box-shadow: 0 0 30px rgba(0, 240, 255, 0.12);
    z-index: 2;
  }

  /* image sizing */
  .bento-item img {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    display: block !important;
    margin: 0 !important;
    padding: 0 !important;
    min-width: 100% !important;
    min-height: 100% !important;
}

.bento-item img[src$=".gif"]{
transform: scale(1.2);
    
  }

.bento-item img[src$=".gif"]:hover{
transform: scale(1.3);
    
  }

  .bento-item:hover img {
    transform: scale(1.05);
  }

  .bento-label {
    position: absolute;
    bottom: 0.75rem;
    left: 0.75rem;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.7rem;
    color: var(--neon-gold);
    border: 1px solid rgba(0, 240, 255, 0.15);
    letter-spacing: 0.04em;
    z-index: 2;
  }

  /* Bento grid spans */
  .col-span-2 {
    grid-column: span 2;
  }

  .row-span-2 {
    grid-row: span 2;
  }

  .gallery-cta {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 1024px) {
    .bento-grid {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 180px;
    }
  }

  @media (max-width: 768px) {
    .bento-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 150px;
    }

    .col-span-2 {
      grid-column: span 2;
    }

    .row-span-2 {
      grid-row: span 1;
    }

    .section-title {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    .bento-grid {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 120px;
      gap: 0.75rem;
    }

    .col-span-2 {
      grid-column: span 2;
    }

    .row-span-2 {
      grid-row: span 1;
    }

    .bento-label {
      font-size: 0.6rem;
      bottom: 0.4rem;
      left: 0.4rem;
      padding: 0.15rem 0.5rem;
    }
  }
</style>