const fetch = async input => {
  const response = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "fff9c10d",
      s: input,
    },
  });
  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
    <div class="dropdown">
    <input class="input"/>
        <div class="dropdown-menu">
            <div class="dropdown-content result">
            </div>
        </div>
    </div>
`;

const input = document.querySelector('.input');
const dropdown = document.querySelector('.dropdown');
const resultWrapper = document.querySelector('.result');

const onInput = async (event) => {
  const movies = await fetch(event.target.value);
  if(!movies.length){
    dropdown.classList.remove('is-active');
    return;
  }
  resultWrapper.innerHTML = '';
  dropdown.classList.add('is-active');
  for (let movie of movies) {
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster; 
    const option = document.createElement('a');
    option.classList.add('dropdown-item');
    option.addEventListener('click', () => {
      dropdown.classList.remove('is-active');
      input.value = movie.Title;
      movieSelect(movie);
    })
    option.innerHTML = `
        <img src="${imgSrc}" />
        ${movie.Title}
    `;
    resultWrapper.appendChild(option);
  }
};

const movieSelect = async movie => {
  const response = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "fff9c10d",
      i: movie.imdbID,
    },
  });
  document.querySelector('#summary').innerHTML = movieTemplate(response.data);
}

const movieTemplate = movieDetail => {
  return `
      <article class="media">
      <figure class="media-left">
          <p class="image">
            <img src="${movieDetail.Poster}"
          </p>
      </figure>
      <div class="media-left">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>  
      </div>
      </article>
  `;
}

input.addEventListener("input", debounce(onInput, 200));

document.addEventListener('click', event => {
  if(!root.contains(event.target)){
    dropdown.classList.remove('is-active');
    return;
  }
})
