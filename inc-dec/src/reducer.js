// зеленый квадратик, начальный стейт
const initialState = {value: 0}

// reducer
// она должна быть всегда чистой функцией (payload), нельзя например поставить минус/плюс рандом math
// должна зависеть только от стейта, который в нее приходит
// и от action и без побочных проблем
// также соблюдать иммутабельность (стейт не должен быть мутирован)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        value: state.value + 1,
      }
    case 'DEC':
      return {
        ...state,
        value: state.value - action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export default reducer
