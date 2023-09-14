import axios from 'axios'

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'0cef7f760e594ddd9f5d5523a01c732a'
    }
})