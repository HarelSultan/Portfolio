import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export function AppHeader({ onSetMenuDisplay }) {
    return (
        <header className='main-layout full app-header'>
            <div onClick={onSetMenuDisplay} className='main-screen full'></div>
            <div className='layout-wrapper'>
                <div className='logo-container'>
                    <a href='#root'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            zoomAndPan='magnify'
                            viewBox='0 0 375 374.999991'
                            preserveAspectRatio='xMidYMid meet'
                            version='1.0'
                        >
                            <defs>
                                <clipPath id='91f7256336'>
                                    <path
                                        d='M 95.957031 70.515625 L 278.957031 70.515625 L 278.957031 304.515625 L 95.957031 304.515625 Z M 95.957031 70.515625 '
                                        clipRule='nonzero'
                                    />
                                </clipPath>
                            </defs>
                            <g clipPath='url(#91f7256336)'>
                                <path
                                    fill='#08fdd8'
                                    d='M 208.933594 152.453125 L 165.976562 152.453125 L 165.976562 93.214844 L 143.425781 70.644531 L 95.957031 70.644531 L 95.957031 281.816406 L 118.515625 304.382812 L 165.976562 304.382812 L 165.976562 222.519531 L 208.933594 222.496094 L 208.933594 281.816406 L 231.488281 304.382812 L 278.957031 304.382812 L 278.957031 93.214844 L 256.40625 70.644531 L 208.9375 70.644531 L 208.9375 152.453125 Z M 143.425781 74.792969 L 163.046875 94.421875 L 163.046875 152.453125 L 143.425781 152.453125 Z M 163.042969 299.371094 L 143.421875 279.742188 L 143.421875 202.03125 L 163.042969 221.664062 Z M 256.40625 74.792969 L 276.027344 94.421875 L 276.027344 299.371094 L 256.40625 279.738281 Z M 211.867188 73.570312 L 253.472656 73.570312 L 253.472656 278.882812 L 211.867188 278.882812 L 211.867188 197.023438 L 140.488281 197.023438 L 140.488281 278.882812 L 98.890625 278.882812 L 98.890625 73.570312 L 140.492188 73.570312 L 140.492188 155.375 L 211.867188 155.375 Z M 135.277344 78.789062 L 104.097656 78.789062 L 104.097656 273.664062 L 135.277344 273.664062 L 135.277344 191.816406 L 217.074219 191.816406 L 217.074219 273.664062 L 248.257812 273.664062 L 248.257812 78.789062 L 217.074219 78.789062 L 217.074219 160.605469 L 135.277344 160.605469 Z M 135.441406 166.792969 L 223.261719 166.792969 L 223.261719 84.976562 L 245.324219 84.976562 L 245.324219 270.730469 L 223.261719 270.730469 L 223.261719 191.96875 L 220.007812 188.882812 L 132.34375 188.882812 L 132.34375 270.730469 L 110.289062 270.730469 L 110.289062 84.976562 L 132.347656 84.976562 L 132.347656 163.535156 Z M 135.441406 166.792969 '
                                    fillOpacity='1'
                                    fillRule='nonzero'
                                />
                            </g>
                        </svg>
                    </a>
                </div>
                <nav className='app-nav'>
                    <ul className='links-list clean-list'>
                        <li className='link-wrapper'>
                            <a onClick={onSetMenuDisplay} className='link' href='#about'>
                                About
                            </a>{' '}
                        </li>
                        <li className='link-wrapper'>
                            <a onClick={onSetMenuDisplay} className='link' href='#portfolio'>
                                Portfolio
                            </a>
                        </li>
                        <li className='link-wrapper'>
                            <a onClick={onSetMenuDisplay} className='link' href='#skills'>
                                Skills
                            </a>
                        </li>
                        <li className='link-wrapper'>
                            <a onClick={onSetMenuDisplay} className='link' href='#contact'>
                                Contact
                            </a>
                        </li>
                        <li>
                            <ul className='sidebar-icons clean-list'>
                                <li className='sidebox' onClick={() => window.open('https://github.com/harelsultan')}>
                                    <FaGithub />
                                </li>

                                <li className='sidebox' onClick={() => window.open('mailto:harel714@gmail.com')}>
                                    <svg
                                        stroke='currentColor'
                                        fill='currentColor'
                                        strokeWidth='0'
                                        viewBox='0 0 512 512'
                                        height='1em'
                                        width='1em'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'></path>
                                    </svg>
                                </li>
                                <li
                                    className='sidebox'
                                    onClick={() => window.open('https://www.linkedin.com/in/harel-sultan-835157264/')}
                                >
                                    <FaLinkedinIn />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* <ul className='sidebar-icons clean-list'>
                    <li className='sidebox' onClick={() => window.open('https://github.com/harelsultan')}>
                        <FaGithub />
                    </li>

                    <li className='sidebox' onClick={() => window.open('mailto:harel714@gmail.com')}>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 512 512'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'></path>
                        </svg>
                    </li>
                    <li
                        className='sidebox'
                        onClick={() => window.open('https://www.linkedin.com/in/harel-sultan-835157264/')}
                    >
                        <FaLinkedinIn />
                    </li>
                </ul> */}
                <button onClick={onSetMenuDisplay} className='menu-toggle-btn'>
                    ☰
                </button>
            </div>
        </header>
    )
}
