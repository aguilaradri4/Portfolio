<!-- src/routes/about/+page.svelte -->
<script>
  import Button from '$lib/components/Button.svelte';
  import TypingAnimation from '$lib/components/TypingAnimation.svelte';
  import { PDFViewer } from '@embedpdf/svelte-pdf-viewer';
  import portrait from '$lib/assets/selfie-3.jpeg';
</script>

<div class="about-page">
  <div class="about-container">
    <!-- Left: portrait -->
    <div class="portrait-wrapper">
      <div class="portrait-frame">
        <img src={portrait} alt="Adriana Paola Aguilar" />
      </div>
    </div>

    <!-- Right side: bio content -->
    <div class="bio-content">
      <h1>Adriana Aguilar</h1>
      
      <!-- Typing anim -->
      <div class="typing-row">
        <div class="typing-container">
          <TypingAnimation 
            words={['Creative.','Journalist.', 'Data.', 'Designer.', 'Developer.', 'Animator.']}
            typingSpeed={90}
            deletingSpeed={40}
            pauseBetween={2000}
          />
        </div>
      </div>
      
      <div class="bio-text">
        <p class="lead">
         I believe <span class="highlight">visual data journalism</span> can build bridges and understanding.
        </p>
        
        <p>
          I've been a part of the award-winning ABC News Data Team for the last 7 years. While I work with stations across the country, I am based out of the Chicago Metro Area, in Illinois. I've built interactive experiences 
          that turn complex data and investigations into digestible, memorable stories. My work spans
          several collaborative projects that have been recognized with <span class="award-text">Emmys</span>,
          <span class="award-text">Regional Edward R. Murrow Awards</span> and more importantly, have had real positive impact on our communities.
        </p>
        
        <p>
          As first-generation American and college graduate, I embrace journalism's power to inform, connect, and hold power to account. Every project I build is powered by my desire to <span class="highlight">enact positive change.</span>
        </p>
        
        <p>
          I thrive at the intersection of <span class="highlight">journalism, design, and technology</span>,
          whether that's building a Svelte-powered data tool, designing motion graphics for an
          investigation, complex data, explainers or documentaries, and even crafting a scrolly-telling experiences that prompt 
          institutional reform.
        </p>
      </div>
      
      <div class="bio-actions">
        <Button href="/#work" variant="cyan">View My Work</Button>
        <Button href="/resume" variant="magenta">View Resume</Button>
      </div>
      
      <div class="social-links">
        <a href="https://www.linkedin.com/in/adriana-aguilar-21b936157" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:aguilaradri4@gmail.com">
          Email
        </a>
      </div>
    </div>
  </div>

</div>



<style>
  .about-page {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;
  }

  .about-container {
    max-width: 1100px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1.8fr;
    gap: 4rem;
    align-items: center;
  }

  /* portrait size */
  .portrait-wrapper {
    display: flex;
    justify-content: center;
  }

  .portrait-frame {
    width: 340px;       
    height: 340px;      
    border-radius: 50%;
    padding: 5px;      
    background: linear-gradient(135deg, var(--neon-cyan, #00f0ff), var(--neon-magenta, #ff00e6), var(--neon-purple, #7b2ffc));
    background-size: 300% 300%;
    animation: gradient-shift 4s ease-in-out infinite alternate;
    box-shadow: 
      0 0 30px rgba(0, 240, 255, 0.2),
      0 0 60px rgba(255, 0, 230, 0.1),
      inset 0 0 30px rgba(0, 240, 255, 0.05);
    flex-shrink: 0;
    transition: box-shadow 0.4s ease;
  }

  .portrait-frame:hover {
    box-shadow: 
      0 0 40px rgba(0, 240, 255, 0.35),
      0 0 80px rgba(255, 0, 230, 0.2),
      inset 0 0 40px rgba(0, 240, 255, 0.08);
  }

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .portrait-frame img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    background: #0a0a12;
  }

  /* bio */
  .bio-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    margin: 0;
    background: linear-gradient(to right, #ffffff, #b0b0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .typing-row {
    display: flex;
    justify-content: left; /**This is the one that will shift the typing animation**/
    font-size: 2rem;
    font-weight: 400;
    color: var(--neon-cyan, #00f0ff);
    min-height: 3.5rem;    /* Fixed height */
    margin-bottom: 0.5rem;
    text-shadow: 0 0 20px rgba(0, 240, 255, 0.1);
  }

  .typing-container {
    display: flex;
    justify-content: left;
    align-items: left;
    min-width: 320px;      
    height: 3.5rem;   
    text-align: left;
  }

  .typing-container :global(.typing-wrapper) {
    display: flex;
    align-items: left;
    justify-content: left;
    min-width: 100%;
    height: 100%;
  }

  .bio-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .bio-text p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #ffffff;
    margin: 0;
  }

  .bio-text .lead {
    font-size: 1.25rem;
    color: #ffffff;
    font-weight: 500;
  }

  .highlight {
    color: var(--neon-cyan, #00f0ff);
    text-shadow: 0 0 20px rgba(0, 240, 255, 0.15);
  }

  .award-text {
    color: var(--neon-magenta, #ff00e6);
    text-shadow: 0 0 20px rgba(255, 0, 230, 0.15);
    font-weight: 600;
  }

  .bio-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
  }

  .social-links a {
    color: #8888a0;
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;
  }

  .social-links a:hover {
    color: var(--neon-cyan, #00f0ff);
    border-bottom-color: var(--neon-cyan, #00f0ff);
    text-shadow: 0 0 20px rgba(0, 240, 255, 0.15);
  }

  /* Responsiveness for multiple screens */
  @media (max-width: 1024px) {
    .portrait-frame {
      width: 280px;
      height: 280px;
    }
  }

  @media (max-width: 768px) {
    .about-container {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .portrait-frame {
      width: 220px;
      height: 220px;
    }

    h1 {
      font-size: 2.2rem;
      text-align: center;
    }

    .typing-row {
      font-size: 1.5rem;
    }

    .typing-container {
      min-width: 260px;
      height: 3rem;
    }

    .bio-text p {
      font-size: 1rem;
    }

    .bio-actions {
      justify-content: center;
    }

    .social-links {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .portrait-frame {
      width: 180px;
      height: 180px;
    }

    h1 {
      font-size: 1.8rem;
    }

    .typing-row {
      font-size: 1.2rem;
    }

    .typing-container {
      min-width: 220px;
      height: 2.5rem;
    }
  }
</style>