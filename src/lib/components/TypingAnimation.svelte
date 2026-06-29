<!-- src/lib/components/TypingAnimation.svelte -->
<script>
  let { 
    words = ['Visual Journalist', 'Designer', 'Developer', 'Motion Animator'],
    typingSpeed = 70,
    deletingSpeed = 20,
    pauseBetween = 1000
  } = $props();

  // State using Svelte 5 runes
  let displayText = $state('');
  let isDeleting = $state(false);
  let wordIndex = $state(0);
  let charIndex = $state(0);
  let timeoutId = $state(null);

  // Effect to handle the typing logic
  $effect(() => {
    const currentWord = words[wordIndex];
    
    if (!isDeleting) {
      // Typing
      if (charIndex <= currentWord.length) {
        displayText = currentWord.slice(0, charIndex);
        timeoutId = setTimeout(() => {
          charIndex++;
        }, typingSpeed);
      } else {
        // Done typing, pause before deleting
        timeoutId = setTimeout(() => {
          isDeleting = true;
        }, pauseBetween);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        displayText = currentWord.slice(0, charIndex);
        timeoutId = setTimeout(() => {
          charIndex--;
        }, deletingSpeed);
      } else {
        // Done deleting, move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
      }
    }

    // Cleanup function to clear timeout when component unmounts or effect re-runs
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  });
</script>

<span class="typing-wrapper">
  <span class="typing-text">{displayText}</span>
  <span class="cursor">|</span>
</span>

<style>
  .typing-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 2px;
  }

  .typing-text {
    display: inline-block;
    min-width: 2px;
  }

  .cursor {
    display: inline-block;
    color: var(--neon-cyan, #00f0ff);
    font-weight: 300;
    animation: blink 0.7s step-end infinite;
    text-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>