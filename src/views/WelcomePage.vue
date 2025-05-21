<!--
 * @Author: HuRrongChao 1556810922@qq.com
 * @Date: 2025-05-21 15:55:11
 * @LastEditors: HuRrongChao
 * @LastEditTime: 2025-05-21 16:36:02
-->
<!-- src/views/WelcomePage.vue -->
<template>
  <div class="flex flex-col items-center justify-center min-h-screen welcome-animation">
    <img src="/logo.png" alt="Logo" class="w-32 h-32 mb-8" />
    <h1 class="text-2xl font-bold text-gray-800">
      欢迎来到 infist 线上面试环节，期待你的加入！
    </h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/guide')
  }, 2000)
})
</script> 

<style scoped>
.welcome-animation {
  animation: welcome-animation 0.5s ease-in-out;
}

@keyframes welcome-animation {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>