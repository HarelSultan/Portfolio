import { CustomBtn } from './custom-btn'

export function About() {
    return (
        <section className='about full' id='about'>
            <h2 className='markup-txt'>about me</h2>
            <div className='about-wrapper'>
                <div className='about-desc-container'>
                    <p>
                        Hi, I'm Harel Sultan, a full stack developer with a passion for creating dynamic and
                        user-friendly web applications.
                    </p>
                    <p>
                        I am passionate about code and constantly seeking new challenges and opportunities to expand my
                        skillset and stay up-to-date with the latest technologies in the field. I am particularly
                        interested in developing web applications that provide a seamless experience for the end-users.
                    </p>
                    <p>
                        In my free time, I enjoy going to the beach with my friends and dog, playing the guitar and
                        hitting the gym. I also enjoy working on personal projects to sharpen my skills and explore new
                        technologies.
                    </p>
                </div>

                <div className='about-img-container'>
                    <img src={require('../../assets/img/portfolio.png')} alt='sorry no img' />
                </div>
            </div>

            <CustomBtn
                href={'https://drive.google.com/file/d/1U9NLffFAaqKzwvO-4N8jbc0tgWaqqkd6/view?usp=share_link'}
                txt={'View my resume'}
                target={'_blank'}
            />
        </section>
    )
}

{
    /* <div className='about-desc-container'>
<p>
    Since Adobe Flash was a complete innovation, alongside with CSS 1.0 and HTML 4.01 as standards
    of the current web I've been passionate about web.
</p>
<p>
    For over a decade I had many opportunities to work in a vast spectrum of web technologies what
    let me gather a significant amount of various experience. Working for companies and individuals
    around the globe I met and learnt from amazing and ambitious people.
</p>
<p>
    I currently work remotely with a selected freelance client base being open for new
    opportunities.
</p>
</div> */
}
