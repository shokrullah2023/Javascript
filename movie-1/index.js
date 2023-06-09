
// const fetch = async input => {
//   const response = await axios.get("http://www.omdbapi.com", {
//     params: {
//       apikey: "fff9c10d",
//       s: input,
//     },
//   });
//   if (response.data.Error) {
//     return [];
//   }
//   return response.data.Search;
// };

// const root = document.querySelector(".autocomplete");
// root.innerHTML = `
//     <div class="dropdown">
//     <input class="input"/>
//         <div class="dropdown-menu">
//             <div class="dropdown-content result">
//             </div>
//         </div>
//     </div>
// `;

// const input = document.querySelector('.input');
// const dropdown = document.querySelector('.dropdown');
// const resultWrapper = document.querySelector('.result');

// const onInput = async (event) => {
//   const movies = await fetch(event.target.value);
//   if(!movies.length){
//     dropdown.classList.remove('is-active');
//     return;
//   }
//   resultWrapper.innerHTML = '';
//   dropdown.classList.add('is-active');
//   for (let movie of movies) {
//     const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster; 
//     const option = document.createElement('a');
//     option.classList.add('dropdown-item');
//     option.addEventListener('click', () => {
//       dropdown.classList.remove('is-active');
//       input.value = movie.Title;
//       movieSelect(movie);
//     })
//     option.innerHTML = `
//         <img src="${imgSrc}" />
//         ${movie.Title}
//     `;
//     resultWrapper.appendChild(option);
//   }
// };

// const movieSelect = async movie => {
//   const response = await axios.get("http://www.omdbapi.com", {
//     params: {
//       apikey: "fff9c10d",
//       i: movie.imdbID,
//     },
//   });
//   document.querySelector('#summary').innerHTML = movieTemplate(response.data);
// }

// const movieTemplate = movieDetail => {
//   return `
//       <article class="media">
//       <figure class="media-left">
//           <p class="image">
//             <img src="${movieDetail.Poster}"
//           </p>
//       </figure>
//       <div class="media-left">
//         <div class="content">
//           <h1>${movieDetail.Title}</h1>
//           <h4>${movieDetail.Genre}</h4>
//           <p>${movieDetail.Plot}</p>
//         </div>  
//       </div>
//       </article>
//   `;
// }

input.addEventListener("input", debounce(onInput, 200));

document.addEventListener('click', event => {
  if(!root.contains(event.target)){
    dropdown.classList.remove('is-active');
    return;
  }
})

autoCompleteConfig = {
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `<img src="${imgSrc}" />
        ${movie.Title} `;
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(input) {
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
  },
};

createAutoComplete({
  ...autoCompleteConfig,
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onmovieSelect(movie, document.querySelector('#left-summary'), 'left');
  },
  root: document.querySelector("#left-autocomplete"),
});

createAutoComplete({
  ...autoCompleteConfig,
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onmovieSelect(movie, document.querySelector('#right-summary'), 'right');
  },
  root: document.querySelector("#right-autocomplete"),
});

let leftMovie;
let rightMovie;
const onmovieSelect = async (movie, targetSide, side) => {
  const response = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "fff9c10d",
      i: movie.imdbID,
    },
  });
    targetSide.innerHTML = movieTemplate(response.data);
    if(side === 'left'){
      leftMovie = response.data;
    }else{
      rightMovie = response.data;
    }

    if(leftMovie && rightMovie){
      runComparison();
    }
};

const runComparison = () => {

  const leftSideStats = document.querySelectorAll('#left-summary .notification');
  const rightSideStats = document.querySelectorAll('#right-summary .notification');

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];

    const leftSideValue = parseInt(leftStat.dataset.value);
    const rightSideValue = parseInt(rightStat.dataset.value);
    
    if(rightSideValue > leftSideValue){
      leftStat.classList.remove('is-primary');
      leftStat.classList.add('is-warning');
    }
    else{
      rightStat.classList.remove('is-primary');
      rightStat.classList.add('is-warning');
    }
  });

}

const movieTemplate = (movieDetail) => {
  const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
  const metascore = parseInt(movieDetail.Metascore);
  const imdbRating = parseFloat(movieDetail.imdbRating);
  const imdbVotes = parseInt(movieDetail.imdbVotes);
  const awards = movieDetail.Awards.split(' ').reduce((prev, word)  => {
    const value = parseInt(word);
    if(isNaN(value)){
      return prev;
    }
    else{
      return prev + value;
    }
  },0);
  return `
        <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src="${movieDetail.Poster}" />
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>${movieDetail.Title}</h1>
                    <h4>${movieDetail.Genre} </h4>
                    <p>${movieDetail.Plot}</p> 
                </div>
            </div>
        </article>
        <article data-value=${awards} class="notification is-primary">
            <p class="title">${movieDetail.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article data-value=${dollars} class="notification is-primary">
            <p class="title">${movieDetail.BoxOffice}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article data-value=${metascore} class="notification is-primary">
            <p class="title">${movieDetail.Metascore}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article data-value=${imdbRating} class="notification is-primary">
            <p class="title">${movieDetail.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article data-value=${imdbVotes} class="notification is-primary">
            <p class="title">${movieDetail.imdbVotes}</p>
            <p class="subtitle">IMDB Votes</p>
        </article>
`;
};
