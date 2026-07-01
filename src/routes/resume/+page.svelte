<!-- src/routes/resume/+page.svelte -->
<script>
  import { PDFViewer } from '@embedpdf/svelte-pdf-viewer';
  import resume from '$lib/assets/gallery/Adriana_Aguilar_Resume_2026.pdf';
  import Button from '$lib/components/Button.svelte';
</script>

<div class="resume-page">
  <!-- Back to Home Link -->
  <div class="back-link">
    <a href="/">⬅ Back to Home</a>
  </div>

  <!-- PDF Viewer -->
  <div class="viewer-wrapper">
    <PDFViewer
      config={{
        src: resume,
        theme: {
          preference: 'dark',
          dark: {
            background: {
              primary: '#0a0a0f',
              secondary: '#0d0a1a',
              tertiary: '#1a0a2e',
            },
            surface: {
              primary: 'rgba(26, 10, 46, 0.8)',
              secondary: 'rgba(10, 10, 26, 0.9)',
              border: 'rgba(123, 47, 252, 0.2)',
            },
            accent: {
              primary: '#7b2ffc',
              primaryHover: '#9d4edd',
              primaryActive: '#6b21a8',
              primaryLight: 'rgba(123, 47, 252, 0.15)',
              primaryForeground: '#ffffff',
            },
            text: {
              primary: '#e0e0f0',
              secondary: '#b0b0c0',
              onAccent: '#ffffff',
            },
          },
        },
        disabledCategories: ['print'],
      }}
      style="width: 100%; height: 100%;"
    />
  </div>

  <!-- Centered Button -->
  <div class="button-wrapper">
    <Button href="/#work" variant="cyan">View My Work</Button>
  </div>
</div>

<style>
  /* ===== RESUME PAGE ===== */
  .resume-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    gap: 1.5rem;  /* Space between viewer and button */
    position: relative;
  }

  /* ===== BACK LINK ===== */
  .back-link {
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    z-index: 10;
  }

  .back-link a {
    color: var(--neon-cyan);
    text-decoration: none;
    font-size: 0.95rem;
    opacity: 0.6;
    transition: opacity 0.3s ease, text-shadow 0.3s ease;
  }

  .back-link a:hover {
    opacity: 1;
    text-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
  }

  /* ===== VIEWER WRAPPER ===== */
  .viewer-wrapper {
    width: 85%;
    max-width: 1100px;
    height: 70vh;
    border-radius: 1.25rem;
    overflow: hidden;
    border: 1px solid rgba(123, 47, 252, 0.15);
    box-shadow: 
      0 0 40px rgba(123, 47, 252, 0.08),
      0 0 80px rgba(0, 240, 255, 0.03);
    background: #0a0a0f;
    transition: box-shadow 0.4s ease;
  }

  .viewer-wrapper:hover {
    box-shadow: 
      0 0 50px rgba(123, 47, 252, 0.15),
      0 0 100px rgba(0, 240, 255, 0.05);
  }

  /* ===== BUTTON WRAPPER - CENTERED ===== */
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 768px) {
    .resume-page {
      padding: 1rem;
      gap: 1rem;
    }

    .viewer-wrapper {
      width: 95%;
      height: 65vh;
      border-radius: 0.75rem;
    }

    .back-link {
      top: 1rem;
      left: 1rem;
    }

    .back-link a {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .viewer-wrapper {
      width: 98%;
      height: 55vh;
      border-radius: 0.5rem;
    }

    .resume-page {
      gap: 0.75rem;
    }

    .button-wrapper {
      padding: 0.25rem 0;
    }
  }
</style>
