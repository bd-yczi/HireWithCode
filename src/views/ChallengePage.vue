<!-- src/views/ChallengePage.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-8">接受挑战</h2>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="github" class="block text-sm font-medium text-gray-700">GitHub ID</label>
          <input
            id="github"
            v-model="form.github"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="请输入你的 GitHub ID"
          />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">邮箱</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="请输入你的邮箱"
          />
        </div>

        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          接受挑战
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({
  github: '',
  email: ''
})

const handleSubmit = () => {
  // 这里可以添加表单提交逻辑
  console.log('Form submitted:', form)
  router.push('/submit')
}
</script> 