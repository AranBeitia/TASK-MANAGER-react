import TaskListView from './views/TaskListView'
import {GlobalProvider} from './context/GlobalState'
import GlobalStyles from './assets/styles/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './assets/styles/Theme'
import {useState} from 'react'
import SwitchButton from './components/switch-button/SwitchButton'

function App() {
  const [themeButton, setThemeButton] = useState(lightTheme)

  const changeTheme = () => {
    if (themeButton === lightTheme) setThemeButton(darkTheme)
    else setThemeButton(lightTheme)
  }
  return (
    <GlobalProvider>
      <ThemeProvider theme={themeButton}>
        <GlobalStyles />
        <SwitchButton onClick={changeTheme} />
        <TaskListView />
      </ThemeProvider>
    </GlobalProvider>
  )
}

export default App
