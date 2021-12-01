

 export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ZC6yk3xICEeyPEU7hq0c5OFD4tXy4u1K`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map (img => {
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url,
        }
    })
    return gifs;
}