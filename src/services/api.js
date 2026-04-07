import axios from 'axios'

// Get backend URL from environment variable
const baseURL = import.meta.env.VITE_API_BASE_URL

// Optional: Debug (remove later if not needed)
console.log("API BASE URL:", baseURL)

// Local storage key
export const USER_STORAGE_KEY = 'user'

// Role-based routing
export const ROLE_HOME = {
  STUDENT: '/dashboard',
  EMPLOYER: '/employer/dashboard',
  ADMIN: '/admin/dashboard',
  OFFICER: '/officer',
  PLACEMENT_OFFICER: '/po/dashboard',
}

// Axios instance
export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Example API functions (optional - keep if you already use them)

export const login = (data) => {
  return api.post('/api/auth/login', data)
}

export const register = (data) => {
  return api.post('/api/auth/register', data)
}

// Add more APIs as needed...
