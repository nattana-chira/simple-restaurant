import axios from 'axios'

export default {
    URL: 'https://strapi.privatus.tech',
    get() {
        return axios.get(this.URL + '/restaurants')
    }
}