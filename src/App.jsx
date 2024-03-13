import './App.css'
import Navbar from './components/Navbar'
import ThemeButton from './components/ThemeButton'
import { NewsProvider } from './context/news/NewsContext'
import { WeatherProvider } from './context/weather/WeatherContext'
import Home from './pages/Home'


const App = () =>{

  return(
    <NewsProvider>

    <Navbar/>

    <WeatherProvider>
      <Home/>
    </WeatherProvider>

    <ThemeButton/>

    </NewsProvider>
  )
}

export default App
