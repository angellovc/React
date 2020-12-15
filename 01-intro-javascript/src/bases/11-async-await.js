/* async and await */


const getImage = async () => {
  try {
    const apiKey = "EG1iabfx12D4JmR49YxH7q4ft3Yc9mdf";
    const resp = await fetch('http://api.giphy.com/v1/gifs/random?api_key='+apiKey);
    const {data} = await resp.json();
    const img = document.createElement('img');
    img.src = data.image_url;
    document.body.append(img);
  } catch(err) {
    console.warn(err);
  }
}
getImage();
console.log('1');