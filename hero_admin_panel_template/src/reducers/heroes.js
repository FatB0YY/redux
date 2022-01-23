import { createReducer } from '@reduxjs/toolkit'

import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroCreated,
  heroDeleted,
} from '../actions'

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
}

const heroes = createReducer(initialState, (builder) => {
  builder
    .addCase(heroesFetching, (state) => {
      state.heroesLoadingStatus = 'loading'
    })
    .addCase(heroesFetched, (state, action) => {
      state.heroesLoadingStatus = 'idle'
      state.heroes = action.payload
    })
    .addCase(heroesFetchingError, (state) => {
      state.heroesLoadingStatus = 'error'
    })
    .addCase(heroCreated, (state, action) => {
      state.heroes.push(action.payload)
    })
    .addCase(heroDeleted, (state, action) => {
      state.heroes = state.heroes.filter((item) => item.id !== action.payload)
    })
    // последнее условие default
    .addDefaultCase(() => {})
})

// стандрат es6, который не работает с ts
// const heroes = createReducer(initialState, {
//   [heroesFetching]: state => {state.heroesLoadingStatus = 'loading'},
//   [heroesFetched]: (state, action) => {
//                   state.heroesLoadingStatus = 'idle';
//                   state.heroes = action.payload;
//               },
//   [heroesFetchingError]: state => {
//                   state.heroesLoadingStatus = 'error';
//               },
//   [heroCreated]: (state, action) => {
//                   state.heroes.push(action.payload);
//               },
//   [heroDeleted]: (state, action) => {
//                   state.heroes = state.heroes.filter(item => item.id !== action.payload);
//               }
//       },
//   [],
//   state => state
// )

// const heroes = (state = initialState, action) => {
//   switch (action.type) {
//     // загрузка героев
//     case 'HEROES_FETCHING':
//       return {
//         ...state,
//         heroesLoadingStatus: 'loading',
//       }

//     case 'HEROES_FETCHED':
//       return {
//         ...state,
//         heroes: action.payload,
//         heroesLoadingStatus: 'idle',
//       }

//     case 'HEROES_FETCHING_ERROR':
//       return {
//         ...state,
//         heroesLoadingStatus: 'error',
//       }

//     // управление героями
//     case 'HERO_DELETED':
//       // сохраняем иммутабельность
//       const newHeroList = state.heroes.filter(
//         // в action.payload у нас id
//         (item) => item.id !== action.payload
//       )
//       return {
//         ...state,
//         heroes: newHeroList,
//       }

//     case 'HERO_CREATED':
//       // в action.payload у нас объект hero
//       let newCreatedHeroList = [...state.heroes, action.payload]
//       return {
//         ...state,
//         heroes: newCreatedHeroList,
//       }

//     default:
//       return state
//   }
// }

export default heroes
