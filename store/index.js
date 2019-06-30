import { createClient } from 'contentful'

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])

export const state = () => ({
  order: null,
  movies: [],
  selectedMovies: []
})

export const actions = {
  fetchMovies: async function({ commit }) {
    let param = {
      content_type: 'post',
      order: '-fields.releaseDate'
    }

    const { items } = await client.getEntries(param)
    const movies = items.map(item => item.fields.trailerId)

    commit('recieveMovies', { movies })
  }
}

export const mutations = {
  recieveMovies(state, { movies }) {
    state.movies = movies
  },
  select(state, { order }) {
    state.order = order

    if (order === 'random') {
      state.selectedMovies = shuffleArray(state.movies)
    } else {
      state.selectedMovies = [...state.movies]
    }
  },
  unselect(state) {
    if (state.order) {
      state.order = null
    }
    if (state.selectedMovies.length) {
      state.selectedMovies = []
    }
  }
}
