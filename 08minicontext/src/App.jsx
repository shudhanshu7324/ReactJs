import UserContextProvider from '../context/UserContextProvider'
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Chai aur Context</h1>
    </UserContextProvider>
  )
}

export default App
