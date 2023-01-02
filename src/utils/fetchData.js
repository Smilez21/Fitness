export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        },
      };

      export const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
          'X-RapidAPI-Key': '438ac21e2amshe1da213db40dc8ap194a70jsn37967a32a1df',
        },
      };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };