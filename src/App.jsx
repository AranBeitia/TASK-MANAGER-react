import TaskListView from './views/TaskListView'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <TaskListView />
    </GlobalProvider>
  )
}

export default App
