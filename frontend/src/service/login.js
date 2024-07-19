import axios from 'axios'
const baseUrl = 'https://royalwatches-backend.onrender.com/api/'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }