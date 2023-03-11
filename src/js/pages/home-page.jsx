import { About } from '../cmps/about'
import { Contact } from '../cmps/contact'
import { Hero } from '../cmps/hero'
import { Portfolio } from '../cmps/portfolio'
import { Skills } from '../cmps/skills'

export function HomePage() {
    return (
        <main id='home' className='main-layout full home-page'>
            <div className='side-bar-wrapper full'>{/* <SideBar /> */}</div>
            <div className='main-content main-layout'>
                <Hero />
                <About />
                <Portfolio />
                <Skills />
                <Contact />
            </div>
        </main>
    )
}
