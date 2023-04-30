

const searchTerm = document.querySelector('#search');

const fetch = async (searchTerm) => {
    const response =  await axios.get('http://www.omdbapi.com',{
        params: {
            apikey: 'fff9c10d',
            s: searchTerm
        },
        
    })
    console.log(response.data);
}

fetch();