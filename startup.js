

export function loadNews(newsBody)
{
    let newsList = new Array();

    newsList.push(JSON.parse(newsBody));
    
    return newsList;
}