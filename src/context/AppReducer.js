const tasks = (state, action) => {
 switch (action.type) {
   case 'GET_TASKS':
     return {
       ...state,
       tasks: action.payload,
     }
    case 'DELETE_TASK':
     return {
       ...state,
       tasks: state.tasks.filter((task) => task._id !== action.payload),
     }
   case 'COMPLETE_TASK':
     return {
       ...state,
       tasks: state.tasks.map(task => task._id === action.payload ? {...task, completed: true} : task)
     }
   default:
     return state
 }
}
export default tasks