const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  filters: [],
  filtersLoadingStatus: 'idle',
  activeFilter: 'all',
  filteredHeroes: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // загрузка героев
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      }

    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: 'idle',
        filteredHeroes:
          state.activeFilter === 'all'
            ? action.payload
            : action.payload.filter(
                (item) => item.element === state.activeFilter
              ),
      }

    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      }
    // загрузка фильтров

    case 'FILTERS_FETCHING':
      return {
        ...state,
        filtersLoadingStatus: 'loading',
      }

    case 'FILTERS_FETCHED':
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: 'idle',
      }

    case 'FILTERS_FETCHING_ERROR':
      return {
        ...state,
        filtersLoadingStatus: 'error',
      }

    // управление героями
    case 'HERO_DELETED':
      // сохраняем иммутабельность
      const newHeroList = state.heroes.filter(
        // в action.payload у нас id
        (item) => item.id !== action.payload
      )
      return {
        ...state,
        heroes: newHeroList,
        filteredHeroes:
          state.activeFilter === 'all'
            ? newHeroList
            : newHeroList.filter((item) => item.element === state.activeFilter),
      }

    case 'HERO_CREATED':
      // в action.payload у нас объект hero
      let newCreatedHeroList = [...state.heroes, action.payload]
      return {
        ...state,
        heroes: newCreatedHeroList,
        filteredHeroes:
          state.activeFilter === 'all'
            ? newCreatedHeroList
            : newCreatedHeroList.filter(
                (item) => item.element === state.activeFilter
              ),
      }

    // управление фильтрами
    case 'ACTIVE_FILTER_CHANGED':
      return {
        ...state,
        activeFilter: action.payload,
        filteredHeroes:
          action.payload === 'all'
            ? state.heroes
            : state.heroes.filter((item) => item.element === action.payload),
      }

    default:
      return state
  }
}

export default reducer
