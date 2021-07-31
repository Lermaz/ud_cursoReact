const getImagen = async() => {
  try {
    const apiKey = '0WNF5OD2lOI0EyAPWHJkIMX1lJDWrop3';
    const resp = await fetch(`api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
  } catch (error) {
    // Manejo de error
    console.error(error);
  }
}

getImagen();