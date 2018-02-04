const simpleFetch = (url) => {
    return fetch(url).then(res => res.json())
}