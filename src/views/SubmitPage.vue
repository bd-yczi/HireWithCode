<!-- src/views/SubmitPage.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-8">提交作品</h2>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="repo" class="block text-sm font-medium text-gray-700">GitHub 仓库 URL</label>
          <input
            id="repo"
            v-model="form.repoUrl"
            type="url"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="请输入你的 GitHub 仓库地址"
          />
        </div>
        
        <div>
          <label for="vercel" class="block text-sm font-medium text-gray-700">Vercel 在线体验地址</label>
          <input
            id="vercel"
            v-model="form.vercelUrl"
            type="url"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="请输入你的 Vercel 部署地址"
          />
        </div>

        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          提交作品
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  repoUrl: '',
  vercelUrl: ''
})

const handleSubmit = () => {
  // 这里可以添加表单提交逻辑
  console.log('Form submitted:', form)
  alert('提交成功！感谢你的参与！')
}
</script> 