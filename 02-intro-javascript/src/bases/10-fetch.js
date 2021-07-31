const apiKey = '0WNF5OD2lOI0EyAPWHJkIMX1lJDWrop3';

const peticion = fetch(`api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
  .then( resp => resp.json())
  .then( ({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
  })
  .catch( console.warn );