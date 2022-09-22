import client from "./";

const API_KEY = 'api_key=383216bc3470b7b5495792c737a56154'

// export const GetSimilarMovies = async () => {
//     try{
//         const res = await client.get(`/movie/${}/similar?${API_KEY}`)
//         return res.data
//     } catch (error) {
//       throw error
//     }
// }

export const getPopularMovies = async (page) => {

  try{
      const res = await client.get(`/movie/popular?${API_KEY}&page=${page}`)
      return res.data
  } catch (error) {
    throw error
  }
}

export const getGenres = async () => {
  try{
      const res = await client.get(`/genre/movie/list?${API_KEY}`)
      return res.data
  } catch (error) {
    throw error
  }
}

export const getMoviesByGenre = async (genre_id,page)  => {
  try{
    const res = await client.get(`/discover/movie/?${API_KEY}&page=${page}&with_genres=${genre_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getMovieById = async (movie_id) => {
  try{
      const res = await client.get(`/movie/${movie_id}?${API_KEY}`)
      return res.data
  } catch (error) {
    throw error
  }
}