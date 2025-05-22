<!-- src/views/SubmitPage.vue -->
<template>
  <div class="submit-container">
    <div class="submit-content">
      <h2 class="submit-title">提交作品</h2>
      <form @submit.prevent="handleSubmit" class="submit-form">
        <div class="form-group">
          <label for="repo" class="form-label">GitHub 仓库 URL</label>
          <input id="repo" v-model="form.repoUrl" type="url" required class="form-input"
            placeholder="请输入你的 GitHub 仓库地址" />
        </div>

        <div class="form-group">
          <label for="vercel" class="form-label">Vercel 在线体验地址</label>
          <input id="vercel" v-model="form.vercelUrl" type="url" required class="form-input"
            placeholder="请输入你的 Vercel 部署地址" />
        </div>

        <button type="submit" class="submit-button">
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
  console.log('Form submitted:', form)
  alert('提交成功！感谢你的参与！')
}
</script>

<style scoped>
.submit-container {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  min-height: calc(100vh - 64px);
}

.submit-content {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.submit-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 600;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 0.6rem;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #666;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.submit-button {
  width: 100%;
  padding: 0.9rem;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 1rem;
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .submit-container {
    padding: 1.5rem;
  }

  .submit-content {
    padding: 1.8rem;
  }

  .submit-title {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  .form-label {
    font-size: 0.9rem;
  }

  .form-input {
    padding: 0.7rem;
    font-size: 0.9rem;
  }

  .submit-button {
    padding: 0.8rem;
    font-size: 0.95rem;
  }
}

@media screen and (max-width: 480px) {
  .submit-container {
    padding: 1rem;
  }

  .submit-content {
    padding: 1.2rem;
    border-radius: 8px;
  }

  .submit-title {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }

  .form-group {
    margin-bottom: 1.2rem;
  }

  .form-input {
    padding: 0.6rem;
  }

  .submit-button {
    font-size: 0.9rem;
    padding: 0.75rem;
  }
}
</style>