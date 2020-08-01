import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

const getAll = () => fetch(URL_CATEGORIES)
  .then(async (serverResponse) => {
    if (serverResponse.ok) {
      const resp = await serverResponse.json();
      return resp;
    }
    throw new Error('Não foi possível pegar os dados');
  });

const getAllWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (serverResponse) => {
    if (serverResponse.ok) {
      const resp = await serverResponse.json();
      return resp;
    }
    throw new Error('Não foi possível pegar os dados');
  });

export default {
  getAll,
  getAllWithVideos,
};
