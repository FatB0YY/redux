// import { createAction } from '@reduxjs/toolkit'

// import {
//   heroesFetching,
//   heroesFetched,
//   heroesFetchingError,
// } from '../components/heroesList/heroesSlice'

// запрос // перенесли в слайз
// export const fetchHeroes = (request) => (dispatch) => {
//   dispatch(heroesFetching())
//   request('http://localhost:3001/heroes')
//     .then((data) => dispatch(heroesFetched(data)))
//     .catch(() => dispatch(heroesFetchingError()))
// }

// загрузка героев
// export const heroesFetching = () => {
//   return {
//     type: 'HEROES_FETCHING',
//   }
// }
// //export const heroesFetching = createAction('HEROES_FETCHING')

// export const heroesFetched = (heroes) => {
//   return {
//     type: 'HEROES_FETCHED',
//     payload: heroes,
//   }
// }
// //export const heroesFetched = createAction('HEROES_FETCHED')

// export const heroesFetchingError = () => {
//   return {
//     type: 'HEROES_FETCHING_ERROR',
//   }
// }
// //export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');

// загрузка фильтров
export const filtersFetching = () => {
  return {
    type: 'FILTERS_FETCHING',
  }
}

export const filtersFetched = (filters) => {
  return {
    type: 'FILTERS_FETCHED',
    payload: filters,
  }
}

export const filtersFetchingError = () => {
  return {
    type: 'FILTERS_FETCHING_ERROR',
  }
}

// управление героями
// export const heroDeleted = (id) => {
//   return {
//     type: 'HERO_DELETED',
//     payload: id,
//   }
// }
// //export const heroDeleted = createAction('HERO_DELETED');

// export const heroCreated = (hero) => {
//   return {
//     type: 'HERO_CREATED',
//     payload: hero,
//   }
// }

// //export const heroCreated = createAction('HERO_CREATED');

// управление фильтрами

// export const activeFilterChanged = (filter) => (dispatch) => {
//   setTimeout(() => {
//     dispatch({
//       type: 'ACTIVE_FILTER_CHANGED',
//       payload: filter,
//     })
//   }, 100)
// }

export const activeFilterChanged = (filter) => {
  return {
    type: 'ACTIVE_FILTER_CHANGED',
    payload: filter,
  }
}
