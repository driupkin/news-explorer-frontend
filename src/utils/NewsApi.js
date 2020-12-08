export const getNews = (keyWord) => {
    const nowDate = new Date();
    const date = new Date();
    date.setDate(date.getDate() - 7);

    return fetch('https://nomoreparties.co/news/v2/everything?' +
        `q=${keyWord}&` +
        'apiKey=40ee307534d44f7698c25b0bafa4f7ed&' +
        'pageSize=100&' +
        `from=${date}&` +
        `to=${nowDate}`,
        {
            method: 'GET'
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json()
                    .then(data => Promise.reject(data.message))
            }
        })
        .catch(err => Promise.reject(err.message));
}
