const dev = process.env.NODE_ENV !== 'production'
const mode = process.env.MODE === 'no-certificate'
export let protocol = dev ? 'http' : 'https'
export let siteName = dev ? 'localhost' : 'grand-casino.com.ru'
export let port = dev ? 3000 : 443

if (mode) {
    protocol = 'http'
    siteName = 'grand-casino.com.ru'
    port = 80
}

const fetchDataPage = (namePage) => async (context) => {
    try {
        const statusCode = context.res ? context.res.statusCode : null
        const url = `${protocol}://${siteName}:${port}/api/${namePage}`
        const params = {
            method: 'POST',
            timeout: 5000,
            compress: true
        }
        const response = await fetch(url, params)
        const data = await response.json()
        let errorMessage = ''

        if (statusCode === 404) {
            errorMessage = 'Страница не найдена'
        }

        if (statusCode === 500) {
            errorMessage = 'Что-то пошло не так :('
        }

        return {
            props: {
                ...data,
                statusCode,
                errorMessage
            }
        }
    } catch (error) {
        throw new Error(error)
    }
}

export default fetchDataPage