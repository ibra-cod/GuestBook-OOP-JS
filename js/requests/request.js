export const getPosts = async (url, options = {}) => {
    const headers = {Accept : 'application/json', ...options.headers}
    const request = await fetch(url, {...options, headers})
    if (request.ok) {
        return request.json()
    }
    throw new Error('Erreur serveur', {cause: r})
}