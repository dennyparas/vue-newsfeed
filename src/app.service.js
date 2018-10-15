import axios from 'axios';

axios.defaults.baseURL = 'https://api.fullstackweekly.com';
axios.interceptors.request.use((config) => {
  if (typeof window === 'undefined') {
    return config;
  }
  const token = window.localStorage.getItem('token');
  if (token) {
    const req = config;
    req.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const appService = {
  async getPosts(categoryId) {
    try {
      const response = await axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getProfile() {
    try {
      const response = await axios.get('/services/profile.php');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async login(credentials) {
    try {
      const response = await axios.post('/services/auth.php', credentials);
      return response.data;
    } catch (error) {
      throw error.status;
    }
  },
};

export default appService;
