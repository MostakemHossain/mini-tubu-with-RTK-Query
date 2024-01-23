import { Provider } from 'react-redux'
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { store } from "./redux/features/store"


function App() {


  return (
    <Provider store={store}>
      <Navbar/>
      <Outlet/>
    </Provider>
  )
}

export default App
