import { useHttp } from '../../hooks/http.hook'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
}

// асинхронный запрос createAsyncThunk
export const fetchHeroes = createAsyncThunk('heroes/fetchHeroes', async () => {
  const { request } = useHttp()
  return await request('http://localhost:3001/heroes')
})

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    // нам это не надо, тк мы создали fetchHeroes
    // heroesFetching: (state) => {
    //   state.heroesLoadingStatus = 'loading'
    // },
    // heroesFetched: (state, action) => {
    //   state.heroesLoadingStatus = 'idle'
    //   state.heroes = action.payload
    // },
    // heroesFetchingError: (state) => {
    //   state.heroesLoadingStatus = 'error'
    // },
    heroCreated: (state, action) => {
      state.heroes.push(action.payload)
    },
    heroDeleted: (state, action) => {
      state.heroes = state.heroes.filter((item) => item.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.heroesLoadingStatus = 'loading'
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.heroesLoadingStatus = 'idle'
        state.heroes = action.payload
      })
      .addCase(fetchHeroes.rejected, (state) => {
        state.heroesLoadingStatus = 'error'
      })
      .addDefaultCase(() => {})
  },
})

const { actions, reducer } = heroesSlice

export default reducer

export const {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroCreated,
  heroDeleted,
} = actions
