import { createClient } from 'contentful'

const PLAYLIST_LENGTH = 50

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
  isAgreed: false,
  pleaseAgree: false,
  order: null,
  currentIndex: null,
  previousIndex: null,
  movies: [],
  playlists: [],
  selectedMovies: [],
  errorMessage: ''
})

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await Promise.all([dispatch('fetchMovies'), dispatch('fetchPlaylists')])
  },
  async fetchMovies({ commit }) {
    const { items } = await client.getEntries({
      content_type: 'post',
      order: '-fields.releaseDate',
      limit: 1000
    })
    const movies = items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      releaseDate: item.fields.releaseDate.replace(/-/g, '.').slice(2),
      trailerId: item.fields.trailerId
    }))

    commit('recieveMovies', { movies })
  },
  async fetchPlaylists({ commit }) {
    const { items } = await client.getEntries({
      content_type: 'playlist',
      limit: 1000
    })
    const playlists = items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      movieIds: item.fields.posts.map(post => post.sys.id)
    }))

    commit('recievePlaylists', { playlists })
  },
  toggle({ state, commit }, { order, id = null } = {}) {
    if (state.order !== order) {
      commit('select', { order, id })
      return
    }

    if (state.selectedMovies.length) {
      commit('unselect')
    } else {
      commit('select', { order, id })
    }
  }
}

export const mutations = {
  agree(state) {
    state.isAgreed = true
  },
  setPleaseAgree(state) {
    state.pleaseAgree = true
  },
  clsearPleaseAgree(state) {
    state.pleaseAgree = false
  },
  recieveMovies(state, { movies }) {
    state.movies = movies
  },
  recievePlaylists(state, { playlists }) {
    state.playlists = playlists
  },
  select(state, { order, index = 0 } = {}) {
    if (!state.isAgreed) {
      state.pleaseAgree = true
      return
    }

    state.order = order
    state.currentIndex = 0

    if (order === 'random') {
      state.selectedMovies = shuffleArray(state.movies).slice(
        0,
        PLAYLIST_LENGTH
      )
    } else {
      state.selectedMovies = [...state.movies].slice(
        index,
        index + PLAYLIST_LENGTH
      )
    }
  },
  unselect(state) {
    if (state.order) {
      state.order = null
    }
    if (state.selectedMovies.length) {
      state.selectedMovies = []
    }
  },
  selectPlaylist(state, { id }) {
    if (!state.isAgreed) {
      state.pleaseAgree = true
      return
    }

    const selectedPlaylist = state.playlists.find(p => p.id === id)

    if (!selectedPlaylist) {
      return
    }

    const movies = selectedPlaylist.movieIds
      .map(movieId => state.movies.find(movie => movie.id === movieId))
      .filter(movie => movie !== undefined)

    if (!movies || !movies.length) {
      return
    }

    state.order = 'desc'
    state.currentIndex = 0
    state.selectedMovies = movies
  },
  setCurrentIndex(state, { index }) {
    state.currentIndex = index
  },
  setPreviousIndex(state, { index }) {
    state.previousIndex = index
  },
  setErrorMessage(state, { message }) {
    state.errorMessage = message
  },
  clearErrorMessage(state) {
    state.errorMessage = ''
  }
}

export const getters = {
  isPlaying(state, getters) {
    return !!(state.order !== null && getters.selectedTrailerIds.length)
  },
  currentMovie(state) {
    if (state.selectedMovies.length && state.currentIndex !== null) {
      return state.selectedMovies[state.currentIndex]
    }

    return null
  },
  playingTitle(state, getters) {
    if (getters.currentMovie) {
      return getters.currentMovie.title
    }

    return ''
  },
  lastIndex(state) {
    if (state.selectedMovies.length) {
      return state.selectedMovies.length - 1
    }

    return 0
  },
  selectedTrailerIds(state) {
    if (state.selectedMovies) {
      return state.selectedMovies.map(movie => movie.trailerId)
    }

    return []
  }
}
