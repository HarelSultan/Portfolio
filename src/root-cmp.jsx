import { AppHeader } from './js/cmps/app-header'
import { AppFooter } from './js/cmps/app-footer'
import { HomePage } from './js/pages/home-page'
import './assets/main.scss'
import { useState } from 'react'

function App() {
    const [isMenuDisplayed, setIsMenuDisplayed] = useState(false)

    function onSetMenuDisplay() {
        setIsMenuDisplayed(prevState => !prevState)
    }

    return (
        <div className={`main-layout app ${isMenuDisplayed ? 'menu-open' : ''}`}>
            <AppHeader onSetMenuDisplay={onSetMenuDisplay} />
            <HomePage />
            <AppFooter />
        </div>
    )
}

export default App
