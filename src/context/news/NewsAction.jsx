export const fetchNews = async(topic) =>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2024-02-05&sortBy=publishedAt&apiKey=7930030bb3c24b52b05cfe3d96b2fc1b`);
    const data = await response.json();
    // console.log(data.articles);
    return data.articles;
}

// ab ye function kb call hona chiye/api kb call ho jb home page open hote hi hona chiye
// to home me useEffect