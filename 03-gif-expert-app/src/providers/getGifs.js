const getGifs = async (category) => {
  
  const token = 'EG1iabfx12D4JmR49YxH7q4ft3Yc9mdf';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${token}&q=${encodeURI(category)}&limit=10`;
  const resp = await fetch(url);
  console.log(resp);
  const {data} = await resp.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }
  });
  gifs.length === 0 && gifs.push('Not Found');
  return gifs;
}

export default getGifs;