import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { CustomBtn } from './custom-btn'
import { Carousel } from 'react-responsive-carousel'

export function Portfolio() {
    const projectsInfo = [
        {
            name: 'Editor quix (Wix clone)',
            desc: 'Designed and developed a full-stack website builder platform clone of Editor quix using the MERN stack. The platform includes smart components, real-time statistics, live chat, email management, lead organization, and meeting scheduling capabilities.',
            tools: 'Utilized React.js, Redux, JavaScript, Node.js, MongoDB, Express.js, Socket.io, SASS, REST, MVC, and Git to build the platform',
            projUrl: 'https://www.editorquix.com/',
            githubUrl: 'https://github.com/HarelSultan/Editor-quix-code',
            imgUrl: 'quix.png',
        },
        {
            name: 'Airbnb Clone',
            desc: 'Designed and developed a full-stack website clone of Airbnb using React with Typescript. The platform includes a wide range of features such as search, filter, booking capabilities, map search, which were designed and implemented with the utmost attention to detail and usability.',
            tools: 'Utilized React.js, Redux, Typescript, SASS, and Git to build the platform.',
            projUrl: 'https://github.com/HarelSultan/Airbnb-frontend',
            githubUrl: 'https://github.com/HarelSultan/Airbnb-frontend',
            imgUrl: 'airbnb.png',
        },
        {
            name: 'Meme Generator',
            desc: 'Designed and developed a meme generator web application, utilizing vanilla JavaScript, CSS, and HTML. The platform features a user-friendly interface with drag-and-drop functionality, uploading, downloading and sharing memes to social medias.',
            tools: 'Utilized HTML, CSS & vanilla Javascript.',
            projUrl: 'https://harelsultan.github.io/Meme-Generator/',
            githubUrl: 'https://github.com/HarelSultan/Meme-Generator',
            imgUrl: 'meme-gen.png',
        },
    ]

    return (
        <section className='full portfolio' id='portfolio'>
            <h2 className='markup-txt'>My Portfolio</h2>
            <span>A small gallery of recent projects chosen by me.</span>
            <Carousel>
                {projectsInfo.map(proj => (
                    <div className='project-container' key={proj.name}>
                        <div className='project-desc-container'>
                            <h3>{proj.name}</h3>
                            <p>{proj.desc}</p>
                            <p>{proj.tools}</p>
                            <div className='btns-container'>
                                <CustomBtn href={proj.projUrl} txt={'Live Demo'} target={'_blank'} />
                                <a target='_blank' href={proj.githubUrl} className='btn'>
                                    Github Repo
                                </a>
                            </div>
                        </div>

                        <div className='project-img-container'>
                            <img src={require(`../../assets/img/${proj.imgUrl}`)} alt='sorry no img' />
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}
