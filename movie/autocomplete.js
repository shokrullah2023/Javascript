// const createAutoComplete = ({ root, renderOption }) => {
//     root.innerHTML = `
//         <label><b>Search For a movie</b></label>
//         <input class="input" />
//         <div class="dropdown ">
//             <div class="dropdown-menu ">
//                 <div class="dropdown-content result">
//                 </div>
//             </div>
//         </div>
//     `;
    
//     const dropdown = root.querySelector(".dropdown");
//     const resultsWrapper = root.querySelector(".result");
//     const input = root.querySelector("input");
    
//     const onIput = async (event) => {
//       const movies = await fetch(event.target.value);
    
//       if (!movies.length) {
//         dropdown.classList.remove("is-active");
//         return;
//       }
//       resultsWrapper.innerHTML = "";
//       dropdown.classList.add("is-active");
//       for (let movie of movies) {
//         const option = document.createElement("a");
    
//         option.classList.add("dropdown-item");
//         option.innerHTML = renderOption(movie);
    
//         option.addEventListener("click", () => {
//           dropdown.classList.remove("is-active");
//           input.value = movie.Title;
//           onMovieSelect(movie);
//         });
    
//         resultsWrapper.appendChild(option);
//       }
//     };
//     input.addEventListener("input", debounce(onIput,   1000));
    
//     document.addEventListener("click", (event) => {
//       if (!root.contains(event.target)) {
//         dropdown.classList.remove("is-active");
//       }
//     });

// }


const createAutoComplete = ({ 
  root, 
  renderOption, 
  onOptionSelect, 
  fetch
}) => {
  root.innerHTML = `
      <label><b>Search For a movie</b></label>
      <input class="input" />
      <div class="dropdown ">
          <div class="dropdown-menu ">
              <div class="dropdown-content result">
              </div>
          </div>
      </div>
  `;
  
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".result");
  const input = root.querySelector("input");
  
  const onIput = async (event) => {
    const items = await fetch(event.target.value);
  
    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }
    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let movie of items) {
      const option = document.createElement("a");
  
      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(movie);
  
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = movie.Title;
        onOptionSelect(movie)
      });
  
      resultsWrapper.appendChild(option);
    }
  };
  input.addEventListener("input", debounce(onIput,   1000));
  
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });

}