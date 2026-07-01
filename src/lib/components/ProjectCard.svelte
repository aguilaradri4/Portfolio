<!-- src/lib/components/ProjectCard.svelte -->
<script>
  let { project } = $props();
</script>

<a href="{project.link}" class="project-card">
  <div class="card-image">
    <img src={project.image} alt={project.title} />
    {#if project.award}
      <span class="award-badge">{project.award}</span>
    {/if}
  </div>
  <div class="card-content">
    
    <h3>{project.title}</h3>
    <p>{project.subtitle || project.description}</p>
    <div class="tags">
      {#each project.tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  </div>
</a>

<style>
  .project-card {
    display: block;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(8px);
    border-radius: 1.25rem;
    border: 1px solid rgba(0, 240, 255, 0.15);
    overflow: hidden;
    transition: all 0.4s ease;
    text-decoration: none;
    color: inherit;
    position: relative;
  }

  .project-card:hover {
    transform: translateY(-6px);
    border-color: var(--neon-cyan, #00f0ff);
    box-shadow: 0 0 30px rgba(0, 240, 255, 0.12), 0 0 60px rgba(0, 240, 255, 0.05);
  }

  .card-image {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
    background: #0a0a12;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .project-card:hover .card-image img {
    transform: scale(1.03);
  }

  .award-badge {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: rgba(255, 132, 0, 0.2);
    backdrop-filter: blur(8px);
    border: 1px solid var(--neon-gold, #ffc400);
    color: var(--neon-gold, #ffec1c);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-shadow: 0 0 10px rgba(255, 0, 230, 0.3);
  }

  .card-content {
    padding: 1.25rem;
  }

  .card-content h3 {
    font-size: 1.25rem;
    margin: 0 0 0.25rem 0;
    color: #ffffff;
    font-weight: 600;
  }

  .card-content p {
    font-size: 0.95rem;
    color: #b0b0c0;
    margin: 0 0 0.75rem 0;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    font-size: 0.7rem;
    padding: 0.2rem 0.7rem;
    border-radius: 9999px;
    background: rgba(0, 240, 255, 0.08);
    border: 1px solid rgba(0, 240, 255, 0.12);
    color: var(--neon-cyan, #00f0ff);
    letter-spacing: 0.02em;
  }
</style>