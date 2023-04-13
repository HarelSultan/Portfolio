import { useEffect } from 'react'
import TagCloud from 'TagCloud'

export function SkillsShpere() {
    useEffect(() => {
        const container = '.tagcloud'
        const skills = [
            'HTML',
            'CSS',
            'SASS',
            'JavaScript',
            'React',
            'Angular',
            'Node JS',
            'Git',
            'NPM',
            'TypeScript',
            'REST',
            'ES6',
            'Express JS',
            'Mongo DB',
            'Socket IO',
        ]

        function radiusValue() {
            let radii
            if (window.screen.width <= 778) {
                radii = 200
            } else {
                radii = 290
            }
            return radii
        }

        const options = {
            radius: radiusValue(),
            maxSpeed: 'normal',
            initSpeed: 'normal',
            keep: true,
        }
        TagCloud(container, skills, options)
    }, [])

    return (
        <div className='skills-shpere'>
            <span className='tagcloud'></span>
        </div>
    )
}
