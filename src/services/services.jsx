import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { homePageGalleryQuerySource } from './sources/homePageGalleryQuerySource';
const PICTURE_BASE = 'https://image.tmdb.org/t/p/w500';

const TMDB_BASE = 'https://api.themoviedb.org/3';
const TMDB_KEY = 'ae692f579055feb645577941bd67daeb';

export async function getMovieById(id) {
  try {
    const response = await fetch(
      `${TMDB_BASE}/movie/${id}?api_key=${TMDB_KEY}`
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Not Found');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCreditsById(id) {
  try {
    const response = await fetch(
      `${TMDB_BASE}/movie/${id}/credits?api_key=${TMDB_KEY}`
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Not Found');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function getReviewsById(id) {
  try {
    const response = await fetch(
      `${TMDB_BASE}/movie/${id}/reviews?api_key=${TMDB_KEY}`
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Not Found');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export function getPictureAddress(param) {
  return param ? `${PICTURE_BASE}${param}` : '';
}

export function createPrivateLists(sourceArray, id) {
  sourceArray.forEach(source => setDoc(doc(db, source, id), {}));
}

export function getHomePageGalleryTypeQuery(type) {
  const {
    trendingMoviesQuery,
    currentMoviesQuery,
    popularMoviesQuery,
    topMoviesQuery,
  } = homePageGalleryQuerySource;
  switch (type) {
    case 'trending':
      return trendingMoviesQuery;
    case 'current':
      return currentMoviesQuery;
    case 'popular':
      return popularMoviesQuery;
    case 'top':
      return topMoviesQuery;
    default:
      return;
  }
}

export function getHomePageGalleryCaption(type) {
  const {
    trendingMoviesCaption,
    currentMoviesCaption,
    popularMoviesCaption,
    topMoviesCaption,
  } = homePageGalleryQuerySource;
  switch (type) {
    case 'trending':
      return trendingMoviesCaption;
    case 'current':
      return currentMoviesCaption;
    case 'popular':
      return popularMoviesCaption;
    case 'top':
      return topMoviesCaption;
    default:
      return;
  }
}

export function getQueryByParams(params) {
  const keys = Object.keys(params);
  if (!keys.length) {
    return '';
  }
  let genresString = '';
  if (!keys.includes('genres')) {
    genresString = '';
  } else {
    genresString = `&with_genres=${params.genres
      .map(genre => genre.value)
      .join(',')}`;
  }
  return `${genresString}`;
}