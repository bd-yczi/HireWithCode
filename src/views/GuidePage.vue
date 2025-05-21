<!-- src/views/GuidePage.vue -->
<template>
  <div class="max-w-4xl mx-auto p-8">
    <div class="prose prose-lg" v-html="renderedContent"></div>
    <div class="mt-8 text-center">
      <button 
        @click="router.push('/challenge')"
        class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
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
.prose {
  max-width: 100%;
}
.prose h1 {
  @apply text-3xl font-bold mb-4;
}
.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}
.prose p {
  @apply mb-4;
}
.prose ul {
  @apply list-disc list-inside mb-4;
}
.prose li {
  @apply mb-2;
}
</style> 