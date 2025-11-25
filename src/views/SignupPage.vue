<template>
  <div class="signup-page">
    <div class="signup-container">
      <form @submit.prevent="handleSubmit" class="signup-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email"
            placeholder="Email"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="formData.password"
            @input="validatePassword"
            placeholder="Password"
            required
          />
        </div>
        
        <div v-if="passwordErrors.length > 0" class="password-errors">
            <p class="error-title">The password is not valid:</p>
            <ul class="error-list">
              <li v-for="(error, index) in passwordErrors" :key="index">
                {{ error }}
              </li>
            </ul>
        </div>

        <button 
          type="submit" 
          class="submit-button"
          :disabled="passwordErrors.length > 0"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      passwordErrors: []
    }
  },
  methods: {
    validatePassword() {
      this.passwordErrors = []
      const password = this.formData.password

      if (password.length < 8 || password.length >= 15) {
        this.passwordErrors.push('Password must be at least 8 characters and less than 15 characters')
      }

      if (!/[A-Z]/.test(password)) {
        this.passwordErrors.push('Includes at least one uppercase alphabet character')
      }

      const lowercaseMatches = password.match(/[a-z]/g)
      if (!lowercaseMatches || lowercaseMatches.length < 2) {
        this.passwordErrors.push('Includes at least two lowercase alphabet characters')
      }

      if (!/\d/.test(password)) {
        this.passwordErrors.push('Includes at least one numeric value')
      }

      if (password.length > 0 && !/^[A-Z]/.test(password)) {
        this.passwordErrors.push('It should start with an uppercase alphabet')
      }

      if (!password.includes('_')) {
        this.passwordErrors.push('It should include the character "_"')
      }
    },
    handleSubmit() {
      if (this.passwordErrors.length > 0) {
        alert('Please fix password errors before submitting')
        return
      }

      alert('Sign up successful!')
      this.formData = {
        email: '',
        password: ''
      }
      this.passwordErrors = []
    }
  }
}
</script>

<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
}

.signup-container {
  background: #c6f6d5;
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.form-group label {
  font-size: 1rem;
  font-weight: 600;
  color: #34495e;
  min-width: 100px;
  text-align: left;
}

.form-group input {
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  text-align: center;
  flex: 1;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
}

.password-errors {
  background-color: #fff5f5;
  border: 2px solid #fc8181;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.error-title {
  color: #c53030;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.error-list {
  color: #c53030;
  margin-left: 1.5rem;
  font-size: 0.9rem;
}

.error-list li {
  margin-bottom: 0.3rem;
}

.submit-button {
  background-color: #4299e1;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 1rem;
  width: fit-content;
  align-self: center;
}

.submit-button:hover:not(:disabled) {
  background-color: #3182ce;
}

.submit-button:active:not(:disabled) {
  background-color: #2c5282;
}

.submit-button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
