<!-- src/lib/components/GalleryPreview.svelte -->
<script>
  let { gallery } = $props();
</script>

<a href="/work/{gallery.slug}" class="gallery-card">
  <div class="card-image">
    <img src={gallery.image} alt={gallery.title} />
    {#if gallery.award}
      <span class="award-badge">{gallery.award}</span>
    {/if}
  </div>
  <div class="card-content">
    <h3>{gallery.title}</h3>
    <p>{gallery.subtitle || gallery.description}</p>
    <div class="tags">
      {#each gallery.tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  </div>
</a>

