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
            githubUrl: 'https://github.com/HarelSultan/quix-backend',
            imgUrl: 'editor-quix.png',
        },
        {
            name: 'Editor asquix (Wix clone)',
            desc: 'Designed and developed a full-stack website builder platform clone of Editor quix using the MERN stack. The platform includes smart components, real-time statistics, live chat, email management, lead organization, and meeting scheduling capabilities.',
            tools: 'Utilized React.js, Redux, JavaScript, Node.js, MongoDB, Express.js, Socket.io, SASS, REST, MVC, and Git to build the platform',
            projUrl: 'https://www.editorquix.com/',
            githubUrl: 'https://github.com/HarelSultan/quix-backend',
            imgUrl: 'editor-quix.png',
        },
        {
            name: 'Editor saquix (Wix clone)',
            desc: 'Designed and developed a full-stack website builder platform clone of Editor quix using the MERN stack. The platform includes smart components, real-time statistics, live chat, email management, lead organization, and meeting scheduling capabilities.',
            tools: 'Utilized React.js, Redux, JavaScript, Node.js, MongoDB, Express.js, Socket.io, SASS, REST, MVC, and Git to build the platform',
            projUrl: 'https://www.editorquix.com/',
            githubUrl: 'https://github.com/HarelSultan/quix-backend',
            imgUrl: 'editor-quix.png',
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
