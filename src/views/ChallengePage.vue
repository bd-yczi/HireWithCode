<!-- src/views/ChallengePage.vue -->
<!-- src/views/ChallengePage.vue -->
<template>
  <div class="challenge-container">
    <div class="challenge-content">
      <h2 class="challenge-title">接受挑战</h2>
      <form @submit.prevent="handleSubmit" class="challenge-form">
        <div class="form-group">
          <label for="github" class="form-label">GitHub ID</label>
          <input id="github" v-model="form.github" type="text" required class="form-input"
            placeholder="请输入你的 GitHub ID" />
        </div>

        <div class="form-group">
          <label for="email" class="form-label">邮箱</label>
          <input id="email" v-model="form.email" type="email" required class="form-input" placeholder="请输入你的邮箱" />
        </div>

        <button type="submit" class="action-button">
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
  console.log('Form submitted:', form)
  router.push('/submit')
}
</script>

<style scoped>
.challenge-container {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  min-height: calc(100vh - 64px);
}

.challenge-content {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.challenge-title {
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

.action-button {
  width: 100%;
  padding: 0.9rem;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .challenge-container {
    padding: 1.5rem;
  }

  .challenge-content {
    padding: 1.8rem;
  }

  .challenge-title {
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

  .action-button {
    padding: 0.8rem;
    font-size: 0.95rem;
  }
}

@media screen and (max-width: 480px) {
  .challenge-container {
    padding: 1rem;
  }

  .challenge-content {
    padding: 1.2rem;
    border-radius: 8px;
  }

  .challenge-title {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }

  .form-group {
    margin-bottom: 1.2rem;
  }

  .form-input {
    padding: 0.6rem;
  }

  .action-button {
    font-size: 0.9rem;
    padding: 0.75rem;
  }
}
</style>