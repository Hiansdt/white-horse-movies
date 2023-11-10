import axios from 'axios'

const auth = {
    headers: {
        'X-Api-Key': 'rbv4uM18U+QQmXPKqdmnhg==l6TjAmjBW9JGgK3W'
    }
}

class quotesApi {
    async getQuotes(category) {
        const { data } = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, auth)
        return data
    }
}

export default new quotesApi