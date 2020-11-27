const sendFormData = async (url, data) => {
    try {
        const params = {
            method: 'post',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        }
    
        await fetch(url, params)
    } catch (error) {
        throw new Error(error)
    }
}

export default sendFormData
