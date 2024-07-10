import axios from 'axios';
import router from './router';
const axiosClient = axios.create({
    baseURl: 'http://localhost:8000/api/v1',
})
axiosClient.interceptors.request.use((config)=>{
    const token='123'
    config.headers.Authorization=`Bearer ${token}`
    return config
})
axiosClient.interceptors.response.use(response=>{
    return response
},error=>{
    if (error.response && error.response.status===401) {
        router.navigate('/login')
        return error
    }
    throw error
})
export default axiosClient
