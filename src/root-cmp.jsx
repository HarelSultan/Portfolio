import { AppHeader } from './js/cmps/app-header'
import { AppFooter } from './js/cmps/app-footer'
import { HomePage } from './js/pages/home-page'
import './assets/main.scss'

function App() {
    return (
        <div className='App'>
            <AppHeader />
            <HomePage />
            <AppFooter />
        </div>
    )
}

export default App
