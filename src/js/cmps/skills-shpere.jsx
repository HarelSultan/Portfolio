import { useEffect } from 'react'
import TagCloud from 'TagCloud'

export function SkillsShpere() {
    useEffect(() => {
        return () => {
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
            const options = {
                radius: 200,
                maxSpeed: 'fast',
                initSpeed: 'fast',
                keep: false,
            }

            TagCloud(container, skills, options)
        }
    }, [])
    return (
        <div className='skills-shpere'>
            <span className='tagcloud'></span>
        </div>
    )
}
