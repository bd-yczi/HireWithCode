<!--
 * @Author: HuRrongChao 1556810922@qq.com
 * @Date: 2025-05-21 15:55:11
 * @LastEditors: bd-yczi
 * @LastEditTime: 2025-05-21 18:30:27
-->
<!-- src/views/WelcomePage.vue -->
<template>
  <div class="welcome-container welcome-animation">
    <img src="/logo.png" alt="Logo" class="welcome-logo" />
    <h1 class="welcome-title">
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
.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.welcome-logo {
  width: 128px;
  height: 128px;
  margin-bottom: 2rem;
}

.welcome-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #333;
  max-width: 600px;
  line-height: 1.4;
}

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

@media screen and (max-width: 768px) {
  .welcome-logo {
    width: 96px;
    height: 96px;
    margin-bottom: 1.5rem;
  }

  .welcome-title {
    font-size: 1.5rem;
    max-width: 400px;
  }
}

@media screen and (max-width: 480px) {
  .welcome-logo {
    width: 72px;
    height: 72px;
    margin-bottom: 1rem;
  }

  .welcome-title {
    font-size: 1.25rem;
    max-width: 300px;
  }
}
</style>