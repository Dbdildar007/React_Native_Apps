import axios from "axios";


// endpoints
const apiBaseUrl = 'https://castroapi.vercel.app';

const BollyWoodMoviesEndpoint = `${apiBaseUrl}/searchmovies/bysearchtag/Bollywood`;
const HollyWoodMoviesEndpoint = `${apiBaseUrl}/searchmovies/bysearchtag/Hollywood`;
const SeriesMoviesEndpoint = `${apiBaseUrl}/searchmovies/bysearchtag/Series`;
const IndianSeriesMoviesEndpoint = `${apiBaseUrl}/searchmovies/bysearchtag/Indian`;
const TvDramaMoviesEndpoint = `${apiBaseUrl}/searchmovies/bysearchtag/Drama`;
const lasttenmoviesforcrousel = `${apiBaseUrl}/get/last_10/data`;


/// movieslist on home screen

const TrendingMoviesEndpoint = `${apiBaseUrl}/search/bytypesearchtage/Trending`;
const LatestMoviesEndpoint = `${apiBaseUrl}/search/bytypesearchtage/Latest`;
const PopularMoviesEndpoint = `${apiBaseUrl}/search/bytypesearchtage/Popular`;
const ActionMoviesEndpoint = `${apiBaseUrl}/search/bytypesearchtage/Action`;
const MarvelMoviesEndpoint = `${apiBaseUrl}/search/bytypesearchtage/Marvel`;
const DCMoviesEndpoint = `${apiBaseUrl}/search/bytypesearchtage/DC`;
const ThrillerMoviesEndpoint = `${apiBaseUrl}/search/bytypesearchtage/Thriller`;
const HorrorMoviesEndpoint = `${apiBaseUrl}/search/bytypesearchtage/Horror`;




///category mmovies 

const CategoriesMovies = id => `${apiBaseUrl}/search/bytype/${id}`;

/*
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;
*/

// endpoints with dynamic params

// movie
/*
const movieDetailsEndpoint = id=> `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoint = id=> `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const similarMoviesEndpoint = id=> `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;
*/


const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    };

    try{
        const response = await axios.request(options);
        return  response.data;
    }catch(error){
        console.log('error: ',error);
        return {};
    }
}

// home screen apis
export const fetchHollyWoodMovies = ()=>{
    return apiCall(HollyWoodMoviesEndpoint);
}

export const fetchBollywoodMovies = ()=>{
    return apiCall(BollyWoodMoviesEndpoint);
}

export const fetchSeriesMovies = ()=>{
    return apiCall(SeriesMoviesEndpoint);
}

export const fetchIndianSeriesMovies = ()=>{
    return apiCall(IndianSeriesMoviesEndpoint);
}

export const fetchTvDramaMovies = ()=>{
    return apiCall(TvDramaMoviesEndpoint);
}


export const fetchLast10gMovies = ()=>{
    return apiCall(lasttenmoviesforcrousel);
}

//hoe screen array movies api

export const fetchTrendingMovies = ()=>{
    return apiCall(TrendingMoviesEndpoint);
}

export const fetchLatestMovies = ()=>{
    return apiCall(LatestMoviesEndpoint);
}

export const fetchPopularMovies = ()=>{
    return apiCall(PopularMoviesEndpoint);
}

export const fetchActionMovies = ()=>{
    return apiCall(ActionMoviesEndpoint);
}

export const fetchMarvelMovies = ()=>{
    return apiCall(MarvelMoviesEndpoint);
}

export const fetchDCMovies = ()=>{
    return apiCall(DCMoviesEndpoint);
}

export const fetchThrillerMovies = ()=>{
    return apiCall(ThrillerMoviesEndpoint);
}

export const fetchHorrorMovies = ()=>{
    return apiCall(HorrorMoviesEndpoint);
}



// movie screen apis
export const fetchCategoriesMovies = (id)=>{
    return apiCall(CategoriesMovies(id));
}


export const fetchSimilarMovies = (movieId)=>{
    return apiCall(similarMoviesEndpoint(movieId));
}

// person screen apis
export const fetchPersonDetails = (personId)=>{
    return apiCall(personDetailsEndpoint(personId));
}
export const fetchPersonMovies = (personId)=>{
    return apiCall(personMoviesEndpoint(personId));
}

// search screen apis
export const searchMovies = (params)=>{
    return apiCall(searchMoviesEndpoint, params);
}