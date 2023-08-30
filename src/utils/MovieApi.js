class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = {
      "content-type": "application/json",
    };
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  }

  getAllCards() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const moviesApi =new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies/",
})

export default moviesApi;
