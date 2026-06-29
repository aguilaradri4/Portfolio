<!-- src/routes/videos/+page.svelte -->
<script>
  import { YouTube } from 'sveltekit-embed';
  import Button from '$lib/components/Button.svelte';
  
  const videos = [
    {
      id: 'ZV96_EasF94',
      title: 'Consumer Stories',
      description: 'Data animation and design for a variety of consumer stories',
      category: 'Motion Graphics'
    },
    {
      id: 'sRR3YRZX3OY',
      title: 'ICE Coverage',
      description: 'Data visualizations for important ICE coverage',
      category: 'Motion Graphics'
    },
    {
      id: 'O5ShTAlRitg',
      title: 'Other Projects',
      description: 'A collection of recent works',
      category: 'Motion Graphics'
    },
    {
      id: 'hq2vbIJvFOI',
      title: 'The End of the Dept. of Ed.',
      description: 'An experimental vertical explainer for social audiences, detailing the end of the Department of Education and what it means for families. It was not published.',
      category: 'Explainer'
    },
    {
      id: 'OOLQEMFrzbs',
      title: 'Carousel Animated Data Reel',
      description: 'After the launch of the KFSN Emmy-dominated documentary "Killer High", for which I designed a multitude of data visualizations, the Executive Producer wanted to publish my visuals for social audiences. The data portrays the impact and danger of fentanyl based on data analyzed by the ABC Data Team.',
      category: 'Carousel'
    },
    {
      id: '9I8tcmOGd4A',
      title: 'Weathering Tomorrow Climate Change Coverage',
      description: 'The ABC Data Team spearheaded a project named "Weathering Tomorrow". It was a series of data-driven stories that focused on how climate change is impacting our communities. This carousel was for social media use. I worked on many aspects of this initiative. This is one of many projects that came from it.',
      category: 'Carousel'
    },
    {
      id: 'ky6vwrUz_MQ',
      title: 'Serpendipity',
      description: 'I managed a team of 12 artists/designers as an Art Director on this award-winning feature short film. It went viral with over 5 million views and it showcases a romcom of a man who has snakes for hair and is going on a blind date with a girl who cannot see very well. Hilarity ensues as everything that could possibly go wrong does, but in the end, we find out Theresa actually has a soft spot for the stone-petrifying snakes. I myself contributed writing, storyboards, character designs, color palletes, lighting, rendering, modeling, texturing and more to this short.',
      category: 'Animated Short'
    },
     {
      id: 'zVhgcWqqArk',
      title: 'Old Reel',
      description: 'Some of my older work.',
      category: 'Motion Graphics'
    },
    {
      id: 'q0a-q7YZ4is',
      title: 'Severe Weather Explainer',
      description: 'Partnered with the amazing meteorologist, Larry Mowry, to explain how severe storm formations work!',
      category: 'Explainer'
    }
  ];

  

  
</script>

<div class="videos-page">
  <div class="page-header">
    <a href="/" class="back-link">⬅ Back to Home</a>
    <h1 class="section-title">
      <span class="star-divider">✦</span>
      Video Gallery
      <span class="star-divider">✦</span>
    </h1>
    <p class="page-subtitle">A collection of my motion graphics and video work</p>
  </div>

  <div class="videos-grid">
    {#each videos as video}
      <div class="video-card">
        <div class="video-wrapper">
          <YouTube 
            youTubeId={video.id} 
            aspectRatio="16:9" 
          />
        </div>
        <div class="video-info">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <span class="video-tag">{video.category}</span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .videos-page {
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
    color: var(--neon-magenta);
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
    color: var(--neon-magenta);
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

  .videos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }

  .video-card {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 1.25rem;
    overflow: hidden;
    border: 1px solid rgba(123, 47, 252, 0.12);
    transition: all 0.4s ease;
  }

  .video-card:hover {
    transform: translateY(-4px);
    border-color: var(--neon-magenta);
    box-shadow: 0 0 40px rgba(123, 47, 252, 0.08);
  }

  .video-wrapper {
    width: 100%;
    background: #0a0a0f;
  }

  .video-info {
    padding: 1.25rem;
  }

  .video-info h3 {
    color: #ffffff;
    font-size: 1.1rem;
    margin: 0 0 0.25rem 0;
  }

  .video-info p {
    color: #b0b0c0;
    font-size: 0.95rem;
    margin: 0 0 0.75rem 0;
  }

  .video-tag {
    display: inline-block;
    font-size: 0.7rem;
    padding: 0.2rem 0.7rem;
    border-radius: 9999px;
    background: rgba(123, 47, 252, 0.12);
    border: 1px solid rgba(123, 47, 252, 0.15);
    color: var(--neon-magenta);
    letter-spacing: 0.02em;
  }

  @media (max-width: 768px) {
    .videos-grid {
      grid-template-columns: 1fr;
    }

    .section-title {
      font-size: 1.8rem;
    }
  }
</style>