import { INCREMENT, DECREMENT, RESET } from '../actions/index'

const INITIAL_STATE = {
  count: 0
}

// Combined Reducers
export default function counterReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state -1
    case RESET:
      return 0
    default:
      return state
  }
}

// Single Reducer
// export default function counterReducer(state = initialState, action) {
//   switch(action.type) {
//     case INCREMENT:
//       return {
//         count: state.count + 1
//       }
//     case DECREMENT:
//       return {
//         count: state.count - 1
//       }
//     case RESET:
//       return {
//         count: 0
//       }
//     default:
//       return state
//   }
// }