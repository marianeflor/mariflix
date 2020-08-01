import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(videoObject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const resp = await serverResponse.json();
        return resp;
      }

      throw new Error('Não foi possível cadastrar os dados');
    });
}

export default {
  create,
};
