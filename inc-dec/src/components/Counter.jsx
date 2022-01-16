import { connect } from 'react-redux'
// import * as actions from '../actions'
import { inc, dec } from '../actions'

// работаем с хуками
import { useSelector, useDispatch } from 'react-redux'

// const Counter = ({ counter, inc, dec }) => {
const Counter = () => {
  const { counter } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div className='jumbotron'>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(dec())} className='btn btn-primary'>
        DEC
      </button>
      <button onClick={() => dispatch(inc())} className='btn btn-primary'>
        INC
      </button>
    </div>
  )
}

// // должна быть чистой и синхронной
// const mapStateToProps = (state) => {
//   // этот объект будет пропсами
//   return {
//     counter: state.value,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   // const { inc, dec } = bindActionCreators(actions, dispatch)
//   return bindActionCreators(actions, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// export default connect(mapStateToProps, actions)(Counter)
export default Counter
