import service from '@/plugins/axios'

const Login = {
  handleLogin: (params = {}) => service.post('login', params)
}

export default Login