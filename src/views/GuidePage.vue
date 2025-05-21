<!-- src/views/GuidePage.vue -->
<template>
  <div class="guide-container">
    <div class="guide-content" v-html="renderedContent"></div>
    <div class="guide-actions">
      <button 
        @click="router.push('/challenge')"
        class="guide-button"
      >
        开始挑战
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { marked } from 'marked'
import { useRouter } from 'vue-router'

const router = useRouter()
const renderedContent = ref('')

onMounted(async () => {
  try {
    const response = await fetch('/README.md')
    const markdown = await response.text()
    renderedContent.value = marked(markdown)
  } catch (error) {
    console.error('Failed to load markdown:', error)
  }
})
</script>

<style>
.guide-container {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.guide-content {
  margin-bottom: 2rem;
}

.guide-actions {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.guide-button {
  font-size: 1.1rem;
  padding: 0.8em 2em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Markdown 内容样式 */
.guide-content {
  line-height: 1.6;
}

.guide-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.guide-content h2 {
  font-size: 2rem;
  margin: 2rem 0 1rem;
  color: #444;
}

.guide-content p {
  margin-bottom: 1rem;
  color: #666;
}

.guide-content ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.guide-content li {
  margin-bottom: 0.5rem;
}

/* 内联代码块样式 */
.guide-content code {
  background-color: rgb(240, 241, 242);
  padding: 2px 4px;
  border-radius: 4px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.9em;
}

/* 响应式样式 */
@media screen and (max-width: 768px) {
  .guide-container {
    padding: 1.5rem;
  }

  .guide-content h1 {
    font-size: 2rem;
  }

  .guide-content h2 {
    font-size: 1.5rem;
  }

  .guide-button {
    font-size: 1rem;
    padding: 0.7em 1.8em;
  }
}

@media screen and (max-width: 480px) {
  .guide-container {
    padding: 1rem;
  }

  .guide-content h1 {
    font-size: 1.75rem;
  }

  .guide-content h2 {
    font-size: 1.25rem;
  }

  .guide-content {
    font-size: 0.9rem;
  }

  .guide-button {
    font-size: 0.9rem;
    padding: 0.6em 1.6em;
  }

  .guide-content ul {
    padding-left: 1.5rem;
  }
}
</style> 