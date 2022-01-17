const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
}

const heroes = (state = initialState, action) => {
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
      }

    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
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
      }

    case 'HERO_CREATED':
      // в action.payload у нас объект hero
      let newCreatedHeroList = [...state.heroes, action.payload]
      return {
        ...state,
        heroes: newCreatedHeroList,
      }

    default:
      return state
  }
}

export default heroes
