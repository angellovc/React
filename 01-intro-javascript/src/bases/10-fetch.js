const apiKey = "EG1iabfx12D4JmR49YxH7q4ft3Yc9mdf";
const request = fetch('http://api.giphy.com/v1/gifs/random?api_key='+apiKey);
request
  .then(resp => resp.json())
  .then( ({data}) => {
    const {image_url:image} = data;
    console.log(image);
    let img = document.createElement('img');
    img.src = image;
    document.body.append(img); 
  })
  .catch(console.warn)