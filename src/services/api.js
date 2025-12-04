import axios from 'axios'

const API_BASE_URL = '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      
      const refreshToken = localStorage.getItem('refresh_token')
      if (refreshToken) {
        try {
          const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            refresh_token: refreshToken
          })
          
          const { access_token } = response.data
          localStorage.setItem('access_token', access_token)
          
          originalRequest.headers.Authorization = `Bearer ${access_token}`
          return api(originalRequest)
        } catch (refreshError) {
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          window.location.href = '/login'
          return Promise.reject(refreshError)
        }
      }
    }
    
    return Promise.reject(error)
  }
)

export const authAPI = {
  login: async (username, password) => {
    const response = await api.post('/auth/login', { username, password })
    return response.data
  },
  
  register: async (userData) => {
    console.log('Sending register data:', userData)
    const response = await api.post('/auth/register', userData)
    return response.data
  },
  
  changePassword: async (oldPassword, newPassword) => {
    const response = await api.put('/auth/change_password', {
      old_password: oldPassword,
      new_password: newPassword
    })
    return response.data
  },
  
  refreshToken: async (refreshToken) => {
    const response = await api.post('/auth/refresh', { refresh_token: refreshToken })
    return response.data
  }
}

export const userAPI = {
  getMe: async () => {
    const response = await api.get('/user/me')
    return response.data
  },
  
  getAll: async () => {
    const response = await api.get('/user')
    return response.data
  },
  
  getById: async (id) => {
    const response = await api.get(`/user/get/${id}`)
    return response.data
  },
  
  deleteUser: async (id) => {
    const response = await api.delete(`/user/delete/${id}`)
    return response.data
  }
}

export const departmentAPI = {
  create: async (departmentData) => {
    const response = await api.post('/departments/create', departmentData)
    return response.data
  },
  
  getAll: async () => {
    const response = await api.get('/departments')
    return response.data
  }
}

export default api
