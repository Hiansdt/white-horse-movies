import axios from 'axios'

const auth = {
    headers: {
        'X-Api-Key': 'rbv4uM18U+QQmXPKqdmnhg==l6TjAmjBW9JGgK3W'
    }
}

export default class quotesApi {
    async getQuotes(category) {
        const { data } = await axios.get(`quotes?category=${category}`, auth)
        return data
    }
}