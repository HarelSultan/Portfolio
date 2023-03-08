import { CustomBtn } from './custom-btn'

export function About() {
    return (
        <section className='about' id='about'>
            <div className='about-desc-container'>
                <h2 className='markup-txt'>about me</h2>

                <p>
                    Since Adobe Flash was a complete innovation, alongside with CSS 1.0 and HTML 4.01 as standards of
                    the current web I've been passionate about web.
                </p>
                <p>
                    For over a decade I had many opportunities to work in a vast spectrum of web technologies what let
                    me gather a significant amount of various experience. Working for companies and individuals around
                    the globe I met and learnt from amazing and ambitious people.
                </p>
                <p>I currently work remotely with a selected freelance client base being open for new opportunities.</p>
                <CustomBtn
                    href={'https://drive.google.com/file/d/1U9NLffFAaqKzwvO-4N8jbc0tgWaqqkd6/view?usp=share_link'}
                    txt={'View my resume'}
                    target={'_blank'}
                />
            </div>

            <div className='about-img-container'>
                <img src={require('../../assets/img/portfolio.png')} alt='sorry no img' />
            </div>
        </section>
    )
}
