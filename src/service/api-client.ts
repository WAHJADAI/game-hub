import axios from 'axios'

export default axios.create({
    url:'https://api.rawg.io/api',
    params:{
        key:'7a856106527c43fb8fd98344e5fd1465'
    }
})